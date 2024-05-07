import type { Listing } from "./Listing";

export type CoreListingsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Listing.
   * @type integer
   */
  id: number;
};

export type CoreListingsUpdate200 = Listing;

export type CoreListingsUpdateMutationRequest = Omit<
  NonNullable<Listing>,
  "id" | "availabilities" | "images"
>;

export type CoreListingsUpdateMutationResponse = Listing;

export type CoreListingsUpdateMutation = {
  Response: CoreListingsUpdateMutationResponse;
  Request: CoreListingsUpdateMutationRequest;
  PathParams: CoreListingsUpdatePathParams;
};
