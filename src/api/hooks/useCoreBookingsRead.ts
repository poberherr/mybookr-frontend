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
  CoreBookingsReadPathParams,
  CoreBookingsReadQueryResponse,
} from "../types/CoreBookingsRead";

type CoreBookingsReadClient = typeof client<
  CoreBookingsReadQueryResponse,
  never,
  never
>;
type CoreBookingsRead = {
  data: CoreBookingsReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreBookingsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreBookingsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreBookingsReadClient>[0]>;
    return: Awaited<ReturnType<CoreBookingsReadClient>>;
  };
};
export const coreBookingsReadQueryKey = (
  id: CoreBookingsReadPathParams["id"],
) => [{ url: "/core/bookings/:id/", params: { id: id } }] as const;
export type CoreBookingsReadQueryKey = ReturnType<
  typeof coreBookingsReadQueryKey
>;
export function coreBookingsReadQueryOptions(
  id: CoreBookingsReadPathParams["id"],
  options: CoreBookingsRead["client"]["parameters"] = {},
) {
  const queryKey = coreBookingsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreBookingsRead["data"],
        CoreBookingsRead["error"]
      >({
        method: "get",
        url: `/core/bookings/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing bookings.
 * @link /core/bookings/:id/
 */
export function useCoreBookingsRead<
  TData = CoreBookingsRead["response"],
  TQueryData = CoreBookingsRead["response"],
  TQueryKey extends QueryKey = CoreBookingsReadQueryKey,
>(
  id: CoreBookingsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreBookingsRead["response"],
        CoreBookingsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreBookingsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreBookingsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreBookingsReadQueryKey(id);
  const query = useQuery({
    ...(coreBookingsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreBookingsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreBookingsReadSuspenseQueryKey = (
  id: CoreBookingsReadPathParams["id"],
) => [{ url: "/core/bookings/:id/", params: { id: id } }] as const;
export type CoreBookingsReadSuspenseQueryKey = ReturnType<
  typeof coreBookingsReadSuspenseQueryKey
>;
export function coreBookingsReadSuspenseQueryOptions(
  id: CoreBookingsReadPathParams["id"],
  options: CoreBookingsRead["client"]["parameters"] = {},
) {
  const queryKey = coreBookingsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreBookingsRead["data"],
        CoreBookingsRead["error"]
      >({
        method: "get",
        url: `/core/bookings/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing bookings.
 * @link /core/bookings/:id/
 */
export function useCoreBookingsReadSuspense<
  TData = CoreBookingsRead["response"],
  TQueryKey extends QueryKey = CoreBookingsReadSuspenseQueryKey,
>(
  id: CoreBookingsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreBookingsRead["response"],
        CoreBookingsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreBookingsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreBookingsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreBookingsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreBookingsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreBookingsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
