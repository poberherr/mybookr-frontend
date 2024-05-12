import type { Accessibility } from "./Accessibility";

export type AccessibilityReadPathParams = {
  /**
   * @description A unique integer value identifying this Accessibility.
   * @type integer
   */
  id: number;
};

export type AccessibilityRead200 = Accessibility;

export type AccessibilityReadQueryResponse = Accessibility;

export type AccessibilityReadQuery = {
  Response: AccessibilityReadQueryResponse;
  PathParams: AccessibilityReadPathParams;
};
