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
import type { CoreBookingsListQueryResponse } from "../types/CoreBookingsList";

type CoreBookingsListClient = typeof client<
  CoreBookingsListQueryResponse,
  never,
  never
>;
type CoreBookingsList = {
  data: CoreBookingsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreBookingsListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreBookingsListClient>[0]>;
    return: Awaited<ReturnType<CoreBookingsListClient>>;
  };
};
export const coreBookingsListQueryKey = () =>
  [{ url: "/core/bookings/" }] as const;
export type CoreBookingsListQueryKey = ReturnType<
  typeof coreBookingsListQueryKey
>;
export function coreBookingsListQueryOptions(
  options: CoreBookingsList["client"]["parameters"] = {},
) {
  const queryKey = coreBookingsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreBookingsList["data"],
        CoreBookingsList["error"]
      >({
        method: "get",
        url: `/core/bookings/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing bookings.
 * @link /core/bookings/
 */
export function useCoreBookingsList<
  TData = CoreBookingsList["response"],
  TQueryData = CoreBookingsList["response"],
  TQueryKey extends QueryKey = CoreBookingsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreBookingsList["response"],
        CoreBookingsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreBookingsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreBookingsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreBookingsListQueryKey();
  const query = useQuery({
    ...(coreBookingsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreBookingsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreBookingsListSuspenseQueryKey = () =>
  [{ url: "/core/bookings/" }] as const;
export type CoreBookingsListSuspenseQueryKey = ReturnType<
  typeof coreBookingsListSuspenseQueryKey
>;
export function coreBookingsListSuspenseQueryOptions(
  options: CoreBookingsList["client"]["parameters"] = {},
) {
  const queryKey = coreBookingsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreBookingsList["data"],
        CoreBookingsList["error"]
      >({
        method: "get",
        url: `/core/bookings/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing bookings.
 * @link /core/bookings/
 */
export function useCoreBookingsListSuspense<
  TData = CoreBookingsList["response"],
  TQueryKey extends QueryKey = CoreBookingsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreBookingsList["response"],
        CoreBookingsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreBookingsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreBookingsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreBookingsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreBookingsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreBookingsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
