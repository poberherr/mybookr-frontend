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

import client from "../../client";
import type { CoreTouristActivitiesListQueryResponse } from "../types/CoreTouristActivitiesList";

type CoreTouristActivitiesListClient = typeof client<
  CoreTouristActivitiesListQueryResponse,
  never,
  never
>;
type CoreTouristActivitiesList = {
  data: CoreTouristActivitiesListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreTouristActivitiesListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreTouristActivitiesListClient>[0]>;
    return: Awaited<ReturnType<CoreTouristActivitiesListClient>>;
  };
};
export const coreTouristActivitiesListQueryKey = () =>
  [{ url: "/core/tourist-activities/" }] as const;
export type CoreTouristActivitiesListQueryKey = ReturnType<
  typeof coreTouristActivitiesListQueryKey
>;
export function coreTouristActivitiesListQueryOptions(
  options: CoreTouristActivitiesList["client"]["parameters"] = {},
) {
  const queryKey = coreTouristActivitiesListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreTouristActivitiesList["data"],
        CoreTouristActivitiesList["error"]
      >({
        method: "get",
        url: `/core/tourist-activities/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/tourist-activities/
 */
export function useCoreTouristActivitiesList<
  TData = CoreTouristActivitiesList["response"],
  TQueryData = CoreTouristActivitiesList["response"],
  TQueryKey extends QueryKey = CoreTouristActivitiesListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreTouristActivitiesList["response"],
        CoreTouristActivitiesList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreTouristActivitiesList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreTouristActivitiesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreTouristActivitiesListQueryKey();
  const query = useQuery({
    ...(coreTouristActivitiesListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreTouristActivitiesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreTouristActivitiesListSuspenseQueryKey = () =>
  [{ url: "/core/tourist-activities/" }] as const;
export type CoreTouristActivitiesListSuspenseQueryKey = ReturnType<
  typeof coreTouristActivitiesListSuspenseQueryKey
>;
export function coreTouristActivitiesListSuspenseQueryOptions(
  options: CoreTouristActivitiesList["client"]["parameters"] = {},
) {
  const queryKey = coreTouristActivitiesListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreTouristActivitiesList["data"],
        CoreTouristActivitiesList["error"]
      >({
        method: "get",
        url: `/core/tourist-activities/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/tourist-activities/
 */
export function useCoreTouristActivitiesListSuspense<
  TData = CoreTouristActivitiesList["response"],
  TQueryKey extends QueryKey = CoreTouristActivitiesListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreTouristActivitiesList["response"],
        CoreTouristActivitiesList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreTouristActivitiesList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreTouristActivitiesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreTouristActivitiesListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreTouristActivitiesListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreTouristActivitiesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
