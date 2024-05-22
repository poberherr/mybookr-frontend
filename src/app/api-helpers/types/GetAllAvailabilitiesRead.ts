import type { Availabilities } from "./Availabilities";

export type GetAllAvailabilitiesReadPathParams = {
  /**
   * @type string
   */
  listing_id: string;
};

export type GetAllAvailabilitiesRead200 = Availabilities[];

export type GetAllAvailabilitiesReadQueryResponse = Availabilities[];

export type GetAllAvailabilitiesReadQuery = {
  Response: GetAllAvailabilitiesReadQueryResponse;
  PathParams: GetAllAvailabilitiesReadPathParams;
};
