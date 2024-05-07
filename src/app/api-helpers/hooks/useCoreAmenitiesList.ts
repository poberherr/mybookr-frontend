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
import type { CoreAmenitiesListQueryResponse } from "../types/CoreAmenitiesList";

type CoreAmenitiesListClient = typeof client<
  CoreAmenitiesListQueryResponse,
  never,
  never
>;
type CoreAmenitiesList = {
  data: CoreAmenitiesListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreAmenitiesListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreAmenitiesListClient>[0]>;
    return: Awaited<ReturnType<CoreAmenitiesListClient>>;
  };
};
export const coreAmenitiesListQueryKey = () =>
  [{ url: "/core/amenities/" }] as const;
export type CoreAmenitiesListQueryKey = ReturnType<
  typeof coreAmenitiesListQueryKey
>;
export function coreAmenitiesListQueryOptions(
  options: CoreAmenitiesList["client"]["parameters"] = {},
) {
  const queryKey = coreAmenitiesListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreAmenitiesList["data"],
        CoreAmenitiesList["error"]
      >({
        method: "get",
        url: `/core/amenities/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing amenities.
 * @link /core/amenities/
 */
export function useCoreAmenitiesList<
  TData = CoreAmenitiesList["response"],
  TQueryData = CoreAmenitiesList["response"],
  TQueryKey extends QueryKey = CoreAmenitiesListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreAmenitiesList["response"],
        CoreAmenitiesList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreAmenitiesList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreAmenitiesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreAmenitiesListQueryKey();
  const query = useQuery({
    ...(coreAmenitiesListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreAmenitiesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreAmenitiesListSuspenseQueryKey = () =>
  [{ url: "/core/amenities/" }] as const;
export type CoreAmenitiesListSuspenseQueryKey = ReturnType<
  typeof coreAmenitiesListSuspenseQueryKey
>;
export function coreAmenitiesListSuspenseQueryOptions(
  options: CoreAmenitiesList["client"]["parameters"] = {},
) {
  const queryKey = coreAmenitiesListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreAmenitiesList["data"],
        CoreAmenitiesList["error"]
      >({
        method: "get",
        url: `/core/amenities/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing amenities.
 * @link /core/amenities/
 */
export function useCoreAmenitiesListSuspense<
  TData = CoreAmenitiesList["response"],
  TQueryKey extends QueryKey = CoreAmenitiesListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreAmenitiesList["response"],
        CoreAmenitiesList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreAmenitiesList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreAmenitiesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreAmenitiesListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreAmenitiesListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreAmenitiesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
