import type { Retreat } from "./Retreat";

export type RetreatsReadPathParams = {
  /**
   * @description A unique integer value identifying this Retreat.
   * @type integer
   */
  id: number;
};

export type RetreatsRead200 = Retreat;

export type RetreatsReadQueryResponse = Retreat;

export type RetreatsReadQuery = {
  Response: RetreatsReadQueryResponse;
  PathParams: RetreatsReadPathParams;
};
