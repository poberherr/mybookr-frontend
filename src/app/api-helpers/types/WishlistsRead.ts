import type { Wishlist } from "./Wishlist";

export type WishlistsReadPathParams = {
  /**
   * @description A unique integer value identifying this Wishlist.
   * @type integer
   */
  id: number;
};

export type WishlistsRead200 = Wishlist;

export type WishlistsReadQueryResponse = Wishlist;

export type WishlistsReadQuery = {
  Response: WishlistsReadQueryResponse;
  PathParams: WishlistsReadPathParams;
};
