import type { Availabilities } from "./Availabilities";

export type ListingsAvailabilitiesListPathParams = {
  /**
   * @type string
   */
  listing_pk: string;
};

export type ListingsAvailabilitiesList200 = Availabilities[];

export type ListingsAvailabilitiesListQueryResponse = Availabilities[];

export type ListingsAvailabilitiesListQuery = {
  Response: ListingsAvailabilitiesListQueryResponse;
  PathParams: ListingsAvailabilitiesListPathParams;
};
