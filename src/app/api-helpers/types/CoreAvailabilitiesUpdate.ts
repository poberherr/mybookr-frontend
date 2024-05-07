import type { Availabilities } from "./Availabilities";

export type CoreAvailabilitiesUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Availability.
   * @type integer
   */
  id: number;
};

export type CoreAvailabilitiesUpdate200 = Availabilities;

export type CoreAvailabilitiesUpdateMutationRequest = Omit<
  NonNullable<Availabilities>,
  "id"
>;

export type CoreAvailabilitiesUpdateMutationResponse = Availabilities;

export type CoreAvailabilitiesUpdateMutation = {
  Response: CoreAvailabilitiesUpdateMutationResponse;
  Request: CoreAvailabilitiesUpdateMutationRequest;
  PathParams: CoreAvailabilitiesUpdatePathParams;
};
