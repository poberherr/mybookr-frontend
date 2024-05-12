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
  ListingsAvailabilitiesListPathParams,
  ListingsAvailabilitiesListQueryResponse,
} from "../types/ListingsAvailabilitiesList";

type ListingsAvailabilitiesListClient = typeof client<
  ListingsAvailabilitiesListQueryResponse,
  never,
  never
>;
type ListingsAvailabilitiesList = {
  data: ListingsAvailabilitiesListQueryResponse;
  error: never;
  request: never;
  pathParams: ListingsAvailabilitiesListPathParams;
  queryParams: never;
  headerParams: never;
  response: ListingsAvailabilitiesListQueryResponse;
  client: {
    parameters: Partial<Parameters<ListingsAvailabilitiesListClient>[0]>;
    return: Awaited<ReturnType<ListingsAvailabilitiesListClient>>;
  };
};
export const listingsAvailabilitiesListQueryKey = (
  listingPk: ListingsAvailabilitiesListPathParams["listing_pk"],
) =>
  [
    {
      url: "/listings/:listing_pk/availabilities/",
      params: { listingPk: listingPk },
    },
  ] as const;
export type ListingsAvailabilitiesListQueryKey = ReturnType<
  typeof listingsAvailabilitiesListQueryKey
>;
export function listingsAvailabilitiesListQueryOptions(
  listingPk: ListingsAvailabilitiesListPathParams["listing_pk"],
  options: ListingsAvailabilitiesList["client"]["parameters"] = {},
) {
  const queryKey = listingsAvailabilitiesListQueryKey(listingPk);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        ListingsAvailabilitiesList["data"],
        ListingsAvailabilitiesList["error"]
      >({
        method: "get",
        url: `/listings/${listingPk}/availabilities/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /listings/:listing_pk/availabilities/
 */
export function useListingsAvailabilitiesList<
  TData = ListingsAvailabilitiesList["response"],
  TQueryData = ListingsAvailabilitiesList["response"],
  TQueryKey extends QueryKey = ListingsAvailabilitiesListQueryKey,
>(
  listingPk: ListingsAvailabilitiesListPathParams["listing_pk"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        ListingsAvailabilitiesList["response"],
        ListingsAvailabilitiesList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: ListingsAvailabilitiesList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, ListingsAvailabilitiesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? listingsAvailabilitiesListQueryKey(listingPk);
  const query = useQuery({
    ...(listingsAvailabilitiesListQueryOptions(
      listingPk,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, ListingsAvailabilitiesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const listingsAvailabilitiesListSuspenseQueryKey = (
  listingPk: ListingsAvailabilitiesListPathParams["listing_pk"],
) =>
  [
    {
      url: "/listings/:listing_pk/availabilities/",
      params: { listingPk: listingPk },
    },
  ] as const;
export type ListingsAvailabilitiesListSuspenseQueryKey = ReturnType<
  typeof listingsAvailabilitiesListSuspenseQueryKey
>;
export function listingsAvailabilitiesListSuspenseQueryOptions(
  listingPk: ListingsAvailabilitiesListPathParams["listing_pk"],
  options: ListingsAvailabilitiesList["client"]["parameters"] = {},
) {
  const queryKey = listingsAvailabilitiesListSuspenseQueryKey(listingPk);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        ListingsAvailabilitiesList["data"],
        ListingsAvailabilitiesList["error"]
      >({
        method: "get",
        url: `/listings/${listingPk}/availabilities/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /listings/:listing_pk/availabilities/
 */
export function useListingsAvailabilitiesListSuspense<
  TData = ListingsAvailabilitiesList["response"],
  TQueryKey extends QueryKey = ListingsAvailabilitiesListSuspenseQueryKey,
>(
  listingPk: ListingsAvailabilitiesListPathParams["listing_pk"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        ListingsAvailabilitiesList["response"],
        ListingsAvailabilitiesList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: ListingsAvailabilitiesList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, ListingsAvailabilitiesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    listingsAvailabilitiesListSuspenseQueryKey(listingPk);
  const query = useSuspenseQuery({
    ...(listingsAvailabilitiesListSuspenseQueryOptions(
      listingPk,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, ListingsAvailabilitiesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
