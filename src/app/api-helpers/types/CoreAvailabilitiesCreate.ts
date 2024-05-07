import type { Availabilities } from "./Availabilities";

export type CoreAvailabilitiesCreate201 = Availabilities;

export type CoreAvailabilitiesCreateMutationRequest = Omit<
  NonNullable<Availabilities>,
  "id"
>;

export type CoreAvailabilitiesCreateMutationResponse = Availabilities;

export type CoreAvailabilitiesCreateMutation = {
  Response: CoreAvailabilitiesCreateMutationResponse;
  Request: CoreAvailabilitiesCreateMutationRequest;
};
