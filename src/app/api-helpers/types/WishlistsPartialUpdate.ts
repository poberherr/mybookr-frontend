import type { Wishlist } from "./Wishlist";

export type WishlistsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Wishlist.
   * @type integer
   */
  id: number;
};

export type WishlistsPartialUpdate200 = Wishlist;

export type WishlistsPartialUpdateMutationRequest = Omit<
  NonNullable<Wishlist>,
  "id"
>;

export type WishlistsPartialUpdateMutationResponse = Wishlist;

export type WishlistsPartialUpdateMutation = {
  Response: WishlistsPartialUpdateMutationResponse;
  Request: WishlistsPartialUpdateMutationRequest;
  PathParams: WishlistsPartialUpdatePathParams;
};
