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
  CoreScheduleItemsReadPathParams,
  CoreScheduleItemsReadQueryResponse,
} from "../types/CoreScheduleItemsRead";

type CoreScheduleItemsReadClient = typeof client<
  CoreScheduleItemsReadQueryResponse,
  never,
  never
>;
type CoreScheduleItemsRead = {
  data: CoreScheduleItemsReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreScheduleItemsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreScheduleItemsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreScheduleItemsReadClient>[0]>;
    return: Awaited<ReturnType<CoreScheduleItemsReadClient>>;
  };
};
export const coreScheduleItemsReadQueryKey = (
  id: CoreScheduleItemsReadPathParams["id"],
) => [{ url: "/core/schedule-items/:id/", params: { id: id } }] as const;
export type CoreScheduleItemsReadQueryKey = ReturnType<
  typeof coreScheduleItemsReadQueryKey
>;
export function coreScheduleItemsReadQueryOptions(
  id: CoreScheduleItemsReadPathParams["id"],
  options: CoreScheduleItemsRead["client"]["parameters"] = {},
) {
  const queryKey = coreScheduleItemsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreScheduleItemsRead["data"],
        CoreScheduleItemsRead["error"]
      >({
        method: "get",
        url: `/core/schedule-items/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/schedule-items/:id/
 */
export function useCoreScheduleItemsRead<
  TData = CoreScheduleItemsRead["response"],
  TQueryData = CoreScheduleItemsRead["response"],
  TQueryKey extends QueryKey = CoreScheduleItemsReadQueryKey,
>(
  id: CoreScheduleItemsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreScheduleItemsRead["response"],
        CoreScheduleItemsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreScheduleItemsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreScheduleItemsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreScheduleItemsReadQueryKey(id);
  const query = useQuery({
    ...(coreScheduleItemsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreScheduleItemsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreScheduleItemsReadSuspenseQueryKey = (
  id: CoreScheduleItemsReadPathParams["id"],
) => [{ url: "/core/schedule-items/:id/", params: { id: id } }] as const;
export type CoreScheduleItemsReadSuspenseQueryKey = ReturnType<
  typeof coreScheduleItemsReadSuspenseQueryKey
>;
export function coreScheduleItemsReadSuspenseQueryOptions(
  id: CoreScheduleItemsReadPathParams["id"],
  options: CoreScheduleItemsRead["client"]["parameters"] = {},
) {
  const queryKey = coreScheduleItemsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreScheduleItemsRead["data"],
        CoreScheduleItemsRead["error"]
      >({
        method: "get",
        url: `/core/schedule-items/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/schedule-items/:id/
 */
export function useCoreScheduleItemsReadSuspense<
  TData = CoreScheduleItemsRead["response"],
  TQueryKey extends QueryKey = CoreScheduleItemsReadSuspenseQueryKey,
>(
  id: CoreScheduleItemsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreScheduleItemsRead["response"],
        CoreScheduleItemsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreScheduleItemsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreScheduleItemsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreScheduleItemsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreScheduleItemsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreScheduleItemsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
