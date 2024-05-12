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
  BookingsReadPathParams,
  BookingsReadQueryResponse,
} from "../types/BookingsRead";

type BookingsReadClient = typeof client<
  BookingsReadQueryResponse,
  never,
  never
>;
type BookingsRead = {
  data: BookingsReadQueryResponse;
  error: never;
  request: never;
  pathParams: BookingsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: BookingsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<BookingsReadClient>[0]>;
    return: Awaited<ReturnType<BookingsReadClient>>;
  };
};
export const bookingsReadQueryKey = (id: BookingsReadPathParams["id"]) =>
  [{ url: "/bookings/:id/", params: { id: id } }] as const;
export type BookingsReadQueryKey = ReturnType<typeof bookingsReadQueryKey>;
export function bookingsReadQueryOptions(
  id: BookingsReadPathParams["id"],
  options: BookingsRead["client"]["parameters"] = {},
) {
  const queryKey = bookingsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<BookingsRead["data"], BookingsRead["error"]>({
        method: "get",
        url: `/bookings/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing bookings.
 * @link /bookings/:id/
 */
export function useBookingsRead<
  TData = BookingsRead["response"],
  TQueryData = BookingsRead["response"],
  TQueryKey extends QueryKey = BookingsReadQueryKey,
>(
  id: BookingsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        BookingsRead["response"],
        BookingsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: BookingsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, BookingsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? bookingsReadQueryKey(id);
  const query = useQuery({
    ...(bookingsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, BookingsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const bookingsReadSuspenseQueryKey = (
  id: BookingsReadPathParams["id"],
) => [{ url: "/bookings/:id/", params: { id: id } }] as const;
export type BookingsReadSuspenseQueryKey = ReturnType<
  typeof bookingsReadSuspenseQueryKey
>;
export function bookingsReadSuspenseQueryOptions(
  id: BookingsReadPathParams["id"],
  options: BookingsRead["client"]["parameters"] = {},
) {
  const queryKey = bookingsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<BookingsRead["data"], BookingsRead["error"]>({
        method: "get",
        url: `/bookings/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing bookings.
 * @link /bookings/:id/
 */
export function useBookingsReadSuspense<
  TData = BookingsRead["response"],
  TQueryKey extends QueryKey = BookingsReadSuspenseQueryKey,
>(
  id: BookingsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        BookingsRead["response"],
        BookingsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: BookingsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, BookingsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? bookingsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(bookingsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, BookingsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
