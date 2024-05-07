import type { Availabilities } from "./Availabilities";

export type CoreAvailabilitiesReadPathParams = {
  /**
   * @description A unique integer value identifying this Availability.
   * @type integer
   */
  id: number;
};

export type CoreAvailabilitiesRead200 = Availabilities;

export type CoreAvailabilitiesReadQueryResponse = Availabilities;

export type CoreAvailabilitiesReadQuery = {
  Response: CoreAvailabilitiesReadQueryResponse;
  PathParams: CoreAvailabilitiesReadPathParams;
};
