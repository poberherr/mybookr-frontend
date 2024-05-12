import type { HealthSafety } from "./HealthSafety";

export type HealthSafetyCreate201 = HealthSafety;

export type HealthSafetyCreateMutationRequest = Omit<
  NonNullable<HealthSafety>,
  "id"
>;

export type HealthSafetyCreateMutationResponse = HealthSafety;

export type HealthSafetyCreateMutation = {
  Response: HealthSafetyCreateMutationResponse;
  Request: HealthSafetyCreateMutationRequest;
};
