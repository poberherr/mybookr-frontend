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
import type { CoreHealthSafetyListQueryResponse } from "../types/CoreHealthSafetyList";

type CoreHealthSafetyListClient = typeof client<
  CoreHealthSafetyListQueryResponse,
  never,
  never
>;
type CoreHealthSafetyList = {
  data: CoreHealthSafetyListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreHealthSafetyListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreHealthSafetyListClient>[0]>;
    return: Awaited<ReturnType<CoreHealthSafetyListClient>>;
  };
};
export const coreHealthSafetyListQueryKey = () =>
  [{ url: "/core/health-safety/" }] as const;
export type CoreHealthSafetyListQueryKey = ReturnType<
  typeof coreHealthSafetyListQueryKey
>;
export function coreHealthSafetyListQueryOptions(
  options: CoreHealthSafetyList["client"]["parameters"] = {},
) {
  const queryKey = coreHealthSafetyListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreHealthSafetyList["data"],
        CoreHealthSafetyList["error"]
      >({
        method: "get",
        url: `/core/health-safety/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing healthSafety.
 * @link /core/health-safety/
 */
export function useCoreHealthSafetyList<
  TData = CoreHealthSafetyList["response"],
  TQueryData = CoreHealthSafetyList["response"],
  TQueryKey extends QueryKey = CoreHealthSafetyListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreHealthSafetyList["response"],
        CoreHealthSafetyList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreHealthSafetyList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreHealthSafetyList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreHealthSafetyListQueryKey();
  const query = useQuery({
    ...(coreHealthSafetyListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreHealthSafetyList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreHealthSafetyListSuspenseQueryKey = () =>
  [{ url: "/core/health-safety/" }] as const;
export type CoreHealthSafetyListSuspenseQueryKey = ReturnType<
  typeof coreHealthSafetyListSuspenseQueryKey
>;
export function coreHealthSafetyListSuspenseQueryOptions(
  options: CoreHealthSafetyList["client"]["parameters"] = {},
) {
  const queryKey = coreHealthSafetyListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreHealthSafetyList["data"],
        CoreHealthSafetyList["error"]
      >({
        method: "get",
        url: `/core/health-safety/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing healthSafety.
 * @link /core/health-safety/
 */
export function useCoreHealthSafetyListSuspense<
  TData = CoreHealthSafetyList["response"],
  TQueryKey extends QueryKey = CoreHealthSafetyListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreHealthSafetyList["response"],
        CoreHealthSafetyList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreHealthSafetyList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreHealthSafetyList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreHealthSafetyListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreHealthSafetyListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreHealthSafetyList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
