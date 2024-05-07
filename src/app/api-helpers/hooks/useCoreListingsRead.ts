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
  CoreListingsReadPathParams,
  CoreListingsReadQueryResponse,
} from "../types/CoreListingsRead";

type CoreListingsReadClient = typeof client<
  CoreListingsReadQueryResponse,
  never,
  never
>;
type CoreListingsRead = {
  data: CoreListingsReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreListingsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreListingsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreListingsReadClient>[0]>;
    return: Awaited<ReturnType<CoreListingsReadClient>>;
  };
};
export const coreListingsReadQueryKey = (
  id: CoreListingsReadPathParams["id"],
) => [{ url: "/core/listings/:id/", params: { id: id } }] as const;
export type CoreListingsReadQueryKey = ReturnType<
  typeof coreListingsReadQueryKey
>;
export function coreListingsReadQueryOptions(
  id: CoreListingsReadPathParams["id"],
  options: CoreListingsRead["client"]["parameters"] = {},
) {
  const queryKey = coreListingsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreListingsRead["data"],
        CoreListingsRead["error"]
      >({
        method: "get",
        url: `/core/listings/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/listings/:id/
 */
export function useCoreListingsRead<
  TData = CoreListingsRead["response"],
  TQueryData = CoreListingsRead["response"],
  TQueryKey extends QueryKey = CoreListingsReadQueryKey,
>(
  id: CoreListingsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreListingsRead["response"],
        CoreListingsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreListingsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreListingsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreListingsReadQueryKey(id);
  const query = useQuery({
    ...(coreListingsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreListingsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreListingsReadSuspenseQueryKey = (
  id: CoreListingsReadPathParams["id"],
) => [{ url: "/core/listings/:id/", params: { id: id } }] as const;
export type CoreListingsReadSuspenseQueryKey = ReturnType<
  typeof coreListingsReadSuspenseQueryKey
>;
export function coreListingsReadSuspenseQueryOptions(
  id: CoreListingsReadPathParams["id"],
  options: CoreListingsRead["client"]["parameters"] = {},
) {
  const queryKey = coreListingsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreListingsRead["data"],
        CoreListingsRead["error"]
      >({
        method: "get",
        url: `/core/listings/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/listings/:id/
 */
export function useCoreListingsReadSuspense<
  TData = CoreListingsRead["response"],
  TQueryKey extends QueryKey = CoreListingsReadSuspenseQueryKey,
>(
  id: CoreListingsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreListingsRead["response"],
        CoreListingsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreListingsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreListingsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreListingsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreListingsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreListingsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
