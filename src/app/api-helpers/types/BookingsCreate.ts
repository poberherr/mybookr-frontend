import type { Booking } from "./Booking";

export type BookingsCreate201 = Booking;

export type BookingsCreateMutationRequest = Omit<
  NonNullable<Booking>,
  "id" | "created_at" | "updated_at"
>;

export type BookingsCreateMutationResponse = Booking;

export type BookingsCreateMutation = {
  Response: BookingsCreateMutationResponse;
  Request: BookingsCreateMutationRequest;
};
