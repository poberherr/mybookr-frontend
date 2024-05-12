import type { Availabilities } from "./Availabilities";

export type ListingsAvailabilitiesPartialUpdatePathParams = {
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

export type ListingsAvailabilitiesPartialUpdate200 = Availabilities;

export type ListingsAvailabilitiesPartialUpdateMutationRequest = Omit<
  NonNullable<Availabilities>,
  "id"
>;

export type ListingsAvailabilitiesPartialUpdateMutationResponse =
  Availabilities;

export type ListingsAvailabilitiesPartialUpdateMutation = {
  Response: ListingsAvailabilitiesPartialUpdateMutationResponse;
  Request: ListingsAvailabilitiesPartialUpdateMutationRequest;
  PathParams: ListingsAvailabilitiesPartialUpdatePathParams;
};
