import type { Space } from "./Space";

export type CoreSpacesPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Space.
   * @type integer
   */
  id: number;
};

export type CoreSpacesPartialUpdate200 = Space;

export type CoreSpacesPartialUpdateMutationRequest = Omit<
  NonNullable<Space>,
  "id"
>;

export type CoreSpacesPartialUpdateMutationResponse = Space;

export type CoreSpacesPartialUpdateMutation = {
  Response: CoreSpacesPartialUpdateMutationResponse;
  Request: CoreSpacesPartialUpdateMutationRequest;
  PathParams: CoreSpacesPartialUpdatePathParams;
};
