import type { Booking } from "./Booking";

export type CoreBookingsPartialUpdatePathParams = {
  /**
   * @description A UUID string identifying this Booking.
   * @type string, uuid
   */
  id: string;
};

export type CoreBookingsPartialUpdate200 = Booking;

export type CoreBookingsPartialUpdateMutationRequest = Omit<
  NonNullable<Booking>,
  "id" | "created_at" | "updated_at"
>;

export type CoreBookingsPartialUpdateMutationResponse = Booking;

export type CoreBookingsPartialUpdateMutation = {
  Response: CoreBookingsPartialUpdateMutationResponse;
  Request: CoreBookingsPartialUpdateMutationRequest;
  PathParams: CoreBookingsPartialUpdatePathParams;
};
