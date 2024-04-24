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
  CoreWishlistsReadPathParams,
  CoreWishlistsReadQueryResponse,
} from "../types/CoreWishlistsRead";

type CoreWishlistsReadClient = typeof client<
  CoreWishlistsReadQueryResponse,
  never,
  never
>;
type CoreWishlistsRead = {
  data: CoreWishlistsReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreWishlistsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreWishlistsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreWishlistsReadClient>[0]>;
    return: Awaited<ReturnType<CoreWishlistsReadClient>>;
  };
};
export const coreWishlistsReadQueryKey = (
  id: CoreWishlistsReadPathParams["id"],
) => [{ url: "/core/wishlists/:id/", params: { id: id } }] as const;
export type CoreWishlistsReadQueryKey = ReturnType<
  typeof coreWishlistsReadQueryKey
>;
export function coreWishlistsReadQueryOptions(
  id: CoreWishlistsReadPathParams["id"],
  options: CoreWishlistsRead["client"]["parameters"] = {},
) {
  const queryKey = coreWishlistsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreWishlistsRead["data"],
        CoreWishlistsRead["error"]
      >({
        method: "get",
        url: `/core/wishlists/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing wishlists.
 * @link /core/wishlists/:id/
 */
export function useCoreWishlistsRead<
  TData = CoreWishlistsRead["response"],
  TQueryData = CoreWishlistsRead["response"],
  TQueryKey extends QueryKey = CoreWishlistsReadQueryKey,
>(
  id: CoreWishlistsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreWishlistsRead["response"],
        CoreWishlistsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreWishlistsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreWishlistsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreWishlistsReadQueryKey(id);
  const query = useQuery({
    ...(coreWishlistsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreWishlistsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreWishlistsReadSuspenseQueryKey = (
  id: CoreWishlistsReadPathParams["id"],
) => [{ url: "/core/wishlists/:id/", params: { id: id } }] as const;
export type CoreWishlistsReadSuspenseQueryKey = ReturnType<
  typeof coreWishlistsReadSuspenseQueryKey
>;
export function coreWishlistsReadSuspenseQueryOptions(
  id: CoreWishlistsReadPathParams["id"],
  options: CoreWishlistsRead["client"]["parameters"] = {},
) {
  const queryKey = coreWishlistsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreWishlistsRead["data"],
        CoreWishlistsRead["error"]
      >({
        method: "get",
        url: `/core/wishlists/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing wishlists.
 * @link /core/wishlists/:id/
 */
export function useCoreWishlistsReadSuspense<
  TData = CoreWishlistsRead["response"],
  TQueryKey extends QueryKey = CoreWishlistsReadSuspenseQueryKey,
>(
  id: CoreWishlistsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreWishlistsRead["response"],
        CoreWishlistsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreWishlistsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreWishlistsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreWishlistsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreWishlistsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreWishlistsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
