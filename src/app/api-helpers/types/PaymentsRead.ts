import type { Payment } from "./Payment";

export type PaymentsReadPathParams = {
  /**
   * @description A UUID string identifying this Payment.
   * @type string, uuid
   */
  id: string;
};

export type PaymentsRead200 = Payment;

export type PaymentsReadQueryResponse = Payment;

export type PaymentsReadQuery = {
  Response: PaymentsReadQueryResponse;
  PathParams: PaymentsReadPathParams;
};
