import {
  queryOptions,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";
import type {
  QueryKey,
  QueryObserverOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import client from "../../../client";
import type { UsersListQueryResponse } from "../types/UsersList";

type UsersListClient = typeof client<UsersListQueryResponse, never, never>;
type UsersList = {
  data: UsersListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: UsersListQueryResponse;
  client: {
    parameters: Partial<Parameters<UsersListClient>[0]>;
    return: Awaited<ReturnType<UsersListClient>>;
  };
};
export const usersListQueryKey = () => [{ url: "/users/" }] as const;
export type UsersListQueryKey = ReturnType<typeof usersListQueryKey>;
export function usersListQueryOptions(
  options: UsersList["client"]["parameters"] = {},
) {
  const queryKey = usersListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<UsersList["data"], UsersList["error"]>({
        method: "get",
        url: `/users/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing users.
 * @link /users/
 */
export function useUsersList<
  TData = UsersList["response"],
  TQueryData = UsersList["response"],
  TQueryKey extends QueryKey = UsersListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        UsersList["response"],
        UsersList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: UsersList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, UsersList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? usersListQueryKey();
  const query = useQuery({
    ...(usersListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, UsersList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const usersListSuspenseQueryKey = () => [{ url: "/users/" }] as const;
export type UsersListSuspenseQueryKey = ReturnType<
  typeof usersListSuspenseQueryKey
>;
export function usersListSuspenseQueryOptions(
  options: UsersList["client"]["parameters"] = {},
) {
  const queryKey = usersListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<UsersList["data"], UsersList["error"]>({
        method: "get",
        url: `/users/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing users.
 * @link /users/
 */
export function useUsersListSuspense<
  TData = UsersList["response"],
  TQueryKey extends QueryKey = UsersListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        UsersList["response"],
        UsersList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: UsersList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, UsersList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? usersListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(usersListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, UsersList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
