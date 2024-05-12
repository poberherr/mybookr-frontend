import type { Retreat } from "./Retreat";

export type RetreatsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Retreat.
   * @type integer
   */
  id: number;
};

export type RetreatsUpdate200 = Retreat;

export type RetreatsUpdateMutationRequest = Omit<
  NonNullable<Retreat>,
  "id" | "program_schedule"
>;

export type RetreatsUpdateMutationResponse = Retreat;

export type RetreatsUpdateMutation = {
  Response: RetreatsUpdateMutationResponse;
  Request: RetreatsUpdateMutationRequest;
  PathParams: RetreatsUpdatePathParams;
};
