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
  ScheduleItemsReadPathParams,
  ScheduleItemsReadQueryResponse,
} from "../types/ScheduleItemsRead";

type ScheduleItemsReadClient = typeof client<
  ScheduleItemsReadQueryResponse,
  never,
  never
>;
type ScheduleItemsRead = {
  data: ScheduleItemsReadQueryResponse;
  error: never;
  request: never;
  pathParams: ScheduleItemsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: ScheduleItemsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<ScheduleItemsReadClient>[0]>;
    return: Awaited<ReturnType<ScheduleItemsReadClient>>;
  };
};
export const scheduleItemsReadQueryKey = (
  id: ScheduleItemsReadPathParams["id"],
) => [{ url: "/schedule-items/:id/", params: { id: id } }] as const;
export type ScheduleItemsReadQueryKey = ReturnType<
  typeof scheduleItemsReadQueryKey
>;
export function scheduleItemsReadQueryOptions(
  id: ScheduleItemsReadPathParams["id"],
  options: ScheduleItemsRead["client"]["parameters"] = {},
) {
  const queryKey = scheduleItemsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        ScheduleItemsRead["data"],
        ScheduleItemsRead["error"]
      >({
        method: "get",
        url: `/schedule-items/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /schedule-items/:id/
 */
export function useScheduleItemsRead<
  TData = ScheduleItemsRead["response"],
  TQueryData = ScheduleItemsRead["response"],
  TQueryKey extends QueryKey = ScheduleItemsReadQueryKey,
>(
  id: ScheduleItemsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        ScheduleItemsRead["response"],
        ScheduleItemsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: ScheduleItemsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, ScheduleItemsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? scheduleItemsReadQueryKey(id);
  const query = useQuery({
    ...(scheduleItemsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, ScheduleItemsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const scheduleItemsReadSuspenseQueryKey = (
  id: ScheduleItemsReadPathParams["id"],
) => [{ url: "/schedule-items/:id/", params: { id: id } }] as const;
export type ScheduleItemsReadSuspenseQueryKey = ReturnType<
  typeof scheduleItemsReadSuspenseQueryKey
>;
export function scheduleItemsReadSuspenseQueryOptions(
  id: ScheduleItemsReadPathParams["id"],
  options: ScheduleItemsRead["client"]["parameters"] = {},
) {
  const queryKey = scheduleItemsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        ScheduleItemsRead["data"],
        ScheduleItemsRead["error"]
      >({
        method: "get",
        url: `/schedule-items/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /schedule-items/:id/
 */
export function useScheduleItemsReadSuspense<
  TData = ScheduleItemsRead["response"],
  TQueryKey extends QueryKey = ScheduleItemsReadSuspenseQueryKey,
>(
  id: ScheduleItemsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        ScheduleItemsRead["response"],
        ScheduleItemsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: ScheduleItemsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, ScheduleItemsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? scheduleItemsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(scheduleItemsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, ScheduleItemsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
