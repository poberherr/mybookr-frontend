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
import type { CoreRetreatsListQueryResponse } from "../types/CoreRetreatsList";

type CoreRetreatsListClient = typeof client<
  CoreRetreatsListQueryResponse,
  never,
  never
>;
type CoreRetreatsList = {
  data: CoreRetreatsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreRetreatsListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreRetreatsListClient>[0]>;
    return: Awaited<ReturnType<CoreRetreatsListClient>>;
  };
};
export const coreRetreatsListQueryKey = () =>
  [{ url: "/core/retreats/" }] as const;
export type CoreRetreatsListQueryKey = ReturnType<
  typeof coreRetreatsListQueryKey
>;
export function coreRetreatsListQueryOptions(
  options: CoreRetreatsList["client"]["parameters"] = {},
) {
  const queryKey = coreRetreatsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreRetreatsList["data"],
        CoreRetreatsList["error"]
      >({
        method: "get",
        url: `/core/retreats/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/retreats/
 */
export function useCoreRetreatsList<
  TData = CoreRetreatsList["response"],
  TQueryData = CoreRetreatsList["response"],
  TQueryKey extends QueryKey = CoreRetreatsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreRetreatsList["response"],
        CoreRetreatsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreRetreatsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreRetreatsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreRetreatsListQueryKey();
  const query = useQuery({
    ...(coreRetreatsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreRetreatsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreRetreatsListSuspenseQueryKey = () =>
  [{ url: "/core/retreats/" }] as const;
export type CoreRetreatsListSuspenseQueryKey = ReturnType<
  typeof coreRetreatsListSuspenseQueryKey
>;
export function coreRetreatsListSuspenseQueryOptions(
  options: CoreRetreatsList["client"]["parameters"] = {},
) {
  const queryKey = coreRetreatsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreRetreatsList["data"],
        CoreRetreatsList["error"]
      >({
        method: "get",
        url: `/core/retreats/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/retreats/
 */
export function useCoreRetreatsListSuspense<
  TData = CoreRetreatsList["response"],
  TQueryKey extends QueryKey = CoreRetreatsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreRetreatsList["response"],
        CoreRetreatsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreRetreatsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreRetreatsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreRetreatsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreRetreatsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreRetreatsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
