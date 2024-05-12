import type { Payment } from "./Payment";

export type PaymentsCreate201 = Payment;

export type PaymentsCreateMutationRequest = Omit<NonNullable<Payment>, "id">;

export type PaymentsCreateMutationResponse = Payment;

export type PaymentsCreateMutation = {
  Response: PaymentsCreateMutationResponse;
  Request: PaymentsCreateMutationRequest;
};
