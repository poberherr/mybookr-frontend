import type { Amenity } from "./Amenity";

export type AmenitiesPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Amenity.
   * @type integer
   */
  id: number;
};

export type AmenitiesPartialUpdate200 = Amenity;

export type AmenitiesPartialUpdateMutationRequest = Omit<
  NonNullable<Amenity>,
  "id"
>;

export type AmenitiesPartialUpdateMutationResponse = Amenity;

export type AmenitiesPartialUpdateMutation = {
  Response: AmenitiesPartialUpdateMutationResponse;
  Request: AmenitiesPartialUpdateMutationRequest;
  PathParams: AmenitiesPartialUpdatePathParams;
};
