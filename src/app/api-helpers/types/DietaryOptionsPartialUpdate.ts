import type { DietaryOptions } from "./DietaryOptions";

export type DietaryOptionsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Dietary Option.
   * @type integer
   */
  id: number;
};

export type DietaryOptionsPartialUpdate200 = DietaryOptions;

export type DietaryOptionsPartialUpdateMutationRequest = Omit<
  NonNullable<DietaryOptions>,
  "id"
>;

export type DietaryOptionsPartialUpdateMutationResponse = DietaryOptions;

export type DietaryOptionsPartialUpdateMutation = {
  Response: DietaryOptionsPartialUpdateMutationResponse;
  Request: DietaryOptionsPartialUpdateMutationRequest;
  PathParams: DietaryOptionsPartialUpdatePathParams;
};
