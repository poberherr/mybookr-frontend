import type { Payment } from "./Payment";

export type PaymentsList200 = Payment[];

export type PaymentsListQueryResponse = Payment[];

export type PaymentsListQuery = {
  Response: PaymentsListQueryResponse;
};
