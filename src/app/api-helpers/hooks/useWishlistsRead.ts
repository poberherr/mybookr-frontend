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
  WishlistsReadPathParams,
  WishlistsReadQueryResponse,
} from "../types/WishlistsRead";

type WishlistsReadClient = typeof client<
  WishlistsReadQueryResponse,
  never,
  never
>;
type WishlistsRead = {
  data: WishlistsReadQueryResponse;
  error: never;
  request: never;
  pathParams: WishlistsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: WishlistsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<WishlistsReadClient>[0]>;
    return: Awaited<ReturnType<WishlistsReadClient>>;
  };
};
export const wishlistsReadQueryKey = (id: WishlistsReadPathParams["id"]) =>
  [{ url: "/wishlists/:id/", params: { id: id } }] as const;
export type WishlistsReadQueryKey = ReturnType<typeof wishlistsReadQueryKey>;
export function wishlistsReadQueryOptions(
  id: WishlistsReadPathParams["id"],
  options: WishlistsRead["client"]["parameters"] = {},
) {
  const queryKey = wishlistsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<WishlistsRead["data"], WishlistsRead["error"]>({
        method: "get",
        url: `/wishlists/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing wishlists.
 * @link /wishlists/:id/
 */
export function useWishlistsRead<
  TData = WishlistsRead["response"],
  TQueryData = WishlistsRead["response"],
  TQueryKey extends QueryKey = WishlistsReadQueryKey,
>(
  id: WishlistsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        WishlistsRead["response"],
        WishlistsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: WishlistsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, WishlistsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? wishlistsReadQueryKey(id);
  const query = useQuery({
    ...(wishlistsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, WishlistsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const wishlistsReadSuspenseQueryKey = (
  id: WishlistsReadPathParams["id"],
) => [{ url: "/wishlists/:id/", params: { id: id } }] as const;
export type WishlistsReadSuspenseQueryKey = ReturnType<
  typeof wishlistsReadSuspenseQueryKey
>;
export function wishlistsReadSuspenseQueryOptions(
  id: WishlistsReadPathParams["id"],
  options: WishlistsRead["client"]["parameters"] = {},
) {
  const queryKey = wishlistsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<WishlistsRead["data"], WishlistsRead["error"]>({
        method: "get",
        url: `/wishlists/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing wishlists.
 * @link /wishlists/:id/
 */
export function useWishlistsReadSuspense<
  TData = WishlistsRead["response"],
  TQueryKey extends QueryKey = WishlistsReadSuspenseQueryKey,
>(
  id: WishlistsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        WishlistsRead["response"],
        WishlistsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: WishlistsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, WishlistsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? wishlistsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(wishlistsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, WishlistsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
