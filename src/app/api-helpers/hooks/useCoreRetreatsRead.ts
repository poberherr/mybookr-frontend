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
  CoreRetreatsReadPathParams,
  CoreRetreatsReadQueryResponse,
} from "../types/CoreRetreatsRead";

type CoreRetreatsReadClient = typeof client<
  CoreRetreatsReadQueryResponse,
  never,
  never
>;
type CoreRetreatsRead = {
  data: CoreRetreatsReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreRetreatsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreRetreatsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreRetreatsReadClient>[0]>;
    return: Awaited<ReturnType<CoreRetreatsReadClient>>;
  };
};
export const coreRetreatsReadQueryKey = (
  id: CoreRetreatsReadPathParams["id"],
) => [{ url: "/core/retreats/:id/", params: { id: id } }] as const;
export type CoreRetreatsReadQueryKey = ReturnType<
  typeof coreRetreatsReadQueryKey
>;
export function coreRetreatsReadQueryOptions(
  id: CoreRetreatsReadPathParams["id"],
  options: CoreRetreatsRead["client"]["parameters"] = {},
) {
  const queryKey = coreRetreatsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreRetreatsRead["data"],
        CoreRetreatsRead["error"]
      >({
        method: "get",
        url: `/core/retreats/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/retreats/:id/
 */
export function useCoreRetreatsRead<
  TData = CoreRetreatsRead["response"],
  TQueryData = CoreRetreatsRead["response"],
  TQueryKey extends QueryKey = CoreRetreatsReadQueryKey,
>(
  id: CoreRetreatsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreRetreatsRead["response"],
        CoreRetreatsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreRetreatsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreRetreatsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreRetreatsReadQueryKey(id);
  const query = useQuery({
    ...(coreRetreatsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreRetreatsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreRetreatsReadSuspenseQueryKey = (
  id: CoreRetreatsReadPathParams["id"],
) => [{ url: "/core/retreats/:id/", params: { id: id } }] as const;
export type CoreRetreatsReadSuspenseQueryKey = ReturnType<
  typeof coreRetreatsReadSuspenseQueryKey
>;
export function coreRetreatsReadSuspenseQueryOptions(
  id: CoreRetreatsReadPathParams["id"],
  options: CoreRetreatsRead["client"]["parameters"] = {},
) {
  const queryKey = coreRetreatsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreRetreatsRead["data"],
        CoreRetreatsRead["error"]
      >({
        method: "get",
        url: `/core/retreats/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/retreats/:id/
 */
export function useCoreRetreatsReadSuspense<
  TData = CoreRetreatsRead["response"],
  TQueryKey extends QueryKey = CoreRetreatsReadSuspenseQueryKey,
>(
  id: CoreRetreatsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreRetreatsRead["response"],
        CoreRetreatsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreRetreatsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreRetreatsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreRetreatsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreRetreatsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreRetreatsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
