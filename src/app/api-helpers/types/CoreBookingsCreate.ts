import type { Booking } from "./Booking";

export type CoreBookingsCreate201 = Booking;

export type CoreBookingsCreateMutationRequest = Omit<
  NonNullable<Booking>,
  "id" | "created_at" | "updated_at"
>;

export type CoreBookingsCreateMutationResponse = Booking;

export type CoreBookingsCreateMutation = {
  Response: CoreBookingsCreateMutationResponse;
  Request: CoreBookingsCreateMutationRequest;
};
