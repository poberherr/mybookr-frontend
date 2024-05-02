import type { Amenity } from "./Amenity";

export type CoreAmenitiesCreate201 = Amenity;

export type CoreAmenitiesCreateMutationRequest = Omit<
  NonNullable<Amenity>,
  "id"
>;

export type CoreAmenitiesCreateMutationResponse = Amenity;

export type CoreAmenitiesCreateMutation = {
  Response: CoreAmenitiesCreateMutationResponse;
  Request: CoreAmenitiesCreateMutationRequest;
};
