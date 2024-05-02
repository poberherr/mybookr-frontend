import type { DietaryOptions } from "./DietaryOptions";

export type CoreDietaryOptionsReadPathParams = {
  /**
   * @description A unique integer value identifying this Dietary Option.
   * @type integer
   */
  id: number;
};

export type CoreDietaryOptionsRead200 = DietaryOptions;

export type CoreDietaryOptionsReadQueryResponse = DietaryOptions;

export type CoreDietaryOptionsReadQuery = {
  Response: CoreDietaryOptionsReadQueryResponse;
  PathParams: CoreDietaryOptionsReadPathParams;
};
