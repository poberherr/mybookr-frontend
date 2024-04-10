import type { Listing } from "./Listing";

 export type CoreListingsUpdatePathParams = {
    /**
     * @description A unique integer value identifying this listing.
     * @type integer
    */
    id: number;
};

 export type CoreListingsUpdate200 = Listing;

 export type CoreListingsUpdateMutationRequest = Omit<NonNullable<Listing>, "id">;

 export type CoreListingsUpdateMutationResponse = Listing;

 export type CoreListingsUpdateMutation = {
    Response: CoreListingsUpdateMutationResponse;
    Request: CoreListingsUpdateMutationRequest;
    PathParams: CoreListingsUpdatePathParams;
};