import type { CustomUser } from "./CustomUser";

export type UsersList200 = CustomUser[];

export type UsersListQueryResponse = CustomUser[];

export type UsersListQuery = {
  Response: UsersListQueryResponse;
};
