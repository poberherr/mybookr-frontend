import type { Location } from "./Location";

export type CoreLocationsCreate201 = Location;

export type CoreLocationsCreateMutationRequest = Omit<
  NonNullable<Location>,
  "id"
>;

export type CoreLocationsCreateMutationResponse = Location;

export type CoreLocationsCreateMutation = {
  Response: CoreLocationsCreateMutationResponse;
  Request: CoreLocationsCreateMutationRequest;
};
