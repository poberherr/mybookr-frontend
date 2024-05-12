import type { Space } from "./Space";

export type SpacesCreate201 = Space;

export type SpacesCreateMutationRequest = Omit<NonNullable<Space>, "id">;

export type SpacesCreateMutationResponse = Space;

export type SpacesCreateMutation = {
  Response: SpacesCreateMutationResponse;
  Request: SpacesCreateMutationRequest;
};
