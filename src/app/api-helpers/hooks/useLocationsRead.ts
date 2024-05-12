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
  LocationsReadPathParams,
  LocationsReadQueryResponse,
} from "../types/LocationsRead";

type LocationsReadClient = typeof client<
  LocationsReadQueryResponse,
  never,
  never
>;
type LocationsRead = {
  data: LocationsReadQueryResponse;
  error: never;
  request: never;
  pathParams: LocationsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: LocationsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<LocationsReadClient>[0]>;
    return: Awaited<ReturnType<LocationsReadClient>>;
  };
};
export const locationsReadQueryKey = (id: LocationsReadPathParams["id"]) =>
  [{ url: "/locations/:id/", params: { id: id } }] as const;
export type LocationsReadQueryKey = ReturnType<typeof locationsReadQueryKey>;
export function locationsReadQueryOptions(
  id: LocationsReadPathParams["id"],
  options: LocationsRead["client"]["parameters"] = {},
) {
  const queryKey = locationsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<LocationsRead["data"], LocationsRead["error"]>({
        method: "get",
        url: `/locations/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing location.
 * @link /locations/:id/
 */
export function useLocationsRead<
  TData = LocationsRead["response"],
  TQueryData = LocationsRead["response"],
  TQueryKey extends QueryKey = LocationsReadQueryKey,
>(
  id: LocationsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        LocationsRead["response"],
        LocationsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: LocationsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, LocationsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? locationsReadQueryKey(id);
  const query = useQuery({
    ...(locationsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, LocationsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const locationsReadSuspenseQueryKey = (
  id: LocationsReadPathParams["id"],
) => [{ url: "/locations/:id/", params: { id: id } }] as const;
export type LocationsReadSuspenseQueryKey = ReturnType<
  typeof locationsReadSuspenseQueryKey
>;
export function locationsReadSuspenseQueryOptions(
  id: LocationsReadPathParams["id"],
  options: LocationsRead["client"]["parameters"] = {},
) {
  const queryKey = locationsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<LocationsRead["data"], LocationsRead["error"]>({
        method: "get",
        url: `/locations/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing location.
 * @link /locations/:id/
 */
export function useLocationsReadSuspense<
  TData = LocationsRead["response"],
  TQueryKey extends QueryKey = LocationsReadSuspenseQueryKey,
>(
  id: LocationsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        LocationsRead["response"],
        LocationsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: LocationsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, LocationsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? locationsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(locationsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, LocationsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
