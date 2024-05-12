import type { Amenity } from "./Amenity";

export type AmenitiesReadPathParams = {
  /**
   * @description A unique integer value identifying this Amenity.
   * @type integer
   */
  id: number;
};

export type AmenitiesRead200 = Amenity;

export type AmenitiesReadQueryResponse = Amenity;

export type AmenitiesReadQuery = {
  Response: AmenitiesReadQueryResponse;
  PathParams: AmenitiesReadPathParams;
};
