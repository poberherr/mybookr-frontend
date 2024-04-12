import type { Listing } from "./Listing";

export type CoreListingsCreate201 = Listing;

export type CoreListingsCreateMutationRequest = Omit<
  NonNullable<Listing>,
  "id"
>;

export type CoreListingsCreateMutationResponse = Listing;

export type CoreListingsCreateMutation = {
  Response: CoreListingsCreateMutationResponse;
  Request: CoreListingsCreateMutationRequest;
};
