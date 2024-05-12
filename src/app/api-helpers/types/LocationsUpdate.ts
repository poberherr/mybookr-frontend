import type { Location } from "./Location";

export type LocationsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Location.
   * @type integer
   */
  id: number;
};

export type LocationsUpdate200 = Location;

export type LocationsUpdateMutationRequest = Omit<NonNullable<Location>, "id">;

export type LocationsUpdateMutationResponse = Location;

export type LocationsUpdateMutation = {
  Response: LocationsUpdateMutationResponse;
  Request: LocationsUpdateMutationRequest;
  PathParams: LocationsUpdatePathParams;
};
