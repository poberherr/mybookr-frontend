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
  CoreLocationsReadPathParams,
  CoreLocationsReadQueryResponse,
} from "../types/CoreLocationsRead";

type CoreLocationsReadClient = typeof client<
  CoreLocationsReadQueryResponse,
  never,
  never
>;
type CoreLocationsRead = {
  data: CoreLocationsReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreLocationsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreLocationsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreLocationsReadClient>[0]>;
    return: Awaited<ReturnType<CoreLocationsReadClient>>;
  };
};
export const coreLocationsReadQueryKey = (
  id: CoreLocationsReadPathParams["id"],
) => [{ url: "/core/locations/:id/", params: { id: id } }] as const;
export type CoreLocationsReadQueryKey = ReturnType<
  typeof coreLocationsReadQueryKey
>;
export function coreLocationsReadQueryOptions(
  id: CoreLocationsReadPathParams["id"],
  options: CoreLocationsRead["client"]["parameters"] = {},
) {
  const queryKey = coreLocationsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreLocationsRead["data"],
        CoreLocationsRead["error"]
      >({
        method: "get",
        url: `/core/locations/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing location.
 * @link /core/locations/:id/
 */
export function useCoreLocationsRead<
  TData = CoreLocationsRead["response"],
  TQueryData = CoreLocationsRead["response"],
  TQueryKey extends QueryKey = CoreLocationsReadQueryKey,
>(
  id: CoreLocationsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreLocationsRead["response"],
        CoreLocationsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreLocationsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreLocationsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreLocationsReadQueryKey(id);
  const query = useQuery({
    ...(coreLocationsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreLocationsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreLocationsReadSuspenseQueryKey = (
  id: CoreLocationsReadPathParams["id"],
) => [{ url: "/core/locations/:id/", params: { id: id } }] as const;
export type CoreLocationsReadSuspenseQueryKey = ReturnType<
  typeof coreLocationsReadSuspenseQueryKey
>;
export function coreLocationsReadSuspenseQueryOptions(
  id: CoreLocationsReadPathParams["id"],
  options: CoreLocationsRead["client"]["parameters"] = {},
) {
  const queryKey = coreLocationsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreLocationsRead["data"],
        CoreLocationsRead["error"]
      >({
        method: "get",
        url: `/core/locations/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing location.
 * @link /core/locations/:id/
 */
export function useCoreLocationsReadSuspense<
  TData = CoreLocationsRead["response"],
  TQueryKey extends QueryKey = CoreLocationsReadSuspenseQueryKey,
>(
  id: CoreLocationsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreLocationsRead["response"],
        CoreLocationsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreLocationsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreLocationsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreLocationsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreLocationsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreLocationsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
