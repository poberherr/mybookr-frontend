import type { Space } from "./Space";

export type SpacesUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Space.
   * @type integer
   */
  id: number;
};

export type SpacesUpdate200 = Space;

export type SpacesUpdateMutationRequest = Omit<NonNullable<Space>, "id">;

export type SpacesUpdateMutationResponse = Space;

export type SpacesUpdateMutation = {
  Response: SpacesUpdateMutationResponse;
  Request: SpacesUpdateMutationRequest;
  PathParams: SpacesUpdatePathParams;
};
