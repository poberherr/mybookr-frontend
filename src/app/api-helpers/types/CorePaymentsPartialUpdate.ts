import type { Payment } from "./Payment";

export type CorePaymentsPartialUpdatePathParams = {
  /**
   * @description A UUID string identifying this Payment.
   * @type string, uuid
   */
  id: string;
};

export type CorePaymentsPartialUpdate200 = Payment;

export type CorePaymentsPartialUpdateMutationRequest = Omit<
  NonNullable<Payment>,
  "id"
>;

export type CorePaymentsPartialUpdateMutationResponse = Payment;

export type CorePaymentsPartialUpdateMutation = {
  Response: CorePaymentsPartialUpdateMutationResponse;
  Request: CorePaymentsPartialUpdateMutationRequest;
  PathParams: CorePaymentsPartialUpdatePathParams;
};
