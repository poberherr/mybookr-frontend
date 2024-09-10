import { setup, assign, fromPromise } from "xstate";
import { Client, TypedDocumentNode, AnyVariables, OperationResult } from "urql";
import { graphql } from "@/gql";
import { BookingStatus, CreateBookingResultType } from "@/gql/graphql";
import { BookingFormData } from "./FormBookingDetails";
import { push } from "@socialgouv/matomo-next";

const ExperienceTrackingQuery = graphql(`
  query ExperienceTrackingQuery($experienceId: ID!) {
    experience(id: $experienceId) {
      id
      title
      slug
      activities {
        id
        title
        price
      }
    }
  }
`);

export interface IBookingContext {
  // Identification
  experienceId: string;
  client: Client;
  // UI
  invoiceUrl?: string;
  bookingFlowToken?: string;
  referenceCode?: string;
  errorMessage?: string;
  // Booking Form
  activityId?: string;
  date?: Date;
  name?: string;
  email?: string;
  telephone?: string;
  additionalInformation?: string;
}

const CreateBookingMutation = graphql(`
  mutation CreateBooking(
    $name: String!
    $email: String!
    $telephone: String!
    $additionalInformation: String!
    $activityId: ID!
    $bookedDate: Date!
  ) {
    createBooking(
      data: {
        name: $name
        email: $email
        telephone: $telephone
        additionalInformation: $additionalInformation
        activityId: $activityId
        bookedDate: $bookedDate
      }
    ) {
      bookingFlowToken
      referenceCode
    }
  }
`);

const UpdateBookingMutation = graphql(`
  mutation UpdateBooking(
    $bookingFlowToken: String!
    $name: String!
    $email: String!
    $telephone: String!
    $additionalInformation: String!
    $activityId: ID!
    $bookedDate: Date!
  ) {
    updateBooking(
      data: {
        bookingFlowToken: $bookingFlowToken
        name: $name
        email: $email
        telephone: $telephone
        additionalInformation: $additionalInformation
        activityId: $activityId
        bookedDate: $bookedDate
      }
    )
  }
`);

