import type { Availabilities } from "./Availabilities";

export type AvailabilitiesCreate201 = Availabilities;

export type AvailabilitiesCreateMutationRequest = Omit<
  NonNullable<Availabilities>,
  "id"
>;

export type AvailabilitiesCreateMutationResponse = Availabilities;

export type AvailabilitiesCreateMutation = {
  Response: AvailabilitiesCreateMutationResponse;
  Request: AvailabilitiesCreateMutationRequest;
};
