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
import type {
  UsersReadPathParams,
  UsersReadQueryResponse,
} from "../types/UsersRead";

type UsersReadClient = typeof client<UsersReadQueryResponse, never, never>;
type UsersRead = {
  data: UsersReadQueryResponse;
  error: never;
  request: never;
  pathParams: UsersReadPathParams;
  queryParams: never;
  headerParams: never;
  response: UsersReadQueryResponse;
  client: {
    parameters: Partial<Parameters<UsersReadClient>[0]>;
    return: Awaited<ReturnType<UsersReadClient>>;
  };
};
export const usersReadQueryKey = (id: UsersReadPathParams["id"]) =>
  [{ url: "/users/:id/", params: { id: id } }] as const;
export type UsersReadQueryKey = ReturnType<typeof usersReadQueryKey>;
export function usersReadQueryOptions(
  id: UsersReadPathParams["id"],
  options: UsersRead["client"]["parameters"] = {},
) {
  const queryKey = usersReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<UsersRead["data"], UsersRead["error"]>({
        method: "get",
        url: `/users/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing users.
 * @link /users/:id/
 */
export function useUsersRead<
  TData = UsersRead["response"],
  TQueryData = UsersRead["response"],
  TQueryKey extends QueryKey = UsersReadQueryKey,
>(
  id: UsersReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        UsersRead["response"],
        UsersRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: UsersRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, UsersRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? usersReadQueryKey(id);
  const query = useQuery({
    ...(usersReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, UsersRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const usersReadSuspenseQueryKey = (id: UsersReadPathParams["id"]) =>
  [{ url: "/users/:id/", params: { id: id } }] as const;
export type UsersReadSuspenseQueryKey = ReturnType<
  typeof usersReadSuspenseQueryKey
>;
export function usersReadSuspenseQueryOptions(
  id: UsersReadPathParams["id"],
  options: UsersRead["client"]["parameters"] = {},
) {
  const queryKey = usersReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<UsersRead["data"], UsersRead["error"]>({
        method: "get",
        url: `/users/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing users.
 * @link /users/:id/
 */
export function useUsersReadSuspense<
  TData = UsersRead["response"],
  TQueryKey extends QueryKey = UsersReadSuspenseQueryKey,
>(
  id: UsersReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        UsersRead["response"],
        UsersRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: UsersRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, UsersRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? usersReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(usersReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, UsersRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
