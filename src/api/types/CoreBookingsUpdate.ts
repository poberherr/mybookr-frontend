import type { Booking } from "./Booking";

export type CoreBookingsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this booking.
   * @type integer
   */
  id: number;
};

export type CoreBookingsUpdate200 = Booking;

export type CoreBookingsUpdateMutationRequest = Omit<
  NonNullable<Booking>,
  "id"
>;

export type CoreBookingsUpdateMutationResponse = Booking;

export type CoreBookingsUpdateMutation = {
  Response: CoreBookingsUpdateMutationResponse;
  Request: CoreBookingsUpdateMutationRequest;
  PathParams: CoreBookingsUpdatePathParams;
};
