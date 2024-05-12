import type { Retreat } from "./Retreat";

export type RetreatsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Retreat.
   * @type integer
   */
  id: number;
};

export type RetreatsPartialUpdate200 = Retreat;

export type RetreatsPartialUpdateMutationRequest = Omit<
  NonNullable<Retreat>,
  "id" | "program_schedule"
>;

export type RetreatsPartialUpdateMutationResponse = Retreat;

export type RetreatsPartialUpdateMutation = {
  Response: RetreatsPartialUpdateMutationResponse;
  Request: RetreatsPartialUpdateMutationRequest;
  PathParams: RetreatsPartialUpdatePathParams;
};
