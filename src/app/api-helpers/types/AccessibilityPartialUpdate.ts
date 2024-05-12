import type { Accessibility } from "./Accessibility";

export type AccessibilityPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Accessibility.
   * @type integer
   */
  id: number;
};

export type AccessibilityPartialUpdate200 = Accessibility;

export type AccessibilityPartialUpdateMutationRequest = Omit<
  NonNullable<Accessibility>,
  "id"
>;

export type AccessibilityPartialUpdateMutationResponse = Accessibility;

export type AccessibilityPartialUpdateMutation = {
  Response: AccessibilityPartialUpdateMutationResponse;
  Request: AccessibilityPartialUpdateMutationRequest;
  PathParams: AccessibilityPartialUpdatePathParams;
};
