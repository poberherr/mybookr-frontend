import type { DietaryOptions } from "./DietaryOptions";

export type DietaryOptionsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Dietary Option.
   * @type integer
   */
  id: number;
};

export type DietaryOptionsUpdate200 = DietaryOptions;

export type DietaryOptionsUpdateMutationRequest = Omit<
  NonNullable<DietaryOptions>,
  "id"
>;

export type DietaryOptionsUpdateMutationResponse = DietaryOptions;

export type DietaryOptionsUpdateMutation = {
  Response: DietaryOptionsUpdateMutationResponse;
  Request: DietaryOptionsUpdateMutationRequest;
  PathParams: DietaryOptionsUpdatePathParams;
};
