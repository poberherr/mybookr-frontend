import type { DietaryOptions } from "./DietaryOptions";

export type DietaryOptionsReadPathParams = {
  /**
   * @description A unique integer value identifying this Dietary Option.
   * @type integer
   */
  id: number;
};

export type DietaryOptionsRead200 = DietaryOptions;

export type DietaryOptionsReadQueryResponse = DietaryOptions;

export type DietaryOptionsReadQuery = {
  Response: DietaryOptionsReadQueryResponse;
  PathParams: DietaryOptionsReadPathParams;
};
