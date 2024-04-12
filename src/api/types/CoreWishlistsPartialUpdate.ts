import type { Wishlist } from "./Wishlist";

export type CoreWishlistsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this wishlist.
   * @type integer
   */
  id: number;
};

export type CoreWishlistsPartialUpdate200 = Wishlist;

export type CoreWishlistsPartialUpdateMutationRequest = Omit<
  NonNullable<Wishlist>,
  "id"
>;

export type CoreWishlistsPartialUpdateMutationResponse = Wishlist;

export type CoreWishlistsPartialUpdateMutation = {
  Response: CoreWishlistsPartialUpdateMutationResponse;
  Request: CoreWishlistsPartialUpdateMutationRequest;
  PathParams: CoreWishlistsPartialUpdatePathParams;
};
