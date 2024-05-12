import type { HealthSafety } from "./HealthSafety";

export type HealthSafetyReadPathParams = {
  /**
   * @description A unique integer value identifying this Health and Safety.
   * @type integer
   */
  id: number;
};

export type HealthSafetyRead200 = HealthSafety;

export type HealthSafetyReadQueryResponse = HealthSafety;

export type HealthSafetyReadQuery = {
  Response: HealthSafetyReadQueryResponse;
  PathParams: HealthSafetyReadPathParams;
};
