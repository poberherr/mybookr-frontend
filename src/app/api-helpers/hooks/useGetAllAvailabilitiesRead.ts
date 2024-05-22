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
  GetAllAvailabilitiesReadPathParams,
  GetAllAvailabilitiesReadQueryResponse,
} from "../types/GetAllAvailabilitiesRead";

type GetAllAvailabilitiesReadClient = typeof client<
  GetAllAvailabilitiesReadQueryResponse,
  never,
  never
>;
type GetAllAvailabilitiesRead = {
  data: GetAllAvailabilitiesReadQueryResponse;
  error: never;
  request: never;
  pathParams: GetAllAvailabilitiesReadPathParams;
  queryParams: never;
  headerParams: never;
  response: GetAllAvailabilitiesReadQueryResponse;
  client: {
    parameters: Partial<Parameters<GetAllAvailabilitiesReadClient>[0]>;
    return: Awaited<ReturnType<GetAllAvailabilitiesReadClient>>;
  };
};
export const getAllAvailabilitiesReadQueryKey = (
  listingId: GetAllAvailabilitiesReadPathParams["listing_id"],
) =>
  [
    {
      url: "/get_all/availabilities/:listing_id/",
      params: { listingId: listingId },
    },
  ] as const;
export type GetAllAvailabilitiesReadQueryKey = ReturnType<
  typeof getAllAvailabilitiesReadQueryKey
>;
export function getAllAvailabilitiesReadQueryOptions(
  listingId: GetAllAvailabilitiesReadPathParams["listing_id"],
  options: GetAllAvailabilitiesRead["client"]["parameters"] = {},
) {
  const queryKey = getAllAvailabilitiesReadQueryKey(listingId);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetAllAvailabilitiesRead["data"],
        GetAllAvailabilitiesRead["error"]
      >({
        method: "get",
        url: `/get_all/availabilities/${listingId}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description Retrieve all availabilities.
 * @link /get_all/availabilities/:listing_id/
 */
export function useGetAllAvailabilitiesRead<
  TData = GetAllAvailabilitiesRead["response"],
  TQueryData = GetAllAvailabilitiesRead["response"],
  TQueryKey extends QueryKey = GetAllAvailabilitiesReadQueryKey,
>(
  listingId: GetAllAvailabilitiesReadPathParams["listing_id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetAllAvailabilitiesRead["response"],
        GetAllAvailabilitiesRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: GetAllAvailabilitiesRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, GetAllAvailabilitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getAllAvailabilitiesReadQueryKey(listingId);
  const query = useQuery({
    ...(getAllAvailabilitiesReadQueryOptions(
      listingId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetAllAvailabilitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const getAllAvailabilitiesReadSuspenseQueryKey = (
  listingId: GetAllAvailabilitiesReadPathParams["listing_id"],
) =>
  [
    {
      url: "/get_all/availabilities/:listing_id/",
      params: { listingId: listingId },
    },
  ] as const;
export type GetAllAvailabilitiesReadSuspenseQueryKey = ReturnType<
  typeof getAllAvailabilitiesReadSuspenseQueryKey
>;
export function getAllAvailabilitiesReadSuspenseQueryOptions(
  listingId: GetAllAvailabilitiesReadPathParams["listing_id"],
  options: GetAllAvailabilitiesRead["client"]["parameters"] = {},
) {
  const queryKey = getAllAvailabilitiesReadSuspenseQueryKey(listingId);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetAllAvailabilitiesRead["data"],
        GetAllAvailabilitiesRead["error"]
      >({
        method: "get",
        url: `/get_all/availabilities/${listingId}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description Retrieve all availabilities.
 * @link /get_all/availabilities/:listing_id/
 */
export function useGetAllAvailabilitiesReadSuspense<
  TData = GetAllAvailabilitiesRead["response"],
  TQueryKey extends QueryKey = GetAllAvailabilitiesReadSuspenseQueryKey,
>(
  listingId: GetAllAvailabilitiesReadPathParams["listing_id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetAllAvailabilitiesRead["response"],
        GetAllAvailabilitiesRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: GetAllAvailabilitiesRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, GetAllAvailabilitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    getAllAvailabilitiesReadSuspenseQueryKey(listingId);
  const query = useSuspenseQuery({
    ...(getAllAvailabilitiesReadSuspenseQueryOptions(
      listingId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetAllAvailabilitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
