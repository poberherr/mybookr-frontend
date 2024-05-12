import type { Listing } from "./Listing";

export type ListingsReadPathParams = {
  /**
   * @description A unique integer value identifying this Listing.
   * @type integer
   */
  id: number;
};

export type ListingsRead200 = Listing;

export type ListingsReadQueryResponse = Listing;

export type ListingsReadQuery = {
  Response: ListingsReadQueryResponse;
  PathParams: ListingsReadPathParams;
};
