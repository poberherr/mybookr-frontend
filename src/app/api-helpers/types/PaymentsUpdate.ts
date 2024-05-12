import type { Payment } from "./Payment";

export type PaymentsUpdatePathParams = {
  /**
   * @description A UUID string identifying this Payment.
   * @type string, uuid
   */
  id: string;
};

export type PaymentsUpdate200 = Payment;

export type PaymentsUpdateMutationRequest = Omit<NonNullable<Payment>, "id">;

export type PaymentsUpdateMutationResponse = Payment;

export type PaymentsUpdateMutation = {
  Response: PaymentsUpdateMutationResponse;
  Request: PaymentsUpdateMutationRequest;
  PathParams: PaymentsUpdatePathParams;
};
