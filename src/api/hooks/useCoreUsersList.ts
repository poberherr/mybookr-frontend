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

import client from "../../client";
import type { CoreUsersListQueryResponse } from "../types/CoreUsersList";

type CoreUsersListClient = typeof client<
  CoreUsersListQueryResponse,
  never,
  never
>;
type CoreUsersList = {
  data: CoreUsersListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreUsersListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreUsersListClient>[0]>;
    return: Awaited<ReturnType<CoreUsersListClient>>;
  };
};
export const coreUsersListQueryKey = () => [{ url: "/core/users/" }] as const;
export type CoreUsersListQueryKey = ReturnType<typeof coreUsersListQueryKey>;
export function coreUsersListQueryOptions(
  options: CoreUsersList["client"]["parameters"] = {},
) {
  const queryKey = coreUsersListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<CoreUsersList["data"], CoreUsersList["error"]>({
        method: "get",
        url: `/core/users/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing users.
 * @link /core/users/
 */
export function useCoreUsersList<
  TData = CoreUsersList["response"],
  TQueryData = CoreUsersList["response"],
  TQueryKey extends QueryKey = CoreUsersListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreUsersList["response"],
        CoreUsersList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreUsersList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreUsersList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreUsersListQueryKey();
  const query = useQuery({
    ...(coreUsersListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreUsersList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreUsersListSuspenseQueryKey = () =>
  [{ url: "/core/users/" }] as const;
export type CoreUsersListSuspenseQueryKey = ReturnType<
  typeof coreUsersListSuspenseQueryKey
>;
export function coreUsersListSuspenseQueryOptions(
  options: CoreUsersList["client"]["parameters"] = {},
) {
  const queryKey = coreUsersListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<CoreUsersList["data"], CoreUsersList["error"]>({
        method: "get",
        url: `/core/users/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing users.
 * @link /core/users/
 */
export function useCoreUsersListSuspense<
  TData = CoreUsersList["response"],
  TQueryKey extends QueryKey = CoreUsersListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreUsersList["response"],
        CoreUsersList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreUsersList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreUsersList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreUsersListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreUsersListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreUsersList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
