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
import type { LocationsListQueryResponse } from "../types/LocationsList";

type LocationsListClient = typeof client<
  LocationsListQueryResponse,
  never,
  never
>;
type LocationsList = {
  data: LocationsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: LocationsListQueryResponse;
  client: {
    parameters: Partial<Parameters<LocationsListClient>[0]>;
    return: Awaited<ReturnType<LocationsListClient>>;
  };
};
export const locationsListQueryKey = () => [{ url: "/locations/" }] as const;
export type LocationsListQueryKey = ReturnType<typeof locationsListQueryKey>;
export function locationsListQueryOptions(
  options: LocationsList["client"]["parameters"] = {},
) {
  const queryKey = locationsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<LocationsList["data"], LocationsList["error"]>({
        method: "get",
        url: `/locations/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing location.
 * @link /locations/
 */
export function useLocationsList<
  TData = LocationsList["response"],
  TQueryData = LocationsList["response"],
  TQueryKey extends QueryKey = LocationsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        LocationsList["response"],
        LocationsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: LocationsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, LocationsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? locationsListQueryKey();
  const query = useQuery({
    ...(locationsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, LocationsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const locationsListSuspenseQueryKey = () =>
  [{ url: "/locations/" }] as const;
export type LocationsListSuspenseQueryKey = ReturnType<
  typeof locationsListSuspenseQueryKey
>;
export function locationsListSuspenseQueryOptions(
  options: LocationsList["client"]["parameters"] = {},
) {
  const queryKey = locationsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<LocationsList["data"], LocationsList["error"]>({
        method: "get",
        url: `/locations/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing location.
 * @link /locations/
 */
export function useLocationsListSuspense<
  TData = LocationsList["response"],
  TQueryKey extends QueryKey = LocationsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        LocationsList["response"],
        LocationsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: LocationsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, LocationsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? locationsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(locationsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, LocationsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
