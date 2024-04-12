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

import client from "../../client";
import type { CoreListingsListQueryResponse } from "../types/CoreListingsList";

type CoreListingsListClient = typeof client<
  CoreListingsListQueryResponse,
  never,
  never
>;
type CoreListingsList = {
  data: CoreListingsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreListingsListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreListingsListClient>[0]>;
    return: Awaited<ReturnType<CoreListingsListClient>>;
  };
};
export const coreListingsListQueryKey = () =>
  [{ url: "/core/listings/" }] as const;
export type CoreListingsListQueryKey = ReturnType<
  typeof coreListingsListQueryKey
>;
export function coreListingsListQueryOptions(
  options: CoreListingsList["client"]["parameters"] = {},
) {
  const queryKey = coreListingsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreListingsList["data"],
        CoreListingsList["error"]
      >({
        method: "get",
        url: `/core/listings/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/listings/
 */
export function useCoreListingsList<
  TData = CoreListingsList["response"],
  TQueryData = CoreListingsList["response"],
  TQueryKey extends QueryKey = CoreListingsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreListingsList["response"],
        CoreListingsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreListingsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreListingsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreListingsListQueryKey();
  const query = useQuery({
    ...(coreListingsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreListingsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreListingsListSuspenseQueryKey = () =>
  [{ url: "/core/listings/" }] as const;
export type CoreListingsListSuspenseQueryKey = ReturnType<
  typeof coreListingsListSuspenseQueryKey
>;
export function coreListingsListSuspenseQueryOptions(
  options: CoreListingsList["client"]["parameters"] = {},
) {
  const queryKey = coreListingsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreListingsList["data"],
        CoreListingsList["error"]
      >({
        method: "get",
        url: `/core/listings/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/listings/
 */
export function useCoreListingsListSuspense<
  TData = CoreListingsList["response"],
  TQueryKey extends QueryKey = CoreListingsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreListingsList["response"],
        CoreListingsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreListingsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreListingsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreListingsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreListingsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreListingsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
