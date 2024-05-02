import type { Accessibility } from "./Accessibility";

export type CoreAccessibilityReadPathParams = {
  /**
   * @description A unique integer value identifying this Accessibility.
   * @type integer
   */
  id: number;
};

export type CoreAccessibilityRead200 = Accessibility;

export type CoreAccessibilityReadQueryResponse = Accessibility;

export type CoreAccessibilityReadQuery = {
  Response: CoreAccessibilityReadQueryResponse;
  PathParams: CoreAccessibilityReadPathParams;
};
