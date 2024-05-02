import type { Workshop } from "./Workshop";

export type CoreWorkshopsCreate201 = Workshop;

export type CoreWorkshopsCreateMutationRequest = Omit<
  NonNullable<Workshop>,
  "id"
>;

export type CoreWorkshopsCreateMutationResponse = Workshop;

export type CoreWorkshopsCreateMutation = {
  Response: CoreWorkshopsCreateMutationResponse;
  Request: CoreWorkshopsCreateMutationRequest;
};
