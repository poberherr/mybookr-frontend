import type { Listing } from "./Listing";

export type CoreListingsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this listing.
   * @type integer
   */
  id: number;
};

export type CoreListingsPartialUpdate200 = Listing;

export type CoreListingsPartialUpdateMutationRequest = Omit<
  NonNullable<Listing>,
  "id"
>;

export type CoreListingsPartialUpdateMutationResponse = Listing;

export type CoreListingsPartialUpdateMutation = {
  Response: CoreListingsPartialUpdateMutationResponse;
  Request: CoreListingsPartialUpdateMutationRequest;
  PathParams: CoreListingsPartialUpdatePathParams;
};