const CreatePaymentMutation = graphql(`
  mutation CreatePayment($bookingFlowToken: String!, $redirectOrigin: String!) {
    createPayment(
      bookingFlowToken: $bookingFlowToken
      redirectOrigin: $redirectOrigin
    ) {
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

async function performQuery<TQuery, TVariables>(
  client: Client,
  query: TypedDocumentNode<TQuery, TVariables>,
  variables: TVariables,
): Promise<NonNullable<OperationResult<TQuery>["data"]>> {
  const result = await client.query(query, variables as AnyVariables);

  if (result.error) {
    console.log("API returned error: Throwing.");
    throw result.error;
  }

  if (!result.data) {
    throw new Error("API returned empty response");
  }

  return result.data;
}

async function trackBookingEvent(
  client: Client,
  experienceId: string,
  activityId: string,
  eventAction: string,
  useActivityValue = false,
) {
  // Load experience data from graphQl
  const resultExperience = await performQuery(client, ExperienceTrackingQuery, {
    experienceId: experienceId,
  });

  const activityValue = resultExperience.experience?.activities.find(
    (activity) => (activity.id = activityId),
  )?.price;

  push([
    "trackEvent",
    "Booking", // Event Category
    eventAction, // Event Action
    [resultExperience.experience?.id, resultExperience.experience?.slug].join(
      "-",
    ), // Event Name
    useActivityValue ? activityValue : 0, // Event Value
  ]);
}

async function trackBookingError(
  client: Client,
  experienceId: string,
  errorMessage: string,
) {
  // Load experience data from graphQl
  const resultExperience = await performQuery(client, ExperienceTrackingQuery, {
    experienceId: experienceId,
  });
  push([
    "trackEvent",
    "Booking Error", // Event Category
    errorMessage, // Event Action
    [resultExperience.experience?.id, resultExperience.experience?.slug].join(
      "-",
    ), // Event Name
    0, // Event Value
  ]);
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

        await trackBookingEvent(
          context.client,
          context.experienceId,
          formData.activityId,
          "Create",
        );

        const result = await withMinimumDuration(
          performMutation(context.client, CreateBookingMutation, {
            activityId: formData.activityId,
            bookedDate: formData.bookingDate.toISOString().split("T")[0],
            name: formData.name,
            email: formData.email,
            telephone: formData.telephone,
            additionalInformation: formData.additionalInformation,
            numberOfSlots: 1,
          }),
        );

        return {
          bookingFlowToken: result.createBooking.bookingFlowToken,
          referenceCode: result.createBooking.referenceCode,
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

        await trackBookingEvent(
          context.client,
          context.experienceId,
          context.activityId,
          "Update",
        );

        await withMinimumDuration(
          performMutation(context.client, UpdateBookingMutation, {
            bookingFlowToken: context.bookingFlowToken,
            activityId: formData.activityId,
            bookedDate: formData.bookingDate.toISOString().split("T")[0],
            name: formData.name,
            email: formData.email,
            telephone: formData.telephone,
            additionalInformation: formData.additionalInformation,
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

          await trackBookingEvent(
            context.client,
            context.experienceId,
            context.activityId,
            "Create Payment",
          );

          const result = await withMinimumDuration(
            performMutation(context.client, CreatePaymentMutation, {
              bookingFlowToken: context.bookingFlowToken,
              redirectOrigin: window.origin
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

        await trackBookingEvent(
          context.client,
          context.experienceId,
          context.activityId as string,
          "Check Booking Status",
        );

        const result = await withMinimumDuration(
          performMutation(context.client, CheckBookingMutation, {
            bookingFlowToken: context.bookingFlowToken,
          }),
          1500,
        );

        await trackBookingEvent(
          context.client,
          context.experienceId,
          context.activityId as string,
          `Booking Status: ${result.checkBookingStatus}`,
          result.checkBookingStatus === BookingStatus.PaymentFinished,
        );

        return result.checkBookingStatus;
      } catch (err) {
        throw err;
      }
    }),
    redirectToPayment: fromPromise<Boolean, { context: IBookingContext }>(
      async ({ input: { context } }) => {
        try {
          const { invoiceUrl } = context;
          if (!invoiceUrl) {
            throw new Error(
              "Unable to redirect to payment provider. Please retry again.",
            );
          }

          window.location.replace(invoiceUrl);

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
              console.log("window or bookingFlowToken missing");
              return false;
            }
            const searchParams = new URLSearchParams(window.location.search);

            const paymentStatus = searchParams.get("paymentStatus");

            if (!paymentStatus) {
              return false;
            }

            if (paymentStatus !== "success") {
              throw new Error("Payment failed");
            }

            return true;
          })(),
          1500,
        );
      },
    ),
    trackError: fromPromise<void, { context: IBookingContext }>(
      async ({ input: { context } }) =>
        trackBookingError(
          context.client,
          context.experienceId,
          context.errorMessage as string,
        ),
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
              !!context.referenceCode &&
              !!context.experienceId &&
              !!formData.activityId &&
              !!formData.bookingDate,
            target: "UpdateBooking",
            actions: [
              assign(({ event: { formData } }) => ({
                activityId: formData.activityId,
                date: formData.bookingDate,
                email: formData.email,
                name: formData.name,
                telephone: formData.telephone,
                additionalInformation: formData.additionalInformation,
              })),
            ],
          },
          {
            guard: ({ context, event: { formData } }) =>
              !!context.experienceId &&
              !!formData.activityId &&
              !!formData.bookingDate &&
              !!formData.name &&
              !!formData.telephone &&
              !!formData.email,
            target: "CreateBooking",
            actions: [
              assign(({ event: { formData } }) => ({
                activityId: formData.activityId,
                date: formData.bookingDate,
                email: formData.email,
                name: formData.name,
                telephone: formData.telephone,
                additionalInformation: formData.additionalInformation,
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
            referenceCode: event.output.referenceCode,
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
            errorMessage:
              "Unable to create a new payment. Check for typos in your email or phone number, or try a different one. Please try again.",
          }),
        },
      },
    },
    RedirectToPayment: {
      invoke: {
        id: "redirectToPayment",
        src: "redirectToPayment",
        input: ({ context }) => ({ context }),
        onDone: {
          target: "CheckRedirectStatus",
        },
      },
    },
    CheckRedirectStatus: {
      invoke: {
        id: "checkRedirectStatus",
        src: "checkRedirectStatus",
        input: ({ context }) => ({ context }),
        onDone: [
          {
            target: "CheckBookingStatus",
            guard: ({ event }) => event.output === true,
          },
          {
            target: "RedirectToPayment",
          },
        ],
        onError: {
          target: "DisplayError",
          actions: [
            assign({
              errorMessage:
                "Looks like you had issues with your payment. Please try again.",
            }),
          ],
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
      invoke: {
        id: "trackError",
        src: "trackError",
        input: ({ context }) => ({ context }),
      },
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
