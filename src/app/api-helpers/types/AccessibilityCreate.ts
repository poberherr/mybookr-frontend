import type { Accessibility } from "./Accessibility";

export type AccessibilityCreate201 = Accessibility;

export type AccessibilityCreateMutationRequest = Omit<
  NonNullable<Accessibility>,
  "id"
>;

export type AccessibilityCreateMutationResponse = Accessibility;

export type AccessibilityCreateMutation = {
  Response: AccessibilityCreateMutationResponse;
  Request: AccessibilityCreateMutationRequest;
};
