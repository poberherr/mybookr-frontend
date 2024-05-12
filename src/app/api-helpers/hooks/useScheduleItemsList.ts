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
import type { ScheduleItemsListQueryResponse } from "../types/ScheduleItemsList";

type ScheduleItemsListClient = typeof client<
  ScheduleItemsListQueryResponse,
  never,
  never
>;
type ScheduleItemsList = {
  data: ScheduleItemsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: ScheduleItemsListQueryResponse;
  client: {
    parameters: Partial<Parameters<ScheduleItemsListClient>[0]>;
    return: Awaited<ReturnType<ScheduleItemsListClient>>;
  };
};
export const scheduleItemsListQueryKey = () =>
  [{ url: "/schedule-items/" }] as const;
export type ScheduleItemsListQueryKey = ReturnType<
  typeof scheduleItemsListQueryKey
>;
export function scheduleItemsListQueryOptions(
  options: ScheduleItemsList["client"]["parameters"] = {},
) {
  const queryKey = scheduleItemsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        ScheduleItemsList["data"],
        ScheduleItemsList["error"]
      >({
        method: "get",
        url: `/schedule-items/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /schedule-items/
 */
export function useScheduleItemsList<
  TData = ScheduleItemsList["response"],
  TQueryData = ScheduleItemsList["response"],
  TQueryKey extends QueryKey = ScheduleItemsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        ScheduleItemsList["response"],
        ScheduleItemsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: ScheduleItemsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, ScheduleItemsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? scheduleItemsListQueryKey();
  const query = useQuery({
    ...(scheduleItemsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, ScheduleItemsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const scheduleItemsListSuspenseQueryKey = () =>
  [{ url: "/schedule-items/" }] as const;
export type ScheduleItemsListSuspenseQueryKey = ReturnType<
  typeof scheduleItemsListSuspenseQueryKey
>;
export function scheduleItemsListSuspenseQueryOptions(
  options: ScheduleItemsList["client"]["parameters"] = {},
) {
  const queryKey = scheduleItemsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        ScheduleItemsList["data"],
        ScheduleItemsList["error"]
      >({
        method: "get",
        url: `/schedule-items/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /schedule-items/
 */
export function useScheduleItemsListSuspense<
  TData = ScheduleItemsList["response"],
  TQueryKey extends QueryKey = ScheduleItemsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        ScheduleItemsList["response"],
        ScheduleItemsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: ScheduleItemsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, ScheduleItemsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? scheduleItemsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(scheduleItemsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, ScheduleItemsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
