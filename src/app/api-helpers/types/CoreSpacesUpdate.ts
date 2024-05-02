import type { Space } from "./Space";

export type CoreSpacesUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Space.
   * @type integer
   */
  id: number;
};

export type CoreSpacesUpdate200 = Space;

export type CoreSpacesUpdateMutationRequest = Omit<NonNullable<Space>, "id">;

export type CoreSpacesUpdateMutationResponse = Space;

export type CoreSpacesUpdateMutation = {
  Response: CoreSpacesUpdateMutationResponse;
  Request: CoreSpacesUpdateMutationRequest;
  PathParams: CoreSpacesUpdatePathParams;
};
