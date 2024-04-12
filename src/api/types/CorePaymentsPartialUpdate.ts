import type { Payment } from "./Payment";

export type CorePaymentsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this payment.
   * @type integer
   */
  id: number;
};

export type CorePaymentsPartialUpdate200 = Payment;

export type CorePaymentsPartialUpdateMutationRequest = Omit<
  NonNullable<Payment>,
  "id" | "payment_date"
>;

export type CorePaymentsPartialUpdateMutationResponse = Payment;

export type CorePaymentsPartialUpdateMutation = {
  Response: CorePaymentsPartialUpdateMutationResponse;
  Request: CorePaymentsPartialUpdateMutationRequest;
  PathParams: CorePaymentsPartialUpdatePathParams;
};
