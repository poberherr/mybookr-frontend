import type { HouseRules } from "./HouseRules";

export type CoreHouseRulesUpdatePathParams = {
  /**
   * @description A unique integer value identifying this House Rule.
   * @type integer
   */
  id: number;
};

export type CoreHouseRulesUpdate200 = HouseRules;

export type CoreHouseRulesUpdateMutationRequest = Omit<
  NonNullable<HouseRules>,
  "id"
>;

export type CoreHouseRulesUpdateMutationResponse = HouseRules;

export type CoreHouseRulesUpdateMutation = {
  Response: CoreHouseRulesUpdateMutationResponse;
  Request: CoreHouseRulesUpdateMutationRequest;
  PathParams: CoreHouseRulesUpdatePathParams;
};
