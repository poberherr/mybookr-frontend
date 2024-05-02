import type { Amenity } from "./Amenity";

export type CoreAmenitiesPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Amenity.
   * @type integer
   */
  id: number;
};

export type CoreAmenitiesPartialUpdate200 = Amenity;

export type CoreAmenitiesPartialUpdateMutationRequest = Omit<
  NonNullable<Amenity>,
  "id"
>;

export type CoreAmenitiesPartialUpdateMutationResponse = Amenity;

export type CoreAmenitiesPartialUpdateMutation = {
  Response: CoreAmenitiesPartialUpdateMutationResponse;
  Request: CoreAmenitiesPartialUpdateMutationRequest;
  PathParams: CoreAmenitiesPartialUpdatePathParams;
};
