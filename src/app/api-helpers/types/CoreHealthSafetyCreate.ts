import type { HealthSafety } from "./HealthSafety";

export type CoreHealthSafetyCreate201 = HealthSafety;

export type CoreHealthSafetyCreateMutationRequest = Omit<
  NonNullable<HealthSafety>,
  "id"
>;

export type CoreHealthSafetyCreateMutationResponse = HealthSafety;

export type CoreHealthSafetyCreateMutation = {
  Response: CoreHealthSafetyCreateMutationResponse;
  Request: CoreHealthSafetyCreateMutationRequest;
};
