import type { HealthSafety } from "./HealthSafety";

export type HealthSafetyUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Health and Safety.
   * @type integer
   */
  id: number;
};

export type HealthSafetyUpdate200 = HealthSafety;

export type HealthSafetyUpdateMutationRequest = Omit<
  NonNullable<HealthSafety>,
  "id"
>;

export type HealthSafetyUpdateMutationResponse = HealthSafety;

export type HealthSafetyUpdateMutation = {
  Response: HealthSafetyUpdateMutationResponse;
  Request: HealthSafetyUpdateMutationRequest;
  PathParams: HealthSafetyUpdatePathParams;
};
