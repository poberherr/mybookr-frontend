import type { Amenity } from "./Amenity";

export type CoreAmenitiesReadPathParams = {
  /**
   * @description A unique integer value identifying this Amenity.
   * @type integer
   */
  id: number;
};

export type CoreAmenitiesRead200 = Amenity;

export type CoreAmenitiesReadQueryResponse = Amenity;

export type CoreAmenitiesReadQuery = {
  Response: CoreAmenitiesReadQueryResponse;
  PathParams: CoreAmenitiesReadPathParams;
};
