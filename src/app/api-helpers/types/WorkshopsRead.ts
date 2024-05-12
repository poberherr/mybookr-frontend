import type { Workshop } from "./Workshop";

export type WorkshopsReadPathParams = {
  /**
   * @description A unique integer value identifying this Workshop.
   * @type integer
   */
  id: number;
};

export type WorkshopsRead200 = Workshop;

export type WorkshopsReadQueryResponse = Workshop;

export type WorkshopsReadQuery = {
  Response: WorkshopsReadQueryResponse;
  PathParams: WorkshopsReadPathParams;
};
