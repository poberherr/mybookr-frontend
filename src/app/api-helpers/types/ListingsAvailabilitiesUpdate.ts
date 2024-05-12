import type { Availabilities } from "./Availabilities";

export type ListingsAvailabilitiesUpdatePathParams = {
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

export type ListingsAvailabilitiesUpdate200 = Availabilities;

export type ListingsAvailabilitiesUpdateMutationRequest = Omit<
  NonNullable<Availabilities>,
  "id"
>;

export type ListingsAvailabilitiesUpdateMutationResponse = Availabilities;

export type ListingsAvailabilitiesUpdateMutation = {
  Response: ListingsAvailabilitiesUpdateMutationResponse;
  Request: ListingsAvailabilitiesUpdateMutationRequest;
  PathParams: ListingsAvailabilitiesUpdatePathParams;
};
