import type { Space } from "./Space";

export type CoreSpacesCreate201 = Space;

export type CoreSpacesCreateMutationRequest = Omit<NonNullable<Space>, "id">;

export type CoreSpacesCreateMutationResponse = Space;

export type CoreSpacesCreateMutation = {
  Response: CoreSpacesCreateMutationResponse;
  Request: CoreSpacesCreateMutationRequest;
};
