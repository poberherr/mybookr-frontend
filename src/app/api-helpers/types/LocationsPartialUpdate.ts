import type { Location } from "./Location";

export type LocationsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Location.
   * @type integer
   */
  id: number;
};

export type LocationsPartialUpdate200 = Location;

export type LocationsPartialUpdateMutationRequest = Omit<
  NonNullable<Location>,
  "id"
>;

export type LocationsPartialUpdateMutationResponse = Location;

export type LocationsPartialUpdateMutation = {
  Response: LocationsPartialUpdateMutationResponse;
  Request: LocationsPartialUpdateMutationRequest;
  PathParams: LocationsPartialUpdatePathParams;
};
