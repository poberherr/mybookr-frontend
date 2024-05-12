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
import type { WishlistsListQueryResponse } from "../types/WishlistsList";

type WishlistsListClient = typeof client<
  WishlistsListQueryResponse,
  never,
  never
>;
type WishlistsList = {
  data: WishlistsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: WishlistsListQueryResponse;
  client: {
    parameters: Partial<Parameters<WishlistsListClient>[0]>;
    return: Awaited<ReturnType<WishlistsListClient>>;
  };
};
export const wishlistsListQueryKey = () => [{ url: "/wishlists/" }] as const;
export type WishlistsListQueryKey = ReturnType<typeof wishlistsListQueryKey>;
export function wishlistsListQueryOptions(
  options: WishlistsList["client"]["parameters"] = {},
) {
  const queryKey = wishlistsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<WishlistsList["data"], WishlistsList["error"]>({
        method: "get",
        url: `/wishlists/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing wishlists.
 * @link /wishlists/
 */
export function useWishlistsList<
  TData = WishlistsList["response"],
  TQueryData = WishlistsList["response"],
  TQueryKey extends QueryKey = WishlistsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        WishlistsList["response"],
        WishlistsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: WishlistsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, WishlistsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? wishlistsListQueryKey();
  const query = useQuery({
    ...(wishlistsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, WishlistsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const wishlistsListSuspenseQueryKey = () =>
  [{ url: "/wishlists/" }] as const;
export type WishlistsListSuspenseQueryKey = ReturnType<
  typeof wishlistsListSuspenseQueryKey
>;
export function wishlistsListSuspenseQueryOptions(
  options: WishlistsList["client"]["parameters"] = {},
) {
  const queryKey = wishlistsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<WishlistsList["data"], WishlistsList["error"]>({
        method: "get",
        url: `/wishlists/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing wishlists.
 * @link /wishlists/
 */
export function useWishlistsListSuspense<
  TData = WishlistsList["response"],
  TQueryKey extends QueryKey = WishlistsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        WishlistsList["response"],
        WishlistsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: WishlistsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, WishlistsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? wishlistsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(wishlistsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, WishlistsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
