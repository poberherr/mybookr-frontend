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
import type { BookingsListQueryResponse } from "../types/BookingsList";

type BookingsListClient = typeof client<
  BookingsListQueryResponse,
  never,
  never
>;
type BookingsList = {
  data: BookingsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: BookingsListQueryResponse;
  client: {
    parameters: Partial<Parameters<BookingsListClient>[0]>;
    return: Awaited<ReturnType<BookingsListClient>>;
  };
};
export const bookingsListQueryKey = () => [{ url: "/bookings/" }] as const;
export type BookingsListQueryKey = ReturnType<typeof bookingsListQueryKey>;
export function bookingsListQueryOptions(
  options: BookingsList["client"]["parameters"] = {},
) {
  const queryKey = bookingsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<BookingsList["data"], BookingsList["error"]>({
        method: "get",
        url: `/bookings/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing bookings.
 * @link /bookings/
 */
export function useBookingsList<
  TData = BookingsList["response"],
  TQueryData = BookingsList["response"],
  TQueryKey extends QueryKey = BookingsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        BookingsList["response"],
        BookingsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: BookingsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, BookingsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? bookingsListQueryKey();
  const query = useQuery({
    ...(bookingsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, BookingsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const bookingsListSuspenseQueryKey = () =>
  [{ url: "/bookings/" }] as const;
export type BookingsListSuspenseQueryKey = ReturnType<
  typeof bookingsListSuspenseQueryKey
>;
export function bookingsListSuspenseQueryOptions(
  options: BookingsList["client"]["parameters"] = {},
) {
  const queryKey = bookingsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<BookingsList["data"], BookingsList["error"]>({
        method: "get",
        url: `/bookings/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing bookings.
 * @link /bookings/
 */
export function useBookingsListSuspense<
  TData = BookingsList["response"],
  TQueryKey extends QueryKey = BookingsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        BookingsList["response"],
        BookingsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: BookingsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, BookingsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? bookingsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(bookingsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, BookingsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
