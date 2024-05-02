import type { Payment } from "./Payment";

export type CorePaymentsCreate201 = Payment;

export type CorePaymentsCreateMutationRequest = Omit<
  NonNullable<Payment>,
  "id"
>;

export type CorePaymentsCreateMutationResponse = Payment;

export type CorePaymentsCreateMutation = {
  Response: CorePaymentsCreateMutationResponse;
  Request: CorePaymentsCreateMutationRequest;
};
