import type { Accessibility } from "./Accessibility";

export type AccessibilityUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Accessibility.
   * @type integer
   */
  id: number;
};

export type AccessibilityUpdate200 = Accessibility;

export type AccessibilityUpdateMutationRequest = Omit<
  NonNullable<Accessibility>,
  "id"
>;

export type AccessibilityUpdateMutationResponse = Accessibility;

export type AccessibilityUpdateMutation = {
  Response: AccessibilityUpdateMutationResponse;
  Request: AccessibilityUpdateMutationRequest;
  PathParams: AccessibilityUpdatePathParams;
};
