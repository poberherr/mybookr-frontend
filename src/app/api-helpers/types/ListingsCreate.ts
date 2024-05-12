import type { Listing } from "./Listing";

export type ListingsCreate201 = Listing;

export type ListingsCreateMutationRequest = Omit<NonNullable<Listing>, "id">;

export type ListingsCreateMutationResponse = Listing;

export type ListingsCreateMutation = {
  Response: ListingsCreateMutationResponse;
  Request: ListingsCreateMutationRequest;
};
