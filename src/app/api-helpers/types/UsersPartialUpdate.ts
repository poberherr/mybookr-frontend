import type { CustomUser } from "./CustomUser";

export type UsersPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this user.
   * @type integer
   */
  id: number;
};

export type UsersPartialUpdate200 = CustomUser;

export type UsersPartialUpdateMutationRequest = Omit<
  NonNullable<CustomUser>,
  "id" | "profile_picture"
>;

export type UsersPartialUpdateMutationResponse = CustomUser;

export type UsersPartialUpdateMutation = {
  Response: UsersPartialUpdateMutationResponse;
  Request: UsersPartialUpdateMutationRequest;
  PathParams: UsersPartialUpdatePathParams;
};
