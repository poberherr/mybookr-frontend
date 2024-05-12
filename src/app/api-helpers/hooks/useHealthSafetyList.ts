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
import type { HealthSafetyListQueryResponse } from "../types/HealthSafetyList";

type HealthSafetyListClient = typeof client<
  HealthSafetyListQueryResponse,
  never,
  never
>;
type HealthSafetyList = {
  data: HealthSafetyListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: HealthSafetyListQueryResponse;
  client: {
    parameters: Partial<Parameters<HealthSafetyListClient>[0]>;
    return: Awaited<ReturnType<HealthSafetyListClient>>;
  };
};
export const healthSafetyListQueryKey = () =>
  [{ url: "/health-safety/" }] as const;
export type HealthSafetyListQueryKey = ReturnType<
  typeof healthSafetyListQueryKey
>;
export function healthSafetyListQueryOptions(
  options: HealthSafetyList["client"]["parameters"] = {},
) {
  const queryKey = healthSafetyListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        HealthSafetyList["data"],
        HealthSafetyList["error"]
      >({
        method: "get",
        url: `/health-safety/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing healthSafety.
 * @link /health-safety/
 */
export function useHealthSafetyList<
  TData = HealthSafetyList["response"],
  TQueryData = HealthSafetyList["response"],
  TQueryKey extends QueryKey = HealthSafetyListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        HealthSafetyList["response"],
        HealthSafetyList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: HealthSafetyList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, HealthSafetyList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? healthSafetyListQueryKey();
  const query = useQuery({
    ...(healthSafetyListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, HealthSafetyList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const healthSafetyListSuspenseQueryKey = () =>
  [{ url: "/health-safety/" }] as const;
export type HealthSafetyListSuspenseQueryKey = ReturnType<
  typeof healthSafetyListSuspenseQueryKey
>;
export function healthSafetyListSuspenseQueryOptions(
  options: HealthSafetyList["client"]["parameters"] = {},
) {
  const queryKey = healthSafetyListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        HealthSafetyList["data"],
        HealthSafetyList["error"]
      >({
        method: "get",
        url: `/health-safety/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing healthSafety.
 * @link /health-safety/
 */
export function useHealthSafetyListSuspense<
  TData = HealthSafetyList["response"],
  TQueryKey extends QueryKey = HealthSafetyListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        HealthSafetyList["response"],
        HealthSafetyList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: HealthSafetyList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, HealthSafetyList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? healthSafetyListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(healthSafetyListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, HealthSafetyList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
