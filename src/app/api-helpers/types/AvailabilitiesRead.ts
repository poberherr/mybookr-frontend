import type { Availabilities } from "./Availabilities";

export type AvailabilitiesReadPathParams = {
  /**
   * @description A unique integer value identifying this Availability.
   * @type integer
   */
  id: number;
};

export type AvailabilitiesRead200 = Availabilities;

export type AvailabilitiesReadQueryResponse = Availabilities;

export type AvailabilitiesReadQuery = {
  Response: AvailabilitiesReadQueryResponse;
  PathParams: AvailabilitiesReadPathParams;
};
