import type { Booking } from "./Booking";

 export type CoreBookingsList200 = Booking[];

 export type CoreBookingsListQueryResponse = Booking[];

 export type CoreBookingsListQuery = {
    Response: CoreBookingsListQueryResponse;
};