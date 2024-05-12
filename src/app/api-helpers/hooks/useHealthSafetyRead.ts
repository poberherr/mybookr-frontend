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
  HealthSafetyReadPathParams,
  HealthSafetyReadQueryResponse,
} from "../types/HealthSafetyRead";

type HealthSafetyReadClient = typeof client<
  HealthSafetyReadQueryResponse,
  never,
  never
>;
type HealthSafetyRead = {
  data: HealthSafetyReadQueryResponse;
  error: never;
  request: never;
  pathParams: HealthSafetyReadPathParams;
  queryParams: never;
  headerParams: never;
  response: HealthSafetyReadQueryResponse;
  client: {
    parameters: Partial<Parameters<HealthSafetyReadClient>[0]>;
    return: Awaited<ReturnType<HealthSafetyReadClient>>;
  };
};
export const healthSafetyReadQueryKey = (
  id: HealthSafetyReadPathParams["id"],
) => [{ url: "/health-safety/:id/", params: { id: id } }] as const;
export type HealthSafetyReadQueryKey = ReturnType<
  typeof healthSafetyReadQueryKey
>;
export function healthSafetyReadQueryOptions(
  id: HealthSafetyReadPathParams["id"],
  options: HealthSafetyRead["client"]["parameters"] = {},
) {
  const queryKey = healthSafetyReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        HealthSafetyRead["data"],
        HealthSafetyRead["error"]
      >({
        method: "get",
        url: `/health-safety/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing healthSafety.
 * @link /health-safety/:id/
 */
export function useHealthSafetyRead<
  TData = HealthSafetyRead["response"],
  TQueryData = HealthSafetyRead["response"],
  TQueryKey extends QueryKey = HealthSafetyReadQueryKey,
>(
  id: HealthSafetyReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        HealthSafetyRead["response"],
        HealthSafetyRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: HealthSafetyRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, HealthSafetyRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? healthSafetyReadQueryKey(id);
  const query = useQuery({
    ...(healthSafetyReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, HealthSafetyRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const healthSafetyReadSuspenseQueryKey = (
  id: HealthSafetyReadPathParams["id"],
) => [{ url: "/health-safety/:id/", params: { id: id } }] as const;
export type HealthSafetyReadSuspenseQueryKey = ReturnType<
  typeof healthSafetyReadSuspenseQueryKey
>;
export function healthSafetyReadSuspenseQueryOptions(
  id: HealthSafetyReadPathParams["id"],
  options: HealthSafetyRead["client"]["parameters"] = {},
) {
  const queryKey = healthSafetyReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        HealthSafetyRead["data"],
        HealthSafetyRead["error"]
      >({
        method: "get",
        url: `/health-safety/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing healthSafety.
 * @link /health-safety/:id/
 */
export function useHealthSafetyReadSuspense<
  TData = HealthSafetyRead["response"],
  TQueryKey extends QueryKey = HealthSafetyReadSuspenseQueryKey,
>(
  id: HealthSafetyReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        HealthSafetyRead["response"],
        HealthSafetyRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: HealthSafetyRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, HealthSafetyRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? healthSafetyReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(healthSafetyReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, HealthSafetyRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
