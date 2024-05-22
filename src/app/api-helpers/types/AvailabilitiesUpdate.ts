import type { Availabilities } from "./Availabilities";

export type AvailabilitiesUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Availability.
   * @type integer
   */
  id: number;
};

export type AvailabilitiesUpdate200 = Availabilities;

export type AvailabilitiesUpdateMutationRequest = Omit<
  NonNullable<Availabilities>,
  "id"
>;

export type AvailabilitiesUpdateMutationResponse = Availabilities;

export type AvailabilitiesUpdateMutation = {
  Response: AvailabilitiesUpdateMutationResponse;
  Request: AvailabilitiesUpdateMutationRequest;
  PathParams: AvailabilitiesUpdatePathParams;
};
