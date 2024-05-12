import type { Wishlist } from "./Wishlist";

export type WishlistsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Wishlist.
   * @type integer
   */
  id: number;
};

export type WishlistsUpdate200 = Wishlist;

export type WishlistsUpdateMutationRequest = Omit<NonNullable<Wishlist>, "id">;

export type WishlistsUpdateMutationResponse = Wishlist;

export type WishlistsUpdateMutation = {
  Response: WishlistsUpdateMutationResponse;
  Request: WishlistsUpdateMutationRequest;
  PathParams: WishlistsUpdatePathParams;
};
