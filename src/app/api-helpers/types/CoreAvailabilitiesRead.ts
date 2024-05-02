import type { Availabilities } from "./Availabilities";

export type CoreAvailabilitiesReadPathParams = {
  /**
   * @description Unique identifier for the availability record.
   * @type string, uuid
   */
  availability_id: string;
};

export type CoreAvailabilitiesRead200 = Availabilities;

export type CoreAvailabilitiesReadQueryResponse = Availabilities;

export type CoreAvailabilitiesReadQuery = {
  Response: CoreAvailabilitiesReadQueryResponse;
  PathParams: CoreAvailabilitiesReadPathParams;
};
