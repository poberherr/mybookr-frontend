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
import type {
  CoreHealthSafetyReadPathParams,
  CoreHealthSafetyReadQueryResponse,
} from "../types/CoreHealthSafetyRead";

type CoreHealthSafetyReadClient = typeof client<
  CoreHealthSafetyReadQueryResponse,
  never,
  never
>;
type CoreHealthSafetyRead = {
  data: CoreHealthSafetyReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreHealthSafetyReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreHealthSafetyReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreHealthSafetyReadClient>[0]>;
    return: Awaited<ReturnType<CoreHealthSafetyReadClient>>;
  };
};
export const coreHealthSafetyReadQueryKey = (
  id: CoreHealthSafetyReadPathParams["id"],
) => [{ url: "/core/health-safety/:id/", params: { id: id } }] as const;
export type CoreHealthSafetyReadQueryKey = ReturnType<
  typeof coreHealthSafetyReadQueryKey
>;
export function coreHealthSafetyReadQueryOptions(
  id: CoreHealthSafetyReadPathParams["id"],
  options: CoreHealthSafetyRead["client"]["parameters"] = {},
) {
  const queryKey = coreHealthSafetyReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreHealthSafetyRead["data"],
        CoreHealthSafetyRead["error"]
      >({
        method: "get",
        url: `/core/health-safety/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing healthSafety.
 * @link /core/health-safety/:id/
 */
export function useCoreHealthSafetyRead<
  TData = CoreHealthSafetyRead["response"],
  TQueryData = CoreHealthSafetyRead["response"],
  TQueryKey extends QueryKey = CoreHealthSafetyReadQueryKey,
>(
  id: CoreHealthSafetyReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreHealthSafetyRead["response"],
        CoreHealthSafetyRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreHealthSafetyRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreHealthSafetyRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreHealthSafetyReadQueryKey(id);
  const query = useQuery({
    ...(coreHealthSafetyReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreHealthSafetyRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreHealthSafetyReadSuspenseQueryKey = (
  id: CoreHealthSafetyReadPathParams["id"],
) => [{ url: "/core/health-safety/:id/", params: { id: id } }] as const;
export type CoreHealthSafetyReadSuspenseQueryKey = ReturnType<
  typeof coreHealthSafetyReadSuspenseQueryKey
>;
export function coreHealthSafetyReadSuspenseQueryOptions(
  id: CoreHealthSafetyReadPathParams["id"],
  options: CoreHealthSafetyRead["client"]["parameters"] = {},
) {
  const queryKey = coreHealthSafetyReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreHealthSafetyRead["data"],
        CoreHealthSafetyRead["error"]
      >({
        method: "get",
        url: `/core/health-safety/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing healthSafety.
 * @link /core/health-safety/:id/
 */
export function useCoreHealthSafetyReadSuspense<
  TData = CoreHealthSafetyRead["response"],
  TQueryKey extends QueryKey = CoreHealthSafetyReadSuspenseQueryKey,
>(
  id: CoreHealthSafetyReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreHealthSafetyRead["response"],
        CoreHealthSafetyRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreHealthSafetyRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreHealthSafetyRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreHealthSafetyReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreHealthSafetyReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreHealthSafetyRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
