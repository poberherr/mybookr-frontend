import type { HouseRules } from "./HouseRules";

export type CoreHouseRulesPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this House Rule.
   * @type integer
   */
  id: number;
};

export type CoreHouseRulesPartialUpdate200 = HouseRules;

export type CoreHouseRulesPartialUpdateMutationRequest = Omit<
  NonNullable<HouseRules>,
  "id"
>;

export type CoreHouseRulesPartialUpdateMutationResponse = HouseRules;

export type CoreHouseRulesPartialUpdateMutation = {
  Response: CoreHouseRulesPartialUpdateMutationResponse;
  Request: CoreHouseRulesPartialUpdateMutationRequest;
  PathParams: CoreHouseRulesPartialUpdatePathParams;
};
