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
  ListingsReadPathParams,
  ListingsReadQueryResponse,
} from "../types/ListingsRead";

type ListingsReadClient = typeof client<
  ListingsReadQueryResponse,
  never,
  never
>;
type ListingsRead = {
  data: ListingsReadQueryResponse;
  error: never;
  request: never;
  pathParams: ListingsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: ListingsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<ListingsReadClient>[0]>;
    return: Awaited<ReturnType<ListingsReadClient>>;
  };
};
export const listingsReadQueryKey = (id: ListingsReadPathParams["id"]) =>
  [{ url: "/listings/:id/", params: { id: id } }] as const;
export type ListingsReadQueryKey = ReturnType<typeof listingsReadQueryKey>;
export function listingsReadQueryOptions(
  id: ListingsReadPathParams["id"],
  options: ListingsRead["client"]["parameters"] = {},
) {
  const queryKey = listingsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<ListingsRead["data"], ListingsRead["error"]>({
        method: "get",
        url: `/listings/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /listings/:id/
 */
export function useListingsRead<
  TData = ListingsRead["response"],
  TQueryData = ListingsRead["response"],
  TQueryKey extends QueryKey = ListingsReadQueryKey,
>(
  id: ListingsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        ListingsRead["response"],
        ListingsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: ListingsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, ListingsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? listingsReadQueryKey(id);
  const query = useQuery({
    ...(listingsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, ListingsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const listingsReadSuspenseQueryKey = (
  id: ListingsReadPathParams["id"],
) => [{ url: "/listings/:id/", params: { id: id } }] as const;
export type ListingsReadSuspenseQueryKey = ReturnType<
  typeof listingsReadSuspenseQueryKey
>;
export function listingsReadSuspenseQueryOptions(
  id: ListingsReadPathParams["id"],
  options: ListingsRead["client"]["parameters"] = {},
) {
  const queryKey = listingsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<ListingsRead["data"], ListingsRead["error"]>({
        method: "get",
        url: `/listings/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /listings/:id/
 */
export function useListingsReadSuspense<
  TData = ListingsRead["response"],
  TQueryKey extends QueryKey = ListingsReadSuspenseQueryKey,
>(
  id: ListingsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        ListingsRead["response"],
        ListingsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: ListingsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, ListingsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? listingsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(listingsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, ListingsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
