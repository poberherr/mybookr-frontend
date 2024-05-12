import type { Workshop } from "./Workshop";

export type WorkshopsCreate201 = Workshop;

export type WorkshopsCreateMutationRequest = Omit<NonNullable<Workshop>, "id">;

export type WorkshopsCreateMutationResponse = Workshop;

export type WorkshopsCreateMutation = {
  Response: WorkshopsCreateMutationResponse;
  Request: WorkshopsCreateMutationRequest;
};
