import type { Location } from "./Location";

export type CoreLocationsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Location.
   * @type integer
   */
  id: number;
};

export type CoreLocationsPartialUpdate200 = Location;

export type CoreLocationsPartialUpdateMutationRequest = Omit<
  NonNullable<Location>,
  "id"
>;

export type CoreLocationsPartialUpdateMutationResponse = Location;

export type CoreLocationsPartialUpdateMutation = {
  Response: CoreLocationsPartialUpdateMutationResponse;
  Request: CoreLocationsPartialUpdateMutationRequest;
  PathParams: CoreLocationsPartialUpdatePathParams;
};
