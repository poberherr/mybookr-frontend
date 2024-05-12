import type { Listing } from "./Listing";

export type ListingsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Listing.
   * @type integer
   */
  id: number;
};

export type ListingsPartialUpdate200 = Listing;

export type ListingsPartialUpdateMutationRequest = Omit<
  NonNullable<Listing>,
  "id"
>;

export type ListingsPartialUpdateMutationResponse = Listing;

export type ListingsPartialUpdateMutation = {
  Response: ListingsPartialUpdateMutationResponse;
  Request: ListingsPartialUpdateMutationRequest;
  PathParams: ListingsPartialUpdatePathParams;
};
