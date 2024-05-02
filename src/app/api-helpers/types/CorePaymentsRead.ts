import type { Payment } from "./Payment";

export type CorePaymentsReadPathParams = {
  /**
   * @description A UUID string identifying this Payment.
   * @type string, uuid
   */
  id: string;
};

export type CorePaymentsRead200 = Payment;

export type CorePaymentsReadQueryResponse = Payment;

export type CorePaymentsReadQuery = {
  Response: CorePaymentsReadQueryResponse;
  PathParams: CorePaymentsReadPathParams;
};
