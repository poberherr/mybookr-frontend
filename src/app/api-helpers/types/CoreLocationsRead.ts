import type { Location } from "./Location";

export type CoreLocationsReadPathParams = {
  /**
   * @description A unique integer value identifying this Location.
   * @type integer
   */
  id: number;
};

export type CoreLocationsRead200 = Location;

export type CoreLocationsReadQueryResponse = Location;

export type CoreLocationsReadQuery = {
  Response: CoreLocationsReadQueryResponse;
  PathParams: CoreLocationsReadPathParams;
};
