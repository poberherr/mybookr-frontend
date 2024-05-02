import type { Booking } from "./Booking";

export type CoreBookingsUpdatePathParams = {
  /**
   * @description A UUID string identifying this Booking.
   * @type string, uuid
   */
  id: string;
};

export type CoreBookingsUpdate200 = Booking;

export type CoreBookingsUpdateMutationRequest = Omit<
  NonNullable<Booking>,
  "id" | "created_at" | "updated_at"
>;

export type CoreBookingsUpdateMutationResponse = Booking;

export type CoreBookingsUpdateMutation = {
  Response: CoreBookingsUpdateMutationResponse;
  Request: CoreBookingsUpdateMutationRequest;
  PathParams: CoreBookingsUpdatePathParams;
};
