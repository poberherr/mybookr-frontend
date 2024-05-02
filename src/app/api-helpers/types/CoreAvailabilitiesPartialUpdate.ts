import type { Availabilities } from "./Availabilities";

export type CoreAvailabilitiesPartialUpdatePathParams = {
  /**
   * @description Unique identifier for the availability record.
   * @type string, uuid
   */
  availability_id: string;
};

export type CoreAvailabilitiesPartialUpdate200 = Availabilities;

export type CoreAvailabilitiesPartialUpdateMutationRequest = Omit<
  NonNullable<Availabilities>,
  "availability_id"
>;

export type CoreAvailabilitiesPartialUpdateMutationResponse = Availabilities;

export type CoreAvailabilitiesPartialUpdateMutation = {
  Response: CoreAvailabilitiesPartialUpdateMutationResponse;
  Request: CoreAvailabilitiesPartialUpdateMutationRequest;
  PathParams: CoreAvailabilitiesPartialUpdatePathParams;
};
