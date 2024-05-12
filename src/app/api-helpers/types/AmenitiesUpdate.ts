import type { Amenity } from "./Amenity";

export type AmenitiesUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Amenity.
   * @type integer
   */
  id: number;
};

export type AmenitiesUpdate200 = Amenity;

export type AmenitiesUpdateMutationRequest = Omit<NonNullable<Amenity>, "id">;

export type AmenitiesUpdateMutationResponse = Amenity;

export type AmenitiesUpdateMutation = {
  Response: AmenitiesUpdateMutationResponse;
  Request: AmenitiesUpdateMutationRequest;
  PathParams: AmenitiesUpdatePathParams;
};
