import type { DietaryOptions } from "./DietaryOptions";

export type CoreDietaryOptionsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Dietary Option.
   * @type integer
   */
  id: number;
};

export type CoreDietaryOptionsPartialUpdate200 = DietaryOptions;

export type CoreDietaryOptionsPartialUpdateMutationRequest = Omit<
  NonNullable<DietaryOptions>,
  "id"
>;

export type CoreDietaryOptionsPartialUpdateMutationResponse = DietaryOptions;

export type CoreDietaryOptionsPartialUpdateMutation = {
  Response: CoreDietaryOptionsPartialUpdateMutationResponse;
  Request: CoreDietaryOptionsPartialUpdateMutationRequest;
  PathParams: CoreDietaryOptionsPartialUpdatePathParams;
};
