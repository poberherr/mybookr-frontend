import type { Payment } from "./Payment";

export type CorePaymentsList200 = Payment[];

export type CorePaymentsListQueryResponse = Payment[];

export type CorePaymentsListQuery = {
  Response: CorePaymentsListQueryResponse;
};
