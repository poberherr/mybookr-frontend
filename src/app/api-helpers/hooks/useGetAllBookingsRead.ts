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
  GetAllBookingsReadPathParams,
  GetAllBookingsReadQueryResponse,
} from "../types/GetAllBookingsRead";

type GetAllBookingsReadClient = typeof client<
  GetAllBookingsReadQueryResponse,
  never,
  never
>;
type GetAllBookingsRead = {
  data: GetAllBookingsReadQueryResponse;
  error: never;
  request: never;
  pathParams: GetAllBookingsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: GetAllBookingsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<GetAllBookingsReadClient>[0]>;
    return: Awaited<ReturnType<GetAllBookingsReadClient>>;
  };
};
export const getAllBookingsReadQueryKey = (
  listingId: GetAllBookingsReadPathParams["listing_id"],
) =>
  [
    { url: "/get_all/bookings/:listing_id/", params: { listingId: listingId } },
  ] as const;
export type GetAllBookingsReadQueryKey = ReturnType<
  typeof getAllBookingsReadQueryKey
>;
export function getAllBookingsReadQueryOptions(
  listingId: GetAllBookingsReadPathParams["listing_id"],
  options: GetAllBookingsRead["client"]["parameters"] = {},
) {
  const queryKey = getAllBookingsReadQueryKey(listingId);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetAllBookingsRead["data"],
        GetAllBookingsRead["error"]
      >({
        method: "get",
        url: `/get_all/bookings/${listingId}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description Retrieve all bookings.
 * @link /get_all/bookings/:listing_id/
 */
export function useGetAllBookingsRead<
  TData = GetAllBookingsRead["response"],
  TQueryData = GetAllBookingsRead["response"],
  TQueryKey extends QueryKey = GetAllBookingsReadQueryKey,
>(
  listingId: GetAllBookingsReadPathParams["listing_id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetAllBookingsRead["response"],
        GetAllBookingsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: GetAllBookingsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, GetAllBookingsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getAllBookingsReadQueryKey(listingId);
  const query = useQuery({
    ...(getAllBookingsReadQueryOptions(
      listingId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetAllBookingsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const getAllBookingsReadSuspenseQueryKey = (
  listingId: GetAllBookingsReadPathParams["listing_id"],
) =>
  [
    { url: "/get_all/bookings/:listing_id/", params: { listingId: listingId } },
  ] as const;
export type GetAllBookingsReadSuspenseQueryKey = ReturnType<
  typeof getAllBookingsReadSuspenseQueryKey
>;
export function getAllBookingsReadSuspenseQueryOptions(
  listingId: GetAllBookingsReadPathParams["listing_id"],
  options: GetAllBookingsRead["client"]["parameters"] = {},
) {
  const queryKey = getAllBookingsReadSuspenseQueryKey(listingId);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetAllBookingsRead["data"],
        GetAllBookingsRead["error"]
      >({
        method: "get",
        url: `/get_all/bookings/${listingId}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description Retrieve all bookings.
 * @link /get_all/bookings/:listing_id/
 */
export function useGetAllBookingsReadSuspense<
  TData = GetAllBookingsRead["response"],
  TQueryKey extends QueryKey = GetAllBookingsReadSuspenseQueryKey,
>(
  listingId: GetAllBookingsReadPathParams["listing_id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetAllBookingsRead["response"],
        GetAllBookingsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: GetAllBookingsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, GetAllBookingsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getAllBookingsReadSuspenseQueryKey(listingId);
  const query = useSuspenseQuery({
    ...(getAllBookingsReadSuspenseQueryOptions(
      listingId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetAllBookingsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
