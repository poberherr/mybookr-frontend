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
import type { ListingsListQueryResponse } from "../types/ListingsList";

type ListingsListClient = typeof client<
  ListingsListQueryResponse,
  never,
  never
>;
type ListingsList = {
  data: ListingsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: ListingsListQueryResponse;
  client: {
    parameters: Partial<Parameters<ListingsListClient>[0]>;
    return: Awaited<ReturnType<ListingsListClient>>;
  };
};
export const listingsListQueryKey = () => [{ url: "/listings/" }] as const;
export type ListingsListQueryKey = ReturnType<typeof listingsListQueryKey>;
export function listingsListQueryOptions(
  options: ListingsList["client"]["parameters"] = {},
) {
  const queryKey = listingsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<ListingsList["data"], ListingsList["error"]>({
        method: "get",
        url: `/listings/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /listings/
 */
export function useListingsList<
  TData = ListingsList["response"],
  TQueryData = ListingsList["response"],
  TQueryKey extends QueryKey = ListingsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        ListingsList["response"],
        ListingsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: ListingsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, ListingsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? listingsListQueryKey();
  const query = useQuery({
    ...(listingsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, ListingsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const listingsListSuspenseQueryKey = () =>
  [{ url: "/listings/" }] as const;
export type ListingsListSuspenseQueryKey = ReturnType<
  typeof listingsListSuspenseQueryKey
>;
export function listingsListSuspenseQueryOptions(
  options: ListingsList["client"]["parameters"] = {},
) {
  const queryKey = listingsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<ListingsList["data"], ListingsList["error"]>({
        method: "get",
        url: `/listings/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /listings/
 */
export function useListingsListSuspense<
  TData = ListingsList["response"],
  TQueryKey extends QueryKey = ListingsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        ListingsList["response"],
        ListingsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: ListingsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, ListingsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? listingsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(listingsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, ListingsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
