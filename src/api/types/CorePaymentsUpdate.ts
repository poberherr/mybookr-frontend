import type { Payment } from "./Payment";

 export type CorePaymentsUpdatePathParams = {
    /**
     * @description A unique integer value identifying this payment.
     * @type integer
    */
    id: number;
};

 export type CorePaymentsUpdate200 = Payment;

 export type CorePaymentsUpdateMutationRequest = Omit<NonNullable<Payment>, "id" | "payment_date">;

 export type CorePaymentsUpdateMutationResponse = Payment;

 export type CorePaymentsUpdateMutation = {
    Response: CorePaymentsUpdateMutationResponse;
    Request: CorePaymentsUpdateMutationRequest;
    PathParams: CorePaymentsUpdatePathParams;
};