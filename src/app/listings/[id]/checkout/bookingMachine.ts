import { setup, assign, fromPromise } from "xstate";
import { Client, TypedDocumentNode, AnyVariables, OperationResult } from "urql";
import { graphql } from "@/gql";
import {
  BookingStatus,
  CreateBookingResultType,
  UpdateBookingResultType,
} from "@/gql/graphql";
import { BookingFormData } from "./FormBookingDetails";

export interface IBookingContext {
  // Identification
  experienceId: string;
  client: Client;
  // UI
  invoiceUrl?: string;
  bookingFlowToken?: string;
  errorMessage?: string;
  // Booking Form
  activityId?: string;
  date?: Date;
  email?: string;
}

const CreateBookingMutation = graphql(`
  mutation CreateBooking(
    $name: String!
    $email: String!
    $activityId: ID!
    $bookedDate: Date!
  ) {
    createBooking(
      data: {
        name: $name
        email: $email
        activityId: $activityId
        bookedDate: $bookedDate
      }
    ) {
      bookingFlowToken
    }
  }
`);

const UpdateBookingMutation = graphql(`
  mutation UpdateBooking(
    $bookingFlowToken: String!
    $name: String!
    $email: String!
    $activityId: ID!
    $bookedDate: Date!
  ) {
    updateBooking(
      data: {
        bookingFlowToken: $bookingFlowToken
        name: $name
        email: $email
        activityId: $activityId
        bookedDate: $bookedDate
      }
    )
  }
`);

const CreatePaymentMutation = graphql(`
  mutation CreatePayment($bookingFlowToken: String!) {
    createPayment(bookingFlowToken: $bookingFlowToken) {
      url
    }
  }
`);

const CheckBookingMutation = graphql(`
  mutation CheckBookingMutation($bookingFlowToken: String!) {
    checkBookingStatus(bookingFlowToken: $bookingFlowToken)
  }
`);

function withMinimumDuration<T>(
  promise: Promise<T>,
  duration: number = 600,
): Promise<T> {
  return Promise.all([
    promise,
    new Promise<void>((resolve) => setTimeout(resolve, duration)),
  ]).then(([result]) => result);
}

async function performMutation<TMutation, TVariables>(
  client: Client,
  mutation: TypedDocumentNode<TMutation, TVariables>,
  variables: TVariables,
): Promise<NonNullable<OperationResult<TMutation>["data"]>> {
  const result = await client.mutation(mutation, variables as AnyVariables);

  if (result.error) {
    console.log("API returned error: Throwing.");
    throw result.error;
  }

  if (!result.data) {
    throw new Error("API returned empty response");
  }

  return result.data;
}

