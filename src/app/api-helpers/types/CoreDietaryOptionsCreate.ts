import type { DietaryOptions } from "./DietaryOptions";

export type CoreDietaryOptionsCreate201 = DietaryOptions;

export type CoreDietaryOptionsCreateMutationRequest = Omit<
  NonNullable<DietaryOptions>,
  "id"
>;

export type CoreDietaryOptionsCreateMutationResponse = DietaryOptions;

export type CoreDietaryOptionsCreateMutation = {
  Response: CoreDietaryOptionsCreateMutationResponse;
  Request: CoreDietaryOptionsCreateMutationRequest;
};
