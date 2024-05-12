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
import type { TouristActivitiesListQueryResponse } from "../types/TouristActivitiesList";

type TouristActivitiesListClient = typeof client<
  TouristActivitiesListQueryResponse,
  never,
  never
>;
type TouristActivitiesList = {
  data: TouristActivitiesListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: TouristActivitiesListQueryResponse;
  client: {
    parameters: Partial<Parameters<TouristActivitiesListClient>[0]>;
    return: Awaited<ReturnType<TouristActivitiesListClient>>;
  };
};
export const touristActivitiesListQueryKey = () =>
  [{ url: "/tourist-activities/" }] as const;
export type TouristActivitiesListQueryKey = ReturnType<
  typeof touristActivitiesListQueryKey
>;
export function touristActivitiesListQueryOptions(
  options: TouristActivitiesList["client"]["parameters"] = {},
) {
  const queryKey = touristActivitiesListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        TouristActivitiesList["data"],
        TouristActivitiesList["error"]
      >({
        method: "get",
        url: `/tourist-activities/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /tourist-activities/
 */
export function useTouristActivitiesList<
  TData = TouristActivitiesList["response"],
  TQueryData = TouristActivitiesList["response"],
  TQueryKey extends QueryKey = TouristActivitiesListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        TouristActivitiesList["response"],
        TouristActivitiesList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: TouristActivitiesList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, TouristActivitiesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? touristActivitiesListQueryKey();
  const query = useQuery({
    ...(touristActivitiesListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, TouristActivitiesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const touristActivitiesListSuspenseQueryKey = () =>
  [{ url: "/tourist-activities/" }] as const;
export type TouristActivitiesListSuspenseQueryKey = ReturnType<
  typeof touristActivitiesListSuspenseQueryKey
>;
export function touristActivitiesListSuspenseQueryOptions(
  options: TouristActivitiesList["client"]["parameters"] = {},
) {
  const queryKey = touristActivitiesListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        TouristActivitiesList["data"],
        TouristActivitiesList["error"]
      >({
        method: "get",
        url: `/tourist-activities/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /tourist-activities/
 */
export function useTouristActivitiesListSuspense<
  TData = TouristActivitiesList["response"],
  TQueryKey extends QueryKey = TouristActivitiesListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        TouristActivitiesList["response"],
        TouristActivitiesList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: TouristActivitiesList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, TouristActivitiesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? touristActivitiesListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(touristActivitiesListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, TouristActivitiesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
