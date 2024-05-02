import type { Retreat } from "./Retreat";

export type CoreRetreatsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Retreat.
   * @type integer
   */
  id: number;
};

export type CoreRetreatsUpdate200 = Retreat;

export type CoreRetreatsUpdateMutationRequest = Omit<
  NonNullable<Retreat>,
  "id" | "program_schedule"
>;

export type CoreRetreatsUpdateMutationResponse = Retreat;

export type CoreRetreatsUpdateMutation = {
  Response: CoreRetreatsUpdateMutationResponse;
  Request: CoreRetreatsUpdateMutationRequest;
  PathParams: CoreRetreatsUpdatePathParams;
};
