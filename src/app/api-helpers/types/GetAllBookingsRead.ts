import type { Booking } from "./Booking";

export type GetAllBookingsReadPathParams = {
  /**
   * @type string
   */
  listing_id: string;
};

export type GetAllBookingsRead200 = Booking[];

export type GetAllBookingsReadQueryResponse = Booking[];

export type GetAllBookingsReadQuery = {
  Response: GetAllBookingsReadQueryResponse;
  PathParams: GetAllBookingsReadPathParams;
};
