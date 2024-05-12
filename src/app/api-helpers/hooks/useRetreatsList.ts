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
import type { RetreatsListQueryResponse } from "../types/RetreatsList";

type RetreatsListClient = typeof client<
  RetreatsListQueryResponse,
  never,
  never
>;
type RetreatsList = {
  data: RetreatsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: RetreatsListQueryResponse;
  client: {
    parameters: Partial<Parameters<RetreatsListClient>[0]>;
    return: Awaited<ReturnType<RetreatsListClient>>;
  };
};
export const retreatsListQueryKey = () => [{ url: "/retreats/" }] as const;
export type RetreatsListQueryKey = ReturnType<typeof retreatsListQueryKey>;
export function retreatsListQueryOptions(
  options: RetreatsList["client"]["parameters"] = {},
) {
  const queryKey = retreatsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<RetreatsList["data"], RetreatsList["error"]>({
        method: "get",
        url: `/retreats/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /retreats/
 */
export function useRetreatsList<
  TData = RetreatsList["response"],
  TQueryData = RetreatsList["response"],
  TQueryKey extends QueryKey = RetreatsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        RetreatsList["response"],
        RetreatsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: RetreatsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, RetreatsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? retreatsListQueryKey();
  const query = useQuery({
    ...(retreatsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, RetreatsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const retreatsListSuspenseQueryKey = () =>
  [{ url: "/retreats/" }] as const;
export type RetreatsListSuspenseQueryKey = ReturnType<
  typeof retreatsListSuspenseQueryKey
>;
export function retreatsListSuspenseQueryOptions(
  options: RetreatsList["client"]["parameters"] = {},
) {
  const queryKey = retreatsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<RetreatsList["data"], RetreatsList["error"]>({
        method: "get",
        url: `/retreats/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /retreats/
 */
export function useRetreatsListSuspense<
  TData = RetreatsList["response"],
  TQueryKey extends QueryKey = RetreatsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        RetreatsList["response"],
        RetreatsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: RetreatsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, RetreatsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? retreatsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(retreatsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, RetreatsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
