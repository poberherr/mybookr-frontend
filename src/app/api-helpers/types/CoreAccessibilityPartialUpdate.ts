import type { Accessibility } from "./Accessibility";

export type CoreAccessibilityPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Accessibility.
   * @type integer
   */
  id: number;
};

export type CoreAccessibilityPartialUpdate200 = Accessibility;

export type CoreAccessibilityPartialUpdateMutationRequest = Omit<
  NonNullable<Accessibility>,
  "id"
>;

export type CoreAccessibilityPartialUpdateMutationResponse = Accessibility;

export type CoreAccessibilityPartialUpdateMutation = {
  Response: CoreAccessibilityPartialUpdateMutationResponse;
  Request: CoreAccessibilityPartialUpdateMutationRequest;
  PathParams: CoreAccessibilityPartialUpdatePathParams;
};
