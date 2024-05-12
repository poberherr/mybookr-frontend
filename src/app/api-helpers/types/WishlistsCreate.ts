import type { Wishlist } from "./Wishlist";

export type WishlistsCreate201 = Wishlist;

export type WishlistsCreateMutationRequest = Omit<NonNullable<Wishlist>, "id">;

export type WishlistsCreateMutationResponse = Wishlist;

export type WishlistsCreateMutation = {
  Response: WishlistsCreateMutationResponse;
  Request: WishlistsCreateMutationRequest;
};
