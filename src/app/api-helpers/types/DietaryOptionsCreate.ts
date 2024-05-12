import type { DietaryOptions } from "./DietaryOptions";

export type DietaryOptionsCreate201 = DietaryOptions;

export type DietaryOptionsCreateMutationRequest = Omit<
  NonNullable<DietaryOptions>,
  "id"
>;

export type DietaryOptionsCreateMutationResponse = DietaryOptions;

export type DietaryOptionsCreateMutation = {
  Response: DietaryOptionsCreateMutationResponse;
  Request: DietaryOptionsCreateMutationRequest;
};
