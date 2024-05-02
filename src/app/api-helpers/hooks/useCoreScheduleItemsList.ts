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
import type { CoreScheduleItemsListQueryResponse } from "../types/CoreScheduleItemsList";

type CoreScheduleItemsListClient = typeof client<
  CoreScheduleItemsListQueryResponse,
  never,
  never
>;
type CoreScheduleItemsList = {
  data: CoreScheduleItemsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreScheduleItemsListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreScheduleItemsListClient>[0]>;
    return: Awaited<ReturnType<CoreScheduleItemsListClient>>;
  };
};
export const coreScheduleItemsListQueryKey = () =>
  [{ url: "/core/schedule-items/" }] as const;
export type CoreScheduleItemsListQueryKey = ReturnType<
  typeof coreScheduleItemsListQueryKey
>;
export function coreScheduleItemsListQueryOptions(
  options: CoreScheduleItemsList["client"]["parameters"] = {},
) {
  const queryKey = coreScheduleItemsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreScheduleItemsList["data"],
        CoreScheduleItemsList["error"]
      >({
        method: "get",
        url: `/core/schedule-items/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/schedule-items/
 */
export function useCoreScheduleItemsList<
  TData = CoreScheduleItemsList["response"],
  TQueryData = CoreScheduleItemsList["response"],
  TQueryKey extends QueryKey = CoreScheduleItemsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreScheduleItemsList["response"],
        CoreScheduleItemsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreScheduleItemsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreScheduleItemsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreScheduleItemsListQueryKey();
  const query = useQuery({
    ...(coreScheduleItemsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreScheduleItemsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreScheduleItemsListSuspenseQueryKey = () =>
  [{ url: "/core/schedule-items/" }] as const;
export type CoreScheduleItemsListSuspenseQueryKey = ReturnType<
  typeof coreScheduleItemsListSuspenseQueryKey
>;
export function coreScheduleItemsListSuspenseQueryOptions(
  options: CoreScheduleItemsList["client"]["parameters"] = {},
) {
  const queryKey = coreScheduleItemsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreScheduleItemsList["data"],
        CoreScheduleItemsList["error"]
      >({
        method: "get",
        url: `/core/schedule-items/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/schedule-items/
 */
export function useCoreScheduleItemsListSuspense<
  TData = CoreScheduleItemsList["response"],
  TQueryKey extends QueryKey = CoreScheduleItemsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreScheduleItemsList["response"],
        CoreScheduleItemsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreScheduleItemsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreScheduleItemsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreScheduleItemsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreScheduleItemsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreScheduleItemsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
