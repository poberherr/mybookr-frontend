import type { Booking } from "./Booking";

export type BookingsReadPathParams = {
  /**
   * @description A UUID string identifying this Booking.
   * @type string, uuid
   */
  id: string;
};

export type BookingsRead200 = Booking;

export type BookingsReadQueryResponse = Booking;

export type BookingsReadQuery = {
  Response: BookingsReadQueryResponse;
  PathParams: BookingsReadPathParams;
};
