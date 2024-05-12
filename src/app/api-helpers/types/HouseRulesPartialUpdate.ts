import type { HouseRules } from "./HouseRules";

export type HouseRulesPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this House Rule.
   * @type integer
   */
  id: number;
};

export type HouseRulesPartialUpdate200 = HouseRules;

export type HouseRulesPartialUpdateMutationRequest = Omit<
  NonNullable<HouseRules>,
  "id"
>;

export type HouseRulesPartialUpdateMutationResponse = HouseRules;

export type HouseRulesPartialUpdateMutation = {
  Response: HouseRulesPartialUpdateMutationResponse;
  Request: HouseRulesPartialUpdateMutationRequest;
  PathParams: HouseRulesPartialUpdatePathParams;
};
