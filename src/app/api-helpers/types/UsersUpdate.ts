import type { CustomUser } from "./CustomUser";

export type UsersUpdatePathParams = {
  /**
   * @description A unique integer value identifying this user.
   * @type integer
   */
  id: number;
};

export type UsersUpdate200 = CustomUser;

export type UsersUpdateMutationRequest = Omit<
  NonNullable<CustomUser>,
  "id" | "profile_picture"
>;

export type UsersUpdateMutationResponse = CustomUser;

export type UsersUpdateMutation = {
  Response: UsersUpdateMutationResponse;
  Request: UsersUpdateMutationRequest;
  PathParams: UsersUpdatePathParams;
};
