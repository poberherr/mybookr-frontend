import type { Amenity } from "./Amenity";

export type CoreAmenitiesUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Amenity.
   * @type integer
   */
  id: number;
};

export type CoreAmenitiesUpdate200 = Amenity;

export type CoreAmenitiesUpdateMutationRequest = Omit<
  NonNullable<Amenity>,
  "id"
>;

export type CoreAmenitiesUpdateMutationResponse = Amenity;

export type CoreAmenitiesUpdateMutation = {
  Response: CoreAmenitiesUpdateMutationResponse;
  Request: CoreAmenitiesUpdateMutationRequest;
  PathParams: CoreAmenitiesUpdatePathParams;
};
