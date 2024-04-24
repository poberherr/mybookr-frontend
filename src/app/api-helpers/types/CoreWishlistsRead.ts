import type { Wishlist } from "./Wishlist";

export type CoreWishlistsReadPathParams = {
  /**
   * @description A unique integer value identifying this wishlist.
   * @type integer
   */
  id: number;
};

export type CoreWishlistsRead200 = Wishlist;

export type CoreWishlistsReadQueryResponse = Wishlist;

export type CoreWishlistsReadQuery = {
  Response: CoreWishlistsReadQueryResponse;
  PathParams: CoreWishlistsReadPathParams;
};
