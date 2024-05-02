import type { Wishlist } from "./Wishlist";

export type CoreWishlistsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Wishlist.
   * @type integer
   */
  id: number;
};

export type CoreWishlistsUpdate200 = Wishlist;

export type CoreWishlistsUpdateMutationRequest = Omit<
  NonNullable<Wishlist>,
  "id"
>;

export type CoreWishlistsUpdateMutationResponse = Wishlist;

export type CoreWishlistsUpdateMutation = {
  Response: CoreWishlistsUpdateMutationResponse;
  Request: CoreWishlistsUpdateMutationRequest;
  PathParams: CoreWishlistsUpdatePathParams;
};
