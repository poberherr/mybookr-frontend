import type { HealthSafety } from "./HealthSafety";

export type HealthSafetyPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Health and Safety.
   * @type integer
   */
  id: number;
};

export type HealthSafetyPartialUpdate200 = HealthSafety;

export type HealthSafetyPartialUpdateMutationRequest = Omit<
  NonNullable<HealthSafety>,
  "id"
>;

export type HealthSafetyPartialUpdateMutationResponse = HealthSafety;

export type HealthSafetyPartialUpdateMutation = {
  Response: HealthSafetyPartialUpdateMutationResponse;
  Request: HealthSafetyPartialUpdateMutationRequest;
  PathParams: HealthSafetyPartialUpdatePathParams;
};
