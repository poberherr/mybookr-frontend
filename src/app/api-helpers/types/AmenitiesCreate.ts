import type { Amenity } from "./Amenity";

export type AmenitiesCreate201 = Amenity;

export type AmenitiesCreateMutationRequest = Omit<NonNullable<Amenity>, "id">;

export type AmenitiesCreateMutationResponse = Amenity;

export type AmenitiesCreateMutation = {
  Response: AmenitiesCreateMutationResponse;
  Request: AmenitiesCreateMutationRequest;
};
