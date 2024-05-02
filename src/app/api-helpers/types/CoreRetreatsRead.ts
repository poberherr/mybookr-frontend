import type { Retreat } from "./Retreat";

export type CoreRetreatsReadPathParams = {
  /**
   * @description A unique integer value identifying this Retreat.
   * @type integer
   */
  id: number;
};

export type CoreRetreatsRead200 = Retreat;

export type CoreRetreatsReadQueryResponse = Retreat;

export type CoreRetreatsReadQuery = {
  Response: CoreRetreatsReadQueryResponse;
  PathParams: CoreRetreatsReadPathParams;
};
