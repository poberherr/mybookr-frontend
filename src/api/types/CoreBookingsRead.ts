import type { Booking } from "./Booking";

 export type CoreBookingsReadPathParams = {
    /**
     * @description A unique integer value identifying this booking.
     * @type integer
    */
    id: number;
};

 export type CoreBookingsRead200 = Booking;

 export type CoreBookingsReadQueryResponse = Booking;

 export type CoreBookingsReadQuery = {
    Response: CoreBookingsReadQueryResponse;
    PathParams: CoreBookingsReadPathParams;
};