import type { CustomUser } from "./CustomUser";

export type CoreUsersReadPathParams = {
  /**
   * @description A unique integer value identifying this user.
   * @type integer
   */
  id: number;
};

export type CoreUsersRead200 = CustomUser;

export type CoreUsersReadQueryResponse = CustomUser;

export type CoreUsersReadQuery = {
  Response: CoreUsersReadQueryResponse;
  PathParams: CoreUsersReadPathParams;
};
