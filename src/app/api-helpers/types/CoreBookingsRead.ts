import type { Booking } from "./Booking";

export type CoreBookingsReadPathParams = {
  /**
   * @description A UUID string identifying this Booking.
   * @type string, uuid
   */
  id: string;
};

export type CoreBookingsRead200 = Booking;

export type CoreBookingsReadQueryResponse = Booking;

export type CoreBookingsReadQuery = {
  Response: CoreBookingsReadQueryResponse;
  PathParams: CoreBookingsReadPathParams;
};
