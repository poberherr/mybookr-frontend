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
  GetAllImagesReadPathParams,
  GetAllImagesReadQueryResponse,
} from "../types/GetAllImagesRead";

type GetAllImagesReadClient = typeof client<
  GetAllImagesReadQueryResponse,
  never,
  never
>;
type GetAllImagesRead = {
  data: GetAllImagesReadQueryResponse;
  error: never;
  request: never;
  pathParams: GetAllImagesReadPathParams;
  queryParams: never;
  headerParams: never;
  response: GetAllImagesReadQueryResponse;
  client: {
    parameters: Partial<Parameters<GetAllImagesReadClient>[0]>;
    return: Awaited<ReturnType<GetAllImagesReadClient>>;
  };
};
export const getAllImagesReadQueryKey = (
  listingId: GetAllImagesReadPathParams["listing_id"],
) =>
  [
    { url: "/get_all/images/:listing_id/", params: { listingId: listingId } },
  ] as const;
export type GetAllImagesReadQueryKey = ReturnType<
  typeof getAllImagesReadQueryKey
>;
export function getAllImagesReadQueryOptions(
  listingId: GetAllImagesReadPathParams["listing_id"],
  options: GetAllImagesRead["client"]["parameters"] = {},
) {
  const queryKey = getAllImagesReadQueryKey(listingId);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetAllImagesRead["data"],
        GetAllImagesRead["error"]
      >({
        method: "get",
        url: `/get_all/images/${listingId}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description Retrieve all images.
 * @link /get_all/images/:listing_id/
 */
export function useGetAllImagesRead<
  TData = GetAllImagesRead["response"],
  TQueryData = GetAllImagesRead["response"],
  TQueryKey extends QueryKey = GetAllImagesReadQueryKey,
>(
  listingId: GetAllImagesReadPathParams["listing_id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetAllImagesRead["response"],
        GetAllImagesRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: GetAllImagesRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, GetAllImagesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getAllImagesReadQueryKey(listingId);
  const query = useQuery({
    ...(getAllImagesReadQueryOptions(
      listingId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, GetAllImagesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const getAllImagesReadSuspenseQueryKey = (
  listingId: GetAllImagesReadPathParams["listing_id"],
) =>
  [
    { url: "/get_all/images/:listing_id/", params: { listingId: listingId } },
  ] as const;
export type GetAllImagesReadSuspenseQueryKey = ReturnType<
  typeof getAllImagesReadSuspenseQueryKey
>;
export function getAllImagesReadSuspenseQueryOptions(
  listingId: GetAllImagesReadPathParams["listing_id"],
  options: GetAllImagesRead["client"]["parameters"] = {},
) {
  const queryKey = getAllImagesReadSuspenseQueryKey(listingId);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        GetAllImagesRead["data"],
        GetAllImagesRead["error"]
      >({
        method: "get",
        url: `/get_all/images/${listingId}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description Retrieve all images.
 * @link /get_all/images/:listing_id/
 */
export function useGetAllImagesReadSuspense<
  TData = GetAllImagesRead["response"],
  TQueryKey extends QueryKey = GetAllImagesReadSuspenseQueryKey,
>(
  listingId: GetAllImagesReadPathParams["listing_id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        GetAllImagesRead["response"],
        GetAllImagesRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: GetAllImagesRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, GetAllImagesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getAllImagesReadSuspenseQueryKey(listingId);
  const query = useSuspenseQuery({
    ...(getAllImagesReadSuspenseQueryOptions(
      listingId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, GetAllImagesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
