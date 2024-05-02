import type { HealthSafety } from "./HealthSafety";

export type CoreHealthSafetyPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Health and Safety.
   * @type integer
   */
  id: number;
};

export type CoreHealthSafetyPartialUpdate200 = HealthSafety;

export type CoreHealthSafetyPartialUpdateMutationRequest = Omit<
  NonNullable<HealthSafety>,
  "id"
>;

export type CoreHealthSafetyPartialUpdateMutationResponse = HealthSafety;

export type CoreHealthSafetyPartialUpdateMutation = {
  Response: CoreHealthSafetyPartialUpdateMutationResponse;
  Request: CoreHealthSafetyPartialUpdateMutationRequest;
  PathParams: CoreHealthSafetyPartialUpdatePathParams;
};