export const bookingMachine = setup({
  types: {
    input: {} as {
      experienceId: string;
      client: Client;
      activityId?: string;
      date?: Date;
    },
    context: {} as IBookingContext,
    events: {} as
      | { type: "submit"; formData: BookingFormData }
      | { type: "paymentIsProcessing" }
      | { type: "error"; errorMessage: string }
      | { type: "closePopup" },
  },
  actors: {
    createBooking: fromPromise<
      CreateBookingResultType,
      { context: IBookingContext; formData: BookingFormData }
    >(async ({ input: { context, formData } }) => {
      try {
        if (!formData.activityId || !formData.email || !formData.bookingDate) {
          throw new Error("Incomplete data for creation");
        }

        const result = await withMinimumDuration(
          performMutation(context.client, CreateBookingMutation, {
            activityId: formData.activityId,
            email: formData.email,
            bookedDate: formData.bookingDate.toISOString().split("T")[0],
            availabilityId: "QXZhaWxhYmlsaXR5OjE=", // @todo replace this as soon we have absences
            name: "John Does (mocked - do we need this?)",
            numberOfSlots: 1,
          }),
        );

        return {
          bookingFlowToken: result.createBooking.bookingFlowToken,
        };
      } catch (err) {
        throw err;
      }
    }),
    updateBooking: fromPromise<
      Boolean,
      { context: IBookingContext; formData: BookingFormData }
    >(async ({ input: { context, formData } }) => {
      try {
        if (!context.bookingFlowToken) {
          throw new Error("bookingFlowToken required to update booking");
        }
        if (!context.activityId || !context.email || !context.date) {
          throw new Error("Incomplete data for creation");
        }

        const result = await withMinimumDuration(
          performMutation(context.client, UpdateBookingMutation, {
            bookingFlowToken: context.bookingFlowToken,
            activityId: formData.activityId,
            email: formData.email,
            bookedDate: formData.bookingDate.toISOString().split("T")[0],
            availabilityId: "QXZhaWxhYmlsaXR5OjE=", // @todo replace this as soon we have absences
            name: "John Does (mocked - do we need this?)",
            numberOfSlots: 1,
          }),
        );

        return true;
      } catch (err) {
        throw err;
      }
    }),
    createPayment: fromPromise<string, { context: IBookingContext }>(
      async ({ input: { context } }) => {
        try {
          if (!context.bookingFlowToken) {
            throw new Error("bookingFlowToken required to update booking");
          }
          if (!context.activityId || !context.email || !context.date) {
            throw new Error("Incomplete data for creation");
          }

          const result = await withMinimumDuration(
            performMutation(context.client, CreatePaymentMutation, {
              bookingFlowToken: context.bookingFlowToken,
            }),
          );

          return result.createPayment.url;
        } catch (err) {
          throw err;
        }
      },
    ),
    checkBookingStatus: fromPromise<
      BookingStatus,
      { context: IBookingContext }
    >(async ({ input: { context } }) => {
      try {
        if (!context.bookingFlowToken) {
          throw new Error("bookingFlowToken required to check booking status");
        }

        const result = await withMinimumDuration(
          performMutation(context.client, CheckBookingMutation, {
            bookingFlowToken: context.bookingFlowToken,
          }),
          1500,
        );

        return result.checkBookingStatus;
      } catch (err) {
        throw err;
      }
    }),
    redirectToPayment: fromPromise<Boolean, { context: IBookingContext }>(
      async ({ input: { context } }) => {
        try {
          if (!context.invoiceUrl) {
            throw new Error(
              "Unable to redirect to payment provider. Please retry again.",
            );
          }
          window.location.replace(context.invoiceUrl);

          return true;
        } catch (err) {
          throw err;
        }
      },
    ),
    checkRedirectStatus: fromPromise<boolean, { context: IBookingContext }>(
      async ({ input: { context } }) => {
        return await withMinimumDuration(
          (async () => {
            if (!window || !context.bookingFlowToken) {
              return false;
            }
            const searchParams = new URLSearchParams(window.location.search);

            const paymentStatus = searchParams.get("paymentStatus");
            if (paymentStatus !== "success") {
              throw new Error("Payment failed");
            }
            return true;
          })(),
          1500,
        );
      },
    ),
  },
  actions: {
    logTelemetry: () => {
      // TODO: implement
    },
  },
}).createMachine({
  id: "booking",
  initial: "BookingDetails",
  context: ({ input }) => ({
    ...input,
  }),
  states: {
    BookingDetails: {
      on: {
        submit: [
          {
            guard: ({ context, event: { formData } }) =>
              !!context.bookingFlowToken &&
              !!context.experienceId &&
              !!formData.activityId &&
              !!formData.bookingDate &&
              !!formData.email,
            target: "UpdateBooking",
            actions: [
              assign(({ event: { formData } }) => ({
                activityId: formData.activityId,
                date: formData.bookingDate,
                email: formData.email,
              })),
            ],
          },
          {
            guard: ({ context, event: { formData } }) =>
              !!context.experienceId &&
              !!formData.activityId &&
              !!formData.bookingDate &&
              !!formData.email,
            target: "CreateBooking",
            actions: [
              assign(({ event: { formData } }) => ({
                activityId: formData.activityId,
                date: formData.bookingDate,
                email: formData.email,
              })),
            ],
          },
          {
            target: "DisplayError",
            actions: [
              assign({
                errorMessage:
                  "Something went wrong. We don't know what you are trying to book. Please try again.",
              }),
            ],
          },
        ],
      },
    },
    CreateBooking: {
      invoke: {
        id: "createBooking",
        src: "createBooking",
        input: ({ context, event }) => {
          if (event.type !== "submit") {
            throw new Error("wrong input");
          }
          return {
            context,
            formData: event.formData,
          };
        },
        onDone: {
          target: "CreatePayment",
          actions: assign(({ event }) => ({
            bookingFlowToken: event.output.bookingFlowToken,
          })),
        },
        onError: {
          target: "DisplayError",
          actions: assign({
            errorMessage: ({ event }) => (event.error as Error).message,
          }),
        },
      },
    },
    UpdateBooking: {
      invoke: {
        id: "updateBooking",
        src: "updateBooking",
        input: ({ context, event }) => {
          if (event.type !== "submit") {
            throw new Error("wrong input");
          }
          return {
            context,
            formData: event.formData,
          };
        },
        onDone: {
          target: "CreatePayment",
        },
        onError: {
          target: "DisplayError",
          actions: assign({
            bookingFlowToken: undefined,
            errorMessage: ({ event }) =>
              `Updating booking reservation failed. Please try submitting this again. Error: ${(event.error as Error).message}`,
          }),
        },
      },
    },
    CreatePayment: {
      invoke: {
        id: "createPayment",
        src: "createPayment",
        input: ({ context }) => ({ context }),
        onDone: {
          target: "RedirectToPayment",
          actions: assign(({ event }) => ({
            invoiceUrl: event.output,
          })),
        },
        onError: {
          target: "DisplayError",
          actions: assign({
            errorMessage: "Unable to create new payment. Please try again.",
          }),
        },
      },
    },
    RedirectToPayment: {
      invoke: {
        id: "redirectToPayment",
        src: "redirectToPayment",
        input: ({ context }) => ({ context }),
        onDone: { target: "checkRedirectStatus" },
      },
    },
    checkRedirectStatus: {
      invoke: {
        id: "checkRedirectStatus",
        src: "checkRedirectStatus",
        input: ({ context }) => ({ context }),
        onDone: {
          target: "CheckBookingStatus",
        },
        onError: {
          target: "DisplayError",
          actions: assign({
            errorMessage:
              "Looks like you had issues with your payment. Please try again.",
          }),
        },
      },
    },
    CheckBookingStatus: {
      invoke: {
        id: "checkBookingStatus",
        src: "checkBookingStatus",
        input: ({ context }) => ({ context }),
        onDone: [
          {
            target: "Confirmation",
            guard: ({ event }) =>
              event.output === BookingStatus.PaymentFinished,
          },
          {
            target: "DisplayError",
            guard: ({ event }) => event.output === BookingStatus.PaymentFailed,
            actions: assign({
              errorMessage:
                "Our payment provider told us that the payment failed. Please try again.",
            }),
          },
          {
            target: "DisplayError",
            guard: ({ event }) => event.output === BookingStatus.PaymentStarted,
            actions: assign({
              // @note here we should add retrying?
              errorMessage:
                "Payment was not processed in time. Please try again.",
            }),
          },
          {
            target: "DisplayError",
            actions: assign({
              errorMessage: "Payment failed for some reason. Please try again.",
            }),
          },
          ,
        ],
        onError: {
          target: "DisplayError",
          actions: assign({
            errorMessage: ({ event }) => (event.error as Error).message,
          }),
        },
      },
    },
    Confirmation: {},
    DisplayError: {
      on: {
        closePopup: {
          target: "BookingDetails",
          actions: assign(({ context }) => ({
            ...context,
            errorMessage: undefined,
          })),
        },
      },
      description: "State to display error messages in a modal.",
    },
  },
  always: {
    guard: ({ context }) => !!context.date && !(context.date instanceof Date),
    actions: [
      assign(({ context, self }) => ({
        date: context.date && new Date(context.date),
      })),
    ],
    target: ".BookingDetails",
  },
});
