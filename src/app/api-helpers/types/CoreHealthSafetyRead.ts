import type { HealthSafety } from "./HealthSafety";

export type CoreHealthSafetyReadPathParams = {
  /**
   * @description A unique integer value identifying this Health and Safety.
   * @type integer
   */
  id: number;
};

export type CoreHealthSafetyRead200 = HealthSafety;

export type CoreHealthSafetyReadQueryResponse = HealthSafety;

export type CoreHealthSafetyReadQuery = {
  Response: CoreHealthSafetyReadQueryResponse;
  PathParams: CoreHealthSafetyReadPathParams;
};
