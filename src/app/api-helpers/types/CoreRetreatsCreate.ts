import type { Retreat } from "./Retreat";

export type CoreRetreatsCreate201 = Retreat;

export type CoreRetreatsCreateMutationRequest = Omit<
  NonNullable<Retreat>,
  "id" | "program_schedule"
>;

export type CoreRetreatsCreateMutationResponse = Retreat;

export type CoreRetreatsCreateMutation = {
  Response: CoreRetreatsCreateMutationResponse;
  Request: CoreRetreatsCreateMutationRequest;
};
