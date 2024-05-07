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
  CoreAmenitiesReadPathParams,
  CoreAmenitiesReadQueryResponse,
} from "../types/CoreAmenitiesRead";

type CoreAmenitiesReadClient = typeof client<
  CoreAmenitiesReadQueryResponse,
  never,
  never
>;
type CoreAmenitiesRead = {
  data: CoreAmenitiesReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreAmenitiesReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreAmenitiesReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreAmenitiesReadClient>[0]>;
    return: Awaited<ReturnType<CoreAmenitiesReadClient>>;
  };
};
export const coreAmenitiesReadQueryKey = (
  id: CoreAmenitiesReadPathParams["id"],
) => [{ url: "/core/amenities/:id/", params: { id: id } }] as const;
export type CoreAmenitiesReadQueryKey = ReturnType<
  typeof coreAmenitiesReadQueryKey
>;
export function coreAmenitiesReadQueryOptions(
  id: CoreAmenitiesReadPathParams["id"],
  options: CoreAmenitiesRead["client"]["parameters"] = {},
) {
  const queryKey = coreAmenitiesReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreAmenitiesRead["data"],
        CoreAmenitiesRead["error"]
      >({
        method: "get",
        url: `/core/amenities/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing amenities.
 * @link /core/amenities/:id/
 */
export function useCoreAmenitiesRead<
  TData = CoreAmenitiesRead["response"],
  TQueryData = CoreAmenitiesRead["response"],
  TQueryKey extends QueryKey = CoreAmenitiesReadQueryKey,
>(
  id: CoreAmenitiesReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreAmenitiesRead["response"],
        CoreAmenitiesRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreAmenitiesRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreAmenitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreAmenitiesReadQueryKey(id);
  const query = useQuery({
    ...(coreAmenitiesReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreAmenitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreAmenitiesReadSuspenseQueryKey = (
  id: CoreAmenitiesReadPathParams["id"],
) => [{ url: "/core/amenities/:id/", params: { id: id } }] as const;
export type CoreAmenitiesReadSuspenseQueryKey = ReturnType<
  typeof coreAmenitiesReadSuspenseQueryKey
>;
export function coreAmenitiesReadSuspenseQueryOptions(
  id: CoreAmenitiesReadPathParams["id"],
  options: CoreAmenitiesRead["client"]["parameters"] = {},
) {
  const queryKey = coreAmenitiesReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreAmenitiesRead["data"],
        CoreAmenitiesRead["error"]
      >({
        method: "get",
        url: `/core/amenities/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing amenities.
 * @link /core/amenities/:id/
 */
export function useCoreAmenitiesReadSuspense<
  TData = CoreAmenitiesRead["response"],
  TQueryKey extends QueryKey = CoreAmenitiesReadSuspenseQueryKey,
>(
  id: CoreAmenitiesReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreAmenitiesRead["response"],
        CoreAmenitiesRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreAmenitiesRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreAmenitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreAmenitiesReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreAmenitiesReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreAmenitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
