import type { Payment } from "./Payment";

export type CorePaymentsUpdatePathParams = {
  /**
   * @description A UUID string identifying this Payment.
   * @type string, uuid
   */
  id: string;
};

export type CorePaymentsUpdate200 = Payment;

export type CorePaymentsUpdateMutationRequest = Omit<
  NonNullable<Payment>,
  "id"
>;

export type CorePaymentsUpdateMutationResponse = Payment;

export type CorePaymentsUpdateMutation = {
  Response: CorePaymentsUpdateMutationResponse;
  Request: CorePaymentsUpdateMutationRequest;
  PathParams: CorePaymentsUpdatePathParams;
};
