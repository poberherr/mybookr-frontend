import type { Space } from "./Space";

export type CoreSpacesUpdatePathParams = {
  /**
   * @description A unique integer value identifying this space.
   * @type integer
   */
  id: number;
};

export type CoreSpacesUpdate200 = Space;

export type CoreSpacesUpdateMutationRequest = Space;

export type CoreSpacesUpdateMutationResponse = Space;

export type CoreSpacesUpdateMutation = {
  Response: CoreSpacesUpdateMutationResponse;
  Request: CoreSpacesUpdateMutationRequest;
  PathParams: CoreSpacesUpdatePathParams;
};
