import type { CustomUser } from "./CustomUser";

export type UsersCreate201 = CustomUser;

export type UsersCreateMutationRequest = Omit<
  NonNullable<CustomUser>,
  "id" | "profile_picture"
>;

export type UsersCreateMutationResponse = CustomUser;

export type UsersCreateMutation = {
  Response: UsersCreateMutationResponse;
  Request: UsersCreateMutationRequest;
};
