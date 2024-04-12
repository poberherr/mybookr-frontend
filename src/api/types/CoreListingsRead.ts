import type { Listing } from "./Listing";

export type CoreListingsReadPathParams = {
  /**
   * @description A unique integer value identifying this listing.
   * @type integer
   */
  id: number;
};

export type CoreListingsRead200 = Listing;

export type CoreListingsReadQueryResponse = Listing;

export type CoreListingsReadQuery = {
  Response: CoreListingsReadQueryResponse;
  PathParams: CoreListingsReadPathParams;
};
