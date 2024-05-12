import type { CustomUser } from "./CustomUser";

export type UsersReadPathParams = {
  /**
   * @description A unique integer value identifying this user.
   * @type integer
   */
  id: number;
};

export type UsersRead200 = CustomUser;

export type UsersReadQueryResponse = CustomUser;

export type UsersReadQuery = {
  Response: UsersReadQueryResponse;
  PathParams: UsersReadPathParams;
};
