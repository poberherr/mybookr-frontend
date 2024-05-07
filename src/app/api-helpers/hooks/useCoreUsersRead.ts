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
  CoreUsersReadPathParams,
  CoreUsersReadQueryResponse,
} from "../types/CoreUsersRead";

type CoreUsersReadClient = typeof client<
  CoreUsersReadQueryResponse,
  never,
  never
>;
type CoreUsersRead = {
  data: CoreUsersReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreUsersReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreUsersReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreUsersReadClient>[0]>;
    return: Awaited<ReturnType<CoreUsersReadClient>>;
  };
};
export const coreUsersReadQueryKey = (id: CoreUsersReadPathParams["id"]) =>
  [{ url: "/core/users/:id/", params: { id: id } }] as const;
export type CoreUsersReadQueryKey = ReturnType<typeof coreUsersReadQueryKey>;
export function coreUsersReadQueryOptions(
  id: CoreUsersReadPathParams["id"],
  options: CoreUsersRead["client"]["parameters"] = {},
) {
  const queryKey = coreUsersReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<CoreUsersRead["data"], CoreUsersRead["error"]>({
        method: "get",
        url: `/core/users/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing users.
 * @link /core/users/:id/
 */
export function useCoreUsersRead<
  TData = CoreUsersRead["response"],
  TQueryData = CoreUsersRead["response"],
  TQueryKey extends QueryKey = CoreUsersReadQueryKey,
>(
  id: CoreUsersReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreUsersRead["response"],
        CoreUsersRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreUsersRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreUsersRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreUsersReadQueryKey(id);
  const query = useQuery({
    ...(coreUsersReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreUsersRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreUsersReadSuspenseQueryKey = (
  id: CoreUsersReadPathParams["id"],
) => [{ url: "/core/users/:id/", params: { id: id } }] as const;
export type CoreUsersReadSuspenseQueryKey = ReturnType<
  typeof coreUsersReadSuspenseQueryKey
>;
export function coreUsersReadSuspenseQueryOptions(
  id: CoreUsersReadPathParams["id"],
  options: CoreUsersRead["client"]["parameters"] = {},
) {
  const queryKey = coreUsersReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<CoreUsersRead["data"], CoreUsersRead["error"]>({
        method: "get",
        url: `/core/users/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing users.
 * @link /core/users/:id/
 */
export function useCoreUsersReadSuspense<
  TData = CoreUsersRead["response"],
  TQueryKey extends QueryKey = CoreUsersReadSuspenseQueryKey,
>(
  id: CoreUsersReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreUsersRead["response"],
        CoreUsersRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreUsersRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreUsersRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreUsersReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreUsersReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreUsersRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
