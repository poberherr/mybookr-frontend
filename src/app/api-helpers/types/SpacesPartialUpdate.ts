import type { Space } from "./Space";

export type SpacesPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Space.
   * @type integer
   */
  id: number;
};

export type SpacesPartialUpdate200 = Space;

export type SpacesPartialUpdateMutationRequest = Omit<NonNullable<Space>, "id">;

export type SpacesPartialUpdateMutationResponse = Space;

export type SpacesPartialUpdateMutation = {
  Response: SpacesPartialUpdateMutationResponse;
  Request: SpacesPartialUpdateMutationRequest;
  PathParams: SpacesPartialUpdatePathParams;
};
