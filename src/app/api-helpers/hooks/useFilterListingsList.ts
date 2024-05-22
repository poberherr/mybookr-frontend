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
  FilterListingsListQueryParams,
  FilterListingsListQueryResponse,
} from "../types/FilterListingsList";

type FilterListingsListClient = typeof client<
  FilterListingsListQueryResponse,
  never,
  never
>;
type FilterListingsList = {
  data: FilterListingsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: FilterListingsListQueryParams;
  headerParams: never;
  response: FilterListingsListQueryResponse;
  client: {
    parameters: Partial<Parameters<FilterListingsListClient>[0]>;
    return: Awaited<ReturnType<FilterListingsListClient>>;
  };
};
export const filterListingsListQueryKey = (
  params?: FilterListingsList["queryParams"],
) => [{ url: "/filter-listings/" }, ...(params ? [params] : [])] as const;
export type FilterListingsListQueryKey = ReturnType<
  typeof filterListingsListQueryKey
>;
export function filterListingsListQueryOptions(
  params?: FilterListingsList["queryParams"],
  options: FilterListingsList["client"]["parameters"] = {},
) {
  const queryKey = filterListingsListQueryKey(params);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        FilterListingsList["data"],
        FilterListingsList["error"]
      >({
        method: "get",
        url: `/filter-listings/`,
        params,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /filter-listings/
 */
export function useFilterListingsList<
  TData = FilterListingsList["response"],
  TQueryData = FilterListingsList["response"],
  TQueryKey extends QueryKey = FilterListingsListQueryKey,
>(
  params?: FilterListingsList["queryParams"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        FilterListingsList["response"],
        FilterListingsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: FilterListingsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, FilterListingsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? filterListingsListQueryKey(params);
  const query = useQuery({
    ...(filterListingsListQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, FilterListingsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const filterListingsListSuspenseQueryKey = (
  params?: FilterListingsList["queryParams"],
) => [{ url: "/filter-listings/" }, ...(params ? [params] : [])] as const;
export type FilterListingsListSuspenseQueryKey = ReturnType<
  typeof filterListingsListSuspenseQueryKey
>;
export function filterListingsListSuspenseQueryOptions(
  params?: FilterListingsList["queryParams"],
  options: FilterListingsList["client"]["parameters"] = {},
) {
  const queryKey = filterListingsListSuspenseQueryKey(params);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        FilterListingsList["data"],
        FilterListingsList["error"]
      >({
        method: "get",
        url: `/filter-listings/`,
        params,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /filter-listings/
 */
export function useFilterListingsListSuspense<
  TData = FilterListingsList["response"],
  TQueryKey extends QueryKey = FilterListingsListSuspenseQueryKey,
>(
  params?: FilterListingsList["queryParams"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        FilterListingsList["response"],
        FilterListingsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: FilterListingsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, FilterListingsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? filterListingsListSuspenseQueryKey(params);
  const query = useSuspenseQuery({
    ...(filterListingsListSuspenseQueryOptions(
      params,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, FilterListingsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
