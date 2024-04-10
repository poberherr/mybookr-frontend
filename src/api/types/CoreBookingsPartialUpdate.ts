import type { Booking } from "./Booking";

 export type CoreBookingsPartialUpdatePathParams = {
    /**
     * @description A unique integer value identifying this booking.
     * @type integer
    */
    id: number;
};

 export type CoreBookingsPartialUpdate200 = Booking;

 export type CoreBookingsPartialUpdateMutationRequest = Omit<NonNullable<Booking>, "id">;

 export type CoreBookingsPartialUpdateMutationResponse = Booking;

 export type CoreBookingsPartialUpdateMutation = {
    Response: CoreBookingsPartialUpdateMutationResponse;
    Request: CoreBookingsPartialUpdateMutationRequest;
    PathParams: CoreBookingsPartialUpdatePathParams;
};