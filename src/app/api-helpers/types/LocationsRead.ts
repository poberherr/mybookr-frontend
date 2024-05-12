import type { Location } from "./Location";

export type LocationsReadPathParams = {
  /**
   * @description A unique integer value identifying this Location.
   * @type integer
   */
  id: number;
};

export type LocationsRead200 = Location;

export type LocationsReadQueryResponse = Location;

export type LocationsReadQuery = {
  Response: LocationsReadQueryResponse;
  PathParams: LocationsReadPathParams;
};
