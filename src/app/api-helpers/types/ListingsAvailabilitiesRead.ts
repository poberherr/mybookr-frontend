import type { Availabilities } from "./Availabilities";

export type ListingsAvailabilitiesReadPathParams = {
  /**
   * @type string
   */
  listing_pk: string;
  /**
   * @description A unique integer value identifying this Availability.
   * @type integer
   */
  id: number;
};

export type ListingsAvailabilitiesRead200 = Availabilities;

export type ListingsAvailabilitiesReadQueryResponse = Availabilities;

export type ListingsAvailabilitiesReadQuery = {
  Response: ListingsAvailabilitiesReadQueryResponse;
  PathParams: ListingsAvailabilitiesReadPathParams;
};
