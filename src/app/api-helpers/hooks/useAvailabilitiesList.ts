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
import type { AvailabilitiesListQueryResponse } from "../types/AvailabilitiesList";

type AvailabilitiesListClient = typeof client<
  AvailabilitiesListQueryResponse,
  never,
  never
>;
type AvailabilitiesList = {
  data: AvailabilitiesListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AvailabilitiesListQueryResponse;
  client: {
    parameters: Partial<Parameters<AvailabilitiesListClient>[0]>;
    return: Awaited<ReturnType<AvailabilitiesListClient>>;
  };
};
export const availabilitiesListQueryKey = () =>
  [{ url: "/availabilities/" }] as const;
export type AvailabilitiesListQueryKey = ReturnType<
  typeof availabilitiesListQueryKey
>;
export function availabilitiesListQueryOptions(
  options: AvailabilitiesList["client"]["parameters"] = {},
) {
  const queryKey = availabilitiesListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AvailabilitiesList["data"],
        AvailabilitiesList["error"]
      >({
        method: "get",
        url: `/availabilities/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /availabilities/
 */
export function useAvailabilitiesList<
  TData = AvailabilitiesList["response"],
  TQueryData = AvailabilitiesList["response"],
  TQueryKey extends QueryKey = AvailabilitiesListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        AvailabilitiesList["response"],
        AvailabilitiesList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: AvailabilitiesList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, AvailabilitiesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? availabilitiesListQueryKey();
  const query = useQuery({
    ...(availabilitiesListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, AvailabilitiesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const availabilitiesListSuspenseQueryKey = () =>
  [{ url: "/availabilities/" }] as const;
export type AvailabilitiesListSuspenseQueryKey = ReturnType<
  typeof availabilitiesListSuspenseQueryKey
>;
export function availabilitiesListSuspenseQueryOptions(
  options: AvailabilitiesList["client"]["parameters"] = {},
) {
  const queryKey = availabilitiesListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AvailabilitiesList["data"],
        AvailabilitiesList["error"]
      >({
        method: "get",
        url: `/availabilities/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /availabilities/
 */
export function useAvailabilitiesListSuspense<
  TData = AvailabilitiesList["response"],
  TQueryKey extends QueryKey = AvailabilitiesListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        AvailabilitiesList["response"],
        AvailabilitiesList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: AvailabilitiesList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, AvailabilitiesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? availabilitiesListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(availabilitiesListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, AvailabilitiesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
