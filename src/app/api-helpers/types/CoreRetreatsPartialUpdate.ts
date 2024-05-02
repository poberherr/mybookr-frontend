import type { Retreat } from "./Retreat";

export type CoreRetreatsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Retreat.
   * @type integer
   */
  id: number;
};

export type CoreRetreatsPartialUpdate200 = Retreat;

export type CoreRetreatsPartialUpdateMutationRequest = Omit<
  NonNullable<Retreat>,
  "id" | "program_schedule"
>;

export type CoreRetreatsPartialUpdateMutationResponse = Retreat;

export type CoreRetreatsPartialUpdateMutation = {
  Response: CoreRetreatsPartialUpdateMutationResponse;
  Request: CoreRetreatsPartialUpdateMutationRequest;
  PathParams: CoreRetreatsPartialUpdatePathParams;
};
