import type { Availabilities } from "./Availabilities";

export type CoreAvailabilitiesUpdatePathParams = {
  /**
   * @description Unique identifier for the availability record.
   * @type string, uuid
   */
  availability_id: string;
};

export type CoreAvailabilitiesUpdate200 = Availabilities;

export type CoreAvailabilitiesUpdateMutationRequest = Omit<
  NonNullable<Availabilities>,
  "availability_id"
>;

export type CoreAvailabilitiesUpdateMutationResponse = Availabilities;

export type CoreAvailabilitiesUpdateMutation = {
  Response: CoreAvailabilitiesUpdateMutationResponse;
  Request: CoreAvailabilitiesUpdateMutationRequest;
  PathParams: CoreAvailabilitiesUpdatePathParams;
};
