import type { Availabilities } from "./Availabilities";

export type AvailabilitiesPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Availability.
   * @type integer
   */
  id: number;
};

export type AvailabilitiesPartialUpdate200 = Availabilities;

export type AvailabilitiesPartialUpdateMutationRequest = Omit<
  NonNullable<Availabilities>,
  "id"
>;

export type AvailabilitiesPartialUpdateMutationResponse = Availabilities;

export type AvailabilitiesPartialUpdateMutation = {
  Response: AvailabilitiesPartialUpdateMutationResponse;
  Request: AvailabilitiesPartialUpdateMutationRequest;
  PathParams: AvailabilitiesPartialUpdatePathParams;
};
