import type { Accessibility } from "./Accessibility";

export type CoreAccessibilityCreate201 = Accessibility;

export type CoreAccessibilityCreateMutationRequest = Omit<
  NonNullable<Accessibility>,
  "id"
>;

export type CoreAccessibilityCreateMutationResponse = Accessibility;

export type CoreAccessibilityCreateMutation = {
  Response: CoreAccessibilityCreateMutationResponse;
  Request: CoreAccessibilityCreateMutationRequest;
};
