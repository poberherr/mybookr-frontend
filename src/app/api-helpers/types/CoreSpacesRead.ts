import type { Space } from "./Space";

export type CoreSpacesReadPathParams = {
  /**
   * @description A unique integer value identifying this Space.
   * @type integer
   */
  id: number;
};

export type CoreSpacesRead200 = Space;

export type CoreSpacesReadQueryResponse = Space;

export type CoreSpacesReadQuery = {
  Response: CoreSpacesReadQueryResponse;
  PathParams: CoreSpacesReadPathParams;
};
