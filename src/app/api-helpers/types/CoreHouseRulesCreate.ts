import type { HouseRules } from "./HouseRules";

export type CoreHouseRulesCreate201 = HouseRules;

export type CoreHouseRulesCreateMutationRequest = Omit<
  NonNullable<HouseRules>,
  "id"
>;

export type CoreHouseRulesCreateMutationResponse = HouseRules;

export type CoreHouseRulesCreateMutation = {
  Response: CoreHouseRulesCreateMutationResponse;
  Request: CoreHouseRulesCreateMutationRequest;
};
