import type { HealthSafety } from "./HealthSafety";

export type CoreHealthSafetyUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Health and Safety.
   * @type integer
   */
  id: number;
};

export type CoreHealthSafetyUpdate200 = HealthSafety;

export type CoreHealthSafetyUpdateMutationRequest = Omit<
  NonNullable<HealthSafety>,
  "id"
>;

export type CoreHealthSafetyUpdateMutationResponse = HealthSafety;

export type CoreHealthSafetyUpdateMutation = {
  Response: CoreHealthSafetyUpdateMutationResponse;
  Request: CoreHealthSafetyUpdateMutationRequest;
  PathParams: CoreHealthSafetyUpdatePathParams;
};
