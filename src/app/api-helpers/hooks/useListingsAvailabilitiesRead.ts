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
  ListingsAvailabilitiesReadPathParams,
  ListingsAvailabilitiesReadQueryResponse,
} from "../types/ListingsAvailabilitiesRead";

type ListingsAvailabilitiesReadClient = typeof client<
  ListingsAvailabilitiesReadQueryResponse,
  never,
  never
>;
type ListingsAvailabilitiesRead = {
  data: ListingsAvailabilitiesReadQueryResponse;
  error: never;
  request: never;
  pathParams: ListingsAvailabilitiesReadPathParams;
  queryParams: never;
  headerParams: never;
  response: ListingsAvailabilitiesReadQueryResponse;
  client: {
    parameters: Partial<Parameters<ListingsAvailabilitiesReadClient>[0]>;
    return: Awaited<ReturnType<ListingsAvailabilitiesReadClient>>;
  };
};
export const listingsAvailabilitiesReadQueryKey = (
  listingPk: ListingsAvailabilitiesReadPathParams["listing_pk"],
  id: ListingsAvailabilitiesReadPathParams["id"],
) =>
  [
    {
      url: "/listings/:listing_pk/availabilities/:id/",
      params: { listingPk: listingPk, id: id },
    },
  ] as const;
export type ListingsAvailabilitiesReadQueryKey = ReturnType<
  typeof listingsAvailabilitiesReadQueryKey
>;
export function listingsAvailabilitiesReadQueryOptions(
  listingPk: ListingsAvailabilitiesReadPathParams["listing_pk"],
  id: ListingsAvailabilitiesReadPathParams["id"],
  options: ListingsAvailabilitiesRead["client"]["parameters"] = {},
) {
  const queryKey = listingsAvailabilitiesReadQueryKey(listingPk, id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        ListingsAvailabilitiesRead["data"],
        ListingsAvailabilitiesRead["error"]
      >({
        method: "get",
        url: `/listings/${listingPk}/availabilities/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /listings/:listing_pk/availabilities/:id/
 */
export function useListingsAvailabilitiesRead<
  TData = ListingsAvailabilitiesRead["response"],
  TQueryData = ListingsAvailabilitiesRead["response"],
  TQueryKey extends QueryKey = ListingsAvailabilitiesReadQueryKey,
>(
  listingPk: ListingsAvailabilitiesReadPathParams["listing_pk"],
  id: ListingsAvailabilitiesReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        ListingsAvailabilitiesRead["response"],
        ListingsAvailabilitiesRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: ListingsAvailabilitiesRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, ListingsAvailabilitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? listingsAvailabilitiesReadQueryKey(listingPk, id);
  const query = useQuery({
    ...(listingsAvailabilitiesReadQueryOptions(
      listingPk,
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, ListingsAvailabilitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const listingsAvailabilitiesReadSuspenseQueryKey = (
  listingPk: ListingsAvailabilitiesReadPathParams["listing_pk"],
  id: ListingsAvailabilitiesReadPathParams["id"],
) =>
  [
    {
      url: "/listings/:listing_pk/availabilities/:id/",
      params: { listingPk: listingPk, id: id },
    },
  ] as const;
export type ListingsAvailabilitiesReadSuspenseQueryKey = ReturnType<
  typeof listingsAvailabilitiesReadSuspenseQueryKey
>;
export function listingsAvailabilitiesReadSuspenseQueryOptions(
  listingPk: ListingsAvailabilitiesReadPathParams["listing_pk"],
  id: ListingsAvailabilitiesReadPathParams["id"],
  options: ListingsAvailabilitiesRead["client"]["parameters"] = {},
) {
  const queryKey = listingsAvailabilitiesReadSuspenseQueryKey(listingPk, id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        ListingsAvailabilitiesRead["data"],
        ListingsAvailabilitiesRead["error"]
      >({
        method: "get",
        url: `/listings/${listingPk}/availabilities/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /listings/:listing_pk/availabilities/:id/
 */
export function useListingsAvailabilitiesReadSuspense<
  TData = ListingsAvailabilitiesRead["response"],
  TQueryKey extends QueryKey = ListingsAvailabilitiesReadSuspenseQueryKey,
>(
  listingPk: ListingsAvailabilitiesReadPathParams["listing_pk"],
  id: ListingsAvailabilitiesReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        ListingsAvailabilitiesRead["response"],
        ListingsAvailabilitiesRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: ListingsAvailabilitiesRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, ListingsAvailabilitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    listingsAvailabilitiesReadSuspenseQueryKey(listingPk, id);
  const query = useSuspenseQuery({
    ...(listingsAvailabilitiesReadSuspenseQueryOptions(
      listingPk,
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, ListingsAvailabilitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
