import type { Space } from "./Space";

export type SpacesReadPathParams = {
  /**
   * @description A unique integer value identifying this Space.
   * @type integer
   */
  id: number;
};

export type SpacesRead200 = Space;

export type SpacesReadQueryResponse = Space;

export type SpacesReadQuery = {
  Response: SpacesReadQueryResponse;
  PathParams: SpacesReadPathParams;
};
