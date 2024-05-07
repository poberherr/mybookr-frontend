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
import type { CoreAvailabilitiesListQueryResponse } from "../types/CoreAvailabilitiesList";

type CoreAvailabilitiesListClient = typeof client<
  CoreAvailabilitiesListQueryResponse,
  never,
  never
>;
type CoreAvailabilitiesList = {
  data: CoreAvailabilitiesListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreAvailabilitiesListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreAvailabilitiesListClient>[0]>;
    return: Awaited<ReturnType<CoreAvailabilitiesListClient>>;
  };
};
export const coreAvailabilitiesListQueryKey = () =>
  [{ url: "/core/availabilities/" }] as const;
export type CoreAvailabilitiesListQueryKey = ReturnType<
  typeof coreAvailabilitiesListQueryKey
>;
export function coreAvailabilitiesListQueryOptions(
  options: CoreAvailabilitiesList["client"]["parameters"] = {},
) {
  const queryKey = coreAvailabilitiesListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreAvailabilitiesList["data"],
        CoreAvailabilitiesList["error"]
      >({
        method: "get",
        url: `/core/availabilities/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/availabilities/
 */
export function useCoreAvailabilitiesList<
  TData = CoreAvailabilitiesList["response"],
  TQueryData = CoreAvailabilitiesList["response"],
  TQueryKey extends QueryKey = CoreAvailabilitiesListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreAvailabilitiesList["response"],
        CoreAvailabilitiesList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreAvailabilitiesList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreAvailabilitiesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreAvailabilitiesListQueryKey();
  const query = useQuery({
    ...(coreAvailabilitiesListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreAvailabilitiesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreAvailabilitiesListSuspenseQueryKey = () =>
  [{ url: "/core/availabilities/" }] as const;
export type CoreAvailabilitiesListSuspenseQueryKey = ReturnType<
  typeof coreAvailabilitiesListSuspenseQueryKey
>;
export function coreAvailabilitiesListSuspenseQueryOptions(
  options: CoreAvailabilitiesList["client"]["parameters"] = {},
) {
  const queryKey = coreAvailabilitiesListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreAvailabilitiesList["data"],
        CoreAvailabilitiesList["error"]
      >({
        method: "get",
        url: `/core/availabilities/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/availabilities/
 */
export function useCoreAvailabilitiesListSuspense<
  TData = CoreAvailabilitiesList["response"],
  TQueryKey extends QueryKey = CoreAvailabilitiesListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreAvailabilitiesList["response"],
        CoreAvailabilitiesList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreAvailabilitiesList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreAvailabilitiesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreAvailabilitiesListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreAvailabilitiesListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreAvailabilitiesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
