import type { Availabilities } from "./Availabilities";

export type CoreAvailabilitiesPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Availability.
   * @type integer
   */
  id: number;
};

export type CoreAvailabilitiesPartialUpdate200 = Availabilities;

export type CoreAvailabilitiesPartialUpdateMutationRequest = Omit<
  NonNullable<Availabilities>,
  "id"
>;

export type CoreAvailabilitiesPartialUpdateMutationResponse = Availabilities;

export type CoreAvailabilitiesPartialUpdateMutation = {
  Response: CoreAvailabilitiesPartialUpdateMutationResponse;
  Request: CoreAvailabilitiesPartialUpdateMutationRequest;
  PathParams: CoreAvailabilitiesPartialUpdatePathParams;
};
