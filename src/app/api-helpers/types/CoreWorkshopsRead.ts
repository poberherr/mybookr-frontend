import type { Workshop } from "./Workshop";

export type CoreWorkshopsReadPathParams = {
  /**
   * @description A unique integer value identifying this Workshop.
   * @type integer
   */
  id: number;
};

export type CoreWorkshopsRead200 = Workshop;

export type CoreWorkshopsReadQueryResponse = Workshop;

export type CoreWorkshopsReadQuery = {
  Response: CoreWorkshopsReadQueryResponse;
  PathParams: CoreWorkshopsReadPathParams;
};
