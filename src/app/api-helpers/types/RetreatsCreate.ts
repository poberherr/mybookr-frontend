import type { Retreat } from "./Retreat";

export type RetreatsCreate201 = Retreat;

export type RetreatsCreateMutationRequest = Omit<
  NonNullable<Retreat>,
  "id" | "program_schedule"
>;

export type RetreatsCreateMutationResponse = Retreat;

export type RetreatsCreateMutation = {
  Response: RetreatsCreateMutationResponse;
  Request: RetreatsCreateMutationRequest;
};
