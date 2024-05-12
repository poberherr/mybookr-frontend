import type { HouseRules } from "./HouseRules";

export type HouseRulesUpdatePathParams = {
  /**
   * @description A unique integer value identifying this House Rule.
   * @type integer
   */
  id: number;
};

export type HouseRulesUpdate200 = HouseRules;

export type HouseRulesUpdateMutationRequest = Omit<
  NonNullable<HouseRules>,
  "id"
>;

export type HouseRulesUpdateMutationResponse = HouseRules;

export type HouseRulesUpdateMutation = {
  Response: HouseRulesUpdateMutationResponse;
  Request: HouseRulesUpdateMutationRequest;
  PathParams: HouseRulesUpdatePathParams;
};
