import type { Listing } from "./Listing";

export type ListingsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Listing.
   * @type integer
   */
  id: number;
};

export type ListingsUpdate200 = Listing;

export type ListingsUpdateMutationRequest = Omit<NonNullable<Listing>, "id">;

export type ListingsUpdateMutationResponse = Listing;

export type ListingsUpdateMutation = {
  Response: ListingsUpdateMutationResponse;
  Request: ListingsUpdateMutationRequest;
  PathParams: ListingsUpdatePathParams;
};
