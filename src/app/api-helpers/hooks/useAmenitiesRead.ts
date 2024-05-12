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
  AmenitiesReadPathParams,
  AmenitiesReadQueryResponse,
} from "../types/AmenitiesRead";

type AmenitiesReadClient = typeof client<
  AmenitiesReadQueryResponse,
  never,
  never
>;
type AmenitiesRead = {
  data: AmenitiesReadQueryResponse;
  error: never;
  request: never;
  pathParams: AmenitiesReadPathParams;
  queryParams: never;
  headerParams: never;
  response: AmenitiesReadQueryResponse;
  client: {
    parameters: Partial<Parameters<AmenitiesReadClient>[0]>;
    return: Awaited<ReturnType<AmenitiesReadClient>>;
  };
};
export const amenitiesReadQueryKey = (id: AmenitiesReadPathParams["id"]) =>
  [{ url: "/amenities/:id/", params: { id: id } }] as const;
export type AmenitiesReadQueryKey = ReturnType<typeof amenitiesReadQueryKey>;
export function amenitiesReadQueryOptions(
  id: AmenitiesReadPathParams["id"],
  options: AmenitiesRead["client"]["parameters"] = {},
) {
  const queryKey = amenitiesReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<AmenitiesRead["data"], AmenitiesRead["error"]>({
        method: "get",
        url: `/amenities/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing amenities.
 * @link /amenities/:id/
 */
export function useAmenitiesRead<
  TData = AmenitiesRead["response"],
  TQueryData = AmenitiesRead["response"],
  TQueryKey extends QueryKey = AmenitiesReadQueryKey,
>(
  id: AmenitiesReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        AmenitiesRead["response"],
        AmenitiesRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: AmenitiesRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, AmenitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? amenitiesReadQueryKey(id);
  const query = useQuery({
    ...(amenitiesReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, AmenitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const amenitiesReadSuspenseQueryKey = (
  id: AmenitiesReadPathParams["id"],
) => [{ url: "/amenities/:id/", params: { id: id } }] as const;
export type AmenitiesReadSuspenseQueryKey = ReturnType<
  typeof amenitiesReadSuspenseQueryKey
>;
export function amenitiesReadSuspenseQueryOptions(
  id: AmenitiesReadPathParams["id"],
  options: AmenitiesRead["client"]["parameters"] = {},
) {
  const queryKey = amenitiesReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<AmenitiesRead["data"], AmenitiesRead["error"]>({
        method: "get",
        url: `/amenities/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing amenities.
 * @link /amenities/:id/
 */
export function useAmenitiesReadSuspense<
  TData = AmenitiesRead["response"],
  TQueryKey extends QueryKey = AmenitiesReadSuspenseQueryKey,
>(
  id: AmenitiesReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        AmenitiesRead["response"],
        AmenitiesRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: AmenitiesRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, AmenitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? amenitiesReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(amenitiesReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, AmenitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
