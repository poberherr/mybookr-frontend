import type { Wishlist } from "./Wishlist";

 export type CoreWishlistsCreate201 = Wishlist;

 export type CoreWishlistsCreateMutationRequest = Omit<NonNullable<Wishlist>, "id">;

 export type CoreWishlistsCreateMutationResponse = Wishlist;

 export type CoreWishlistsCreateMutation = {
    Response: CoreWishlistsCreateMutationResponse;
    Request: CoreWishlistsCreateMutationRequest;
};