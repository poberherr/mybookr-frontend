import type { Payment } from "./Payment";

export type CorePaymentsReadPathParams = {
  /**
   * @description A unique integer value identifying this payment.
   * @type integer
   */
  id: number;
};

export type CorePaymentsRead200 = Payment;

export type CorePaymentsReadQueryResponse = Payment;

export type CorePaymentsReadQuery = {
  Response: CorePaymentsReadQueryResponse;
  PathParams: CorePaymentsReadPathParams;
};
