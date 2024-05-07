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
import type { CoreLocationsListQueryResponse } from "../types/CoreLocationsList";

type CoreLocationsListClient = typeof client<
  CoreLocationsListQueryResponse,
  never,
  never
>;
type CoreLocationsList = {
  data: CoreLocationsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreLocationsListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreLocationsListClient>[0]>;
    return: Awaited<ReturnType<CoreLocationsListClient>>;
  };
};
export const coreLocationsListQueryKey = () =>
  [{ url: "/core/locations/" }] as const;
export type CoreLocationsListQueryKey = ReturnType<
  typeof coreLocationsListQueryKey
>;
export function coreLocationsListQueryOptions(
  options: CoreLocationsList["client"]["parameters"] = {},
) {
  const queryKey = coreLocationsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreLocationsList["data"],
        CoreLocationsList["error"]
      >({
        method: "get",
        url: `/core/locations/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing location.
 * @link /core/locations/
 */
export function useCoreLocationsList<
  TData = CoreLocationsList["response"],
  TQueryData = CoreLocationsList["response"],
  TQueryKey extends QueryKey = CoreLocationsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreLocationsList["response"],
        CoreLocationsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreLocationsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreLocationsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreLocationsListQueryKey();
  const query = useQuery({
    ...(coreLocationsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreLocationsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreLocationsListSuspenseQueryKey = () =>
  [{ url: "/core/locations/" }] as const;
export type CoreLocationsListSuspenseQueryKey = ReturnType<
  typeof coreLocationsListSuspenseQueryKey
>;
export function coreLocationsListSuspenseQueryOptions(
  options: CoreLocationsList["client"]["parameters"] = {},
) {
  const queryKey = coreLocationsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreLocationsList["data"],
        CoreLocationsList["error"]
      >({
        method: "get",
        url: `/core/locations/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing location.
 * @link /core/locations/
 */
export function useCoreLocationsListSuspense<
  TData = CoreLocationsList["response"],
  TQueryKey extends QueryKey = CoreLocationsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreLocationsList["response"],
        CoreLocationsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreLocationsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreLocationsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreLocationsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreLocationsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreLocationsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
