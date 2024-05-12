import type { Booking } from "./Booking";

export type BookingsUpdatePathParams = {
  /**
   * @description A UUID string identifying this Booking.
   * @type string, uuid
   */
  id: string;
};

export type BookingsUpdate200 = Booking;

export type BookingsUpdateMutationRequest = Omit<
  NonNullable<Booking>,
  "id" | "created_at" | "updated_at"
>;

export type BookingsUpdateMutationResponse = Booking;

export type BookingsUpdateMutation = {
  Response: BookingsUpdateMutationResponse;
  Request: BookingsUpdateMutationRequest;
  PathParams: BookingsUpdatePathParams;
};
