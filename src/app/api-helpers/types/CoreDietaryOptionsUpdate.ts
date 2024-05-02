import type { DietaryOptions } from "./DietaryOptions";

export type CoreDietaryOptionsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Dietary Option.
   * @type integer
   */
  id: number;
};

export type CoreDietaryOptionsUpdate200 = DietaryOptions;

export type CoreDietaryOptionsUpdateMutationRequest = Omit<
  NonNullable<DietaryOptions>,
  "id"
>;

export type CoreDietaryOptionsUpdateMutationResponse = DietaryOptions;

export type CoreDietaryOptionsUpdateMutation = {
  Response: CoreDietaryOptionsUpdateMutationResponse;
  Request: CoreDietaryOptionsUpdateMutationRequest;
  PathParams: CoreDietaryOptionsUpdatePathParams;
};
