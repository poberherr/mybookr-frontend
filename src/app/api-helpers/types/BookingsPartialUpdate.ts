import type { Booking } from "./Booking";

export type BookingsPartialUpdatePathParams = {
  /**
   * @description A UUID string identifying this Booking.
   * @type string, uuid
   */
  id: string;
};

export type BookingsPartialUpdate200 = Booking;

export type BookingsPartialUpdateMutationRequest = Omit<
  NonNullable<Booking>,
  "id" | "created_at" | "updated_at"
>;

export type BookingsPartialUpdateMutationResponse = Booking;

export type BookingsPartialUpdateMutation = {
  Response: BookingsPartialUpdateMutationResponse;
  Request: BookingsPartialUpdateMutationRequest;
  PathParams: BookingsPartialUpdatePathParams;
};
