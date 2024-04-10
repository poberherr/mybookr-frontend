import type { Amenity } from "./Amenity";

 export type CoreAmenitiesPartialUpdatePathParams = {
    /**
     * @description A unique integer value identifying this amenity.
     * @type integer
    */
    id: number;
};

 export type CoreAmenitiesPartialUpdate200 = Amenity;

 export type CoreAmenitiesPartialUpdateMutationRequest = Amenity;

 export type CoreAmenitiesPartialUpdateMutationResponse = Amenity;

 export type CoreAmenitiesPartialUpdateMutation = {
    Response: CoreAmenitiesPartialUpdateMutationResponse;
    Request: CoreAmenitiesPartialUpdateMutationRequest;
    PathParams: CoreAmenitiesPartialUpdatePathParams;
};