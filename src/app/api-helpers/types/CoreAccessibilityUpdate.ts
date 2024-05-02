import type { Accessibility } from "./Accessibility";

export type CoreAccessibilityUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Accessibility.
   * @type integer
   */
  id: number;
};

export type CoreAccessibilityUpdate200 = Accessibility;

export type CoreAccessibilityUpdateMutationRequest = Omit<
  NonNullable<Accessibility>,
  "id"
>;

export type CoreAccessibilityUpdateMutationResponse = Accessibility;

export type CoreAccessibilityUpdateMutation = {
  Response: CoreAccessibilityUpdateMutationResponse;
  Request: CoreAccessibilityUpdateMutationRequest;
  PathParams: CoreAccessibilityUpdatePathParams;
};
