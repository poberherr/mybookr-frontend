import { setup, assign, fromPromise } from "xstate";
import { Client } from "urql";
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
  clientSecret?: string;
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
    $availabilityId: ID!
    $numberOfSlots: Int!
  ) {
    createBooking(
      data: {
        name: $name
        email: $email
        activityId: $activityId
        availabilityId: $availabilityId
        numberOfSlots: $numberOfSlots
      }
    ) {
      bookingFlowToken
      paymentClientSecret
    }
  }
`);

const UpdateBookingMutation = graphql(`
  mutation UpdateBooking(
    $bookingFlowToken: String!
    $name: String!
    $email: String!
    $activityId: ID!
    $availabilityId: ID!
    $numberOfSlots: Int!
  ) {
    updateBooking(
      data: {
        bookingFlowToken: $bookingFlowToken
        name: $name
        email: $email
        activityId: $activityId
        availabilityId: $availabilityId
        numberOfSlots: $numberOfSlots
      }
    ) {
      paymentClientSecret
    }
  }
`);

const CheckBookingMutation = graphql(`
  mutation CheckBookingMutation($bookingFlowToken: String!) {
    checkBookingStatus(bookingFlowToken: $bookingFlowToken)
  }
`);

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

        const result = await context.client.mutation(CreateBookingMutation, {
          activityId: formData.activityId,
          email: formData.email,
          date: formData.bookingDate,
          availabilityId: "QXZhaWxhYmlsaXR5OjE=", // @todo replace this as soon we have absences
          name: "John Does (mocked - do we need this?)",
          numberOfSlots: 1,
        });

        if (result.error) {
          throw result.error;
        }

        if (!result.data) {
          throw new Error("No data recieved");
        }

        return {
          bookingFlowToken: result.data.createBooking.bookingFlowToken,
          paymentClientSecret: result.data.createBooking.paymentClientSecret,
        };
      } catch (err) {
        throw err;
      }
    }),
    updateBooking: fromPromise<
      UpdateBookingResultType,
      { context: IBookingContext; formData: BookingFormData }
    >(async ({ input: { context, formData } }) => {
      try {
        if (!context.bookingFlowToken) {
          throw new Error("bookingFlowToken required to update booking");
        }
        if (!context.activityId || !context.email || !context.date) {
          throw new Error("Incomplete data for creation");
        }

        const result = await context.client.mutation(UpdateBookingMutation, {
          bookingFlowToken: context.bookingFlowToken,
          activityId: formData.activityId,
          email: formData.email,
          date: formData.bookingDate,
          availabilityId: "QXZhaWxhYmlsaXR5OjE=", // @todo replace this as soon we have absences
          name: "John Does (mocked - do we need this?)",
          numberOfSlots: 1,
        });

        if (result.error) {
          throw result.error;
        }

        if (!result.data) {
          throw new Error("No data recieved");
        }

        return {
          paymentClientSecret: result.data.updateBooking.paymentClientSecret,
        };
      } catch (err) {
        throw err;
      }
    }),
    checkBookingStatus: fromPromise<
      BookingStatus,
      { context: IBookingContext }
    >(async ({ input: { context } }) => {
      try {
        if (!context.bookingFlowToken) {
          throw new Error("bookingFlowToken required to check booking status");
        }

        const result = await context.client.mutation(CheckBookingMutation, {
          bookingFlowToken: context.bookingFlowToken,
        });

        if (result.error) {
          throw result.error;
        }

        if (!result.data) {
          throw new Error("No data recieved");
        }

        return result.data.checkBookingStatus;
      } catch (err) {
        throw err;
      }
    }),
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
          target: "ProvidePaymentCredentials",
          actions: assign(({ event }) => ({
            bookingFlowToken: event.output.bookingFlowToken,
            clientSecret: event.output.paymentClientSecret,
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
          target: "ProvidePaymentCredentials",
          actions: assign(({ event }) => ({
            clientSecret: event.output.paymentClientSecret,
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
    ProvidePaymentCredentials: {
      on: {
        paymentIsProcessing: {
          target: "AwaitingPaymentStatus",
        },
        error: {
          target: "DisplayError",
          actions: assign({
            errorMessage: ({ event }) => event.errorMessage,
          }),
        },
      },
    },
    AwaitingPaymentStatus: {
      always: [
        {
          target: "CheckBookingStatus",
          guard: ({ context }) => {
            if (!window || !context.bookingFlowToken) {
              return false;
            }
            const searchParams = new URLSearchParams(window.location.search);

            const redirectStatus = searchParams.get("redirect_status");
            const paymentIntentClientSecret = searchParams.get(
              "payment_intent_client_secret",
            );
            const res =
              !!redirectStatus &&
              paymentIntentClientSecret === context.clientSecret;

            console.log(
              "Payment status is",
              redirectStatus,
              "for client",
              paymentIntentClientSecret,
              "resulting in",
              res,
            );

            return res;
          },
        },
        {
          target: "DisplayError",
          actions: assign({
            errorMessage: "Failed to process payment success on client side. Please try again.",
          }),
        },
      ],
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
              errorMessage: "Payment Failed. Please try again.",
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
