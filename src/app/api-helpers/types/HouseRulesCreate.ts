import type { HouseRules } from "./HouseRules";

export type HouseRulesCreate201 = HouseRules;

export type HouseRulesCreateMutationRequest = Omit<
  NonNullable<HouseRules>,
  "id"
>;

export type HouseRulesCreateMutationResponse = HouseRules;

export type HouseRulesCreateMutation = {
  Response: HouseRulesCreateMutationResponse;
  Request: HouseRulesCreateMutationRequest;
};
