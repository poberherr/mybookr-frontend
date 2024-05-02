import type { HouseRules } from "./HouseRules";

export type CoreHouseRulesReadPathParams = {
  /**
   * @description A unique integer value identifying this House Rule.
   * @type integer
   */
  id: number;
};

export type CoreHouseRulesRead200 = HouseRules;

export type CoreHouseRulesReadQueryResponse = HouseRules;

export type CoreHouseRulesReadQuery = {
  Response: CoreHouseRulesReadQueryResponse;
  PathParams: CoreHouseRulesReadPathParams;
};
