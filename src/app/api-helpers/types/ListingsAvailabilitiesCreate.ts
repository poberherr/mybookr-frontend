import type { Availabilities } from "./Availabilities";

export type ListingsAvailabilitiesCreatePathParams = {
  /**
   * @type string
   */
  listing_pk: string;
};

export type ListingsAvailabilitiesCreate201 = Availabilities;

export type ListingsAvailabilitiesCreateMutationRequest = Omit<
  NonNullable<Availabilities>,
  "id"
>;

export type ListingsAvailabilitiesCreateMutationResponse = Availabilities;

export type ListingsAvailabilitiesCreateMutation = {
  Response: ListingsAvailabilitiesCreateMutationResponse;
  Request: ListingsAvailabilitiesCreateMutationRequest;
  PathParams: ListingsAvailabilitiesCreatePathParams;
};
