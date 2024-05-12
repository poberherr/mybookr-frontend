import type { Payment } from "./Payment";

export type PaymentsPartialUpdatePathParams = {
  /**
   * @description A UUID string identifying this Payment.
   * @type string, uuid
   */
  id: string;
};

export type PaymentsPartialUpdate200 = Payment;

export type PaymentsPartialUpdateMutationRequest = Omit<
  NonNullable<Payment>,
  "id"
>;

export type PaymentsPartialUpdateMutationResponse = Payment;

export type PaymentsPartialUpdateMutation = {
  Response: PaymentsPartialUpdateMutationResponse;
  Request: PaymentsPartialUpdateMutationRequest;
  PathParams: PaymentsPartialUpdatePathParams;
};
