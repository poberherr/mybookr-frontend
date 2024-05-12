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
  TouristActivitiesReadPathParams,
  TouristActivitiesReadQueryResponse,
} from "../types/TouristActivitiesRead";

type TouristActivitiesReadClient = typeof client<
  TouristActivitiesReadQueryResponse,
  never,
  never
>;
type TouristActivitiesRead = {
  data: TouristActivitiesReadQueryResponse;
  error: never;
  request: never;
  pathParams: TouristActivitiesReadPathParams;
  queryParams: never;
  headerParams: never;
  response: TouristActivitiesReadQueryResponse;
  client: {
    parameters: Partial<Parameters<TouristActivitiesReadClient>[0]>;
    return: Awaited<ReturnType<TouristActivitiesReadClient>>;
  };
};
export const touristActivitiesReadQueryKey = (
  id: TouristActivitiesReadPathParams["id"],
) => [{ url: "/tourist-activities/:id/", params: { id: id } }] as const;
export type TouristActivitiesReadQueryKey = ReturnType<
  typeof touristActivitiesReadQueryKey
>;
export function touristActivitiesReadQueryOptions(
  id: TouristActivitiesReadPathParams["id"],
  options: TouristActivitiesRead["client"]["parameters"] = {},
) {
  const queryKey = touristActivitiesReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        TouristActivitiesRead["data"],
        TouristActivitiesRead["error"]
      >({
        method: "get",
        url: `/tourist-activities/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /tourist-activities/:id/
 */
export function useTouristActivitiesRead<
  TData = TouristActivitiesRead["response"],
  TQueryData = TouristActivitiesRead["response"],
  TQueryKey extends QueryKey = TouristActivitiesReadQueryKey,
>(
  id: TouristActivitiesReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        TouristActivitiesRead["response"],
        TouristActivitiesRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: TouristActivitiesRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, TouristActivitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? touristActivitiesReadQueryKey(id);
  const query = useQuery({
    ...(touristActivitiesReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, TouristActivitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const touristActivitiesReadSuspenseQueryKey = (
  id: TouristActivitiesReadPathParams["id"],
) => [{ url: "/tourist-activities/:id/", params: { id: id } }] as const;
export type TouristActivitiesReadSuspenseQueryKey = ReturnType<
  typeof touristActivitiesReadSuspenseQueryKey
>;
export function touristActivitiesReadSuspenseQueryOptions(
  id: TouristActivitiesReadPathParams["id"],
  options: TouristActivitiesRead["client"]["parameters"] = {},
) {
  const queryKey = touristActivitiesReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        TouristActivitiesRead["data"],
        TouristActivitiesRead["error"]
      >({
        method: "get",
        url: `/tourist-activities/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /tourist-activities/:id/
 */
export function useTouristActivitiesReadSuspense<
  TData = TouristActivitiesRead["response"],
  TQueryKey extends QueryKey = TouristActivitiesReadSuspenseQueryKey,
>(
  id: TouristActivitiesReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        TouristActivitiesRead["response"],
        TouristActivitiesRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: TouristActivitiesRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, TouristActivitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? touristActivitiesReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(touristActivitiesReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, TouristActivitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
