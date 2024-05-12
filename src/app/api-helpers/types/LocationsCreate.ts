import type { Location } from "./Location";

export type LocationsCreate201 = Location;

export type LocationsCreateMutationRequest = Omit<NonNullable<Location>, "id">;

export type LocationsCreateMutationResponse = Location;

export type LocationsCreateMutation = {
  Response: LocationsCreateMutationResponse;
  Request: LocationsCreateMutationRequest;
};
