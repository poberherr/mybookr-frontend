import type { ListingCreateUpdate } from "./ListingCreateUpdate";

export type ListingsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Listing.
   * @type integer
   */
  id: number;
};

export type ListingsUpdate200 = ListingCreateUpdate;

export type ListingsUpdateMutationRequest = ListingCreateUpdate;

export type ListingsUpdateMutationResponse = ListingCreateUpdate;

export type ListingsUpdateMutation = {
  Response: ListingsUpdateMutationResponse;
  Request: ListingsUpdateMutationRequest;
  PathParams: ListingsUpdatePathParams;
};
