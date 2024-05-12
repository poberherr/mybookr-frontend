import type { Booking } from "./Booking";

export type BookingsList200 = Booking[];

export type BookingsListQueryResponse = Booking[];

export type BookingsListQuery = {
  Response: BookingsListQueryResponse;
};
