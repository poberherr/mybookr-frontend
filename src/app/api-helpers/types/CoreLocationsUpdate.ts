import type { Location } from "./Location";

export type CoreLocationsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Location.
   * @type integer
   */
  id: number;
};

export type CoreLocationsUpdate200 = Location;

export type CoreLocationsUpdateMutationRequest = Omit<
  NonNullable<Location>,
  "id"
>;

export type CoreLocationsUpdateMutationResponse = Location;

export type CoreLocationsUpdateMutation = {
  Response: CoreLocationsUpdateMutationResponse;
  Request: CoreLocationsUpdateMutationRequest;
  PathParams: CoreLocationsUpdatePathParams;
};
