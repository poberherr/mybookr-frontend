import type { HouseRules } from "./HouseRules";

export type HouseRulesReadPathParams = {
  /**
   * @description A unique integer value identifying this House Rule.
   * @type integer
   */
  id: number;
};

export type HouseRulesRead200 = HouseRules;

export type HouseRulesReadQueryResponse = HouseRules;

export type HouseRulesReadQuery = {
  Response: HouseRulesReadQueryResponse;
  PathParams: HouseRulesReadPathParams;
};
