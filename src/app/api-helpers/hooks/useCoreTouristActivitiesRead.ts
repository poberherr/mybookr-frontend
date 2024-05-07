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
  CoreTouristActivitiesReadPathParams,
  CoreTouristActivitiesReadQueryResponse,
} from "../types/CoreTouristActivitiesRead";

type CoreTouristActivitiesReadClient = typeof client<
  CoreTouristActivitiesReadQueryResponse,
  never,
  never
>;
type CoreTouristActivitiesRead = {
  data: CoreTouristActivitiesReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreTouristActivitiesReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreTouristActivitiesReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreTouristActivitiesReadClient>[0]>;
    return: Awaited<ReturnType<CoreTouristActivitiesReadClient>>;
  };
};
export const coreTouristActivitiesReadQueryKey = (
  id: CoreTouristActivitiesReadPathParams["id"],
) => [{ url: "/core/tourist-activities/:id/", params: { id: id } }] as const;
export type CoreTouristActivitiesReadQueryKey = ReturnType<
  typeof coreTouristActivitiesReadQueryKey
>;
export function coreTouristActivitiesReadQueryOptions(
  id: CoreTouristActivitiesReadPathParams["id"],
  options: CoreTouristActivitiesRead["client"]["parameters"] = {},
) {
  const queryKey = coreTouristActivitiesReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreTouristActivitiesRead["data"],
        CoreTouristActivitiesRead["error"]
      >({
        method: "get",
        url: `/core/tourist-activities/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/tourist-activities/:id/
 */
export function useCoreTouristActivitiesRead<
  TData = CoreTouristActivitiesRead["response"],
  TQueryData = CoreTouristActivitiesRead["response"],
  TQueryKey extends QueryKey = CoreTouristActivitiesReadQueryKey,
>(
  id: CoreTouristActivitiesReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreTouristActivitiesRead["response"],
        CoreTouristActivitiesRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreTouristActivitiesRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreTouristActivitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreTouristActivitiesReadQueryKey(id);
  const query = useQuery({
    ...(coreTouristActivitiesReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreTouristActivitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreTouristActivitiesReadSuspenseQueryKey = (
  id: CoreTouristActivitiesReadPathParams["id"],
) => [{ url: "/core/tourist-activities/:id/", params: { id: id } }] as const;
export type CoreTouristActivitiesReadSuspenseQueryKey = ReturnType<
  typeof coreTouristActivitiesReadSuspenseQueryKey
>;
export function coreTouristActivitiesReadSuspenseQueryOptions(
  id: CoreTouristActivitiesReadPathParams["id"],
  options: CoreTouristActivitiesRead["client"]["parameters"] = {},
) {
  const queryKey = coreTouristActivitiesReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreTouristActivitiesRead["data"],
        CoreTouristActivitiesRead["error"]
      >({
        method: "get",
        url: `/core/tourist-activities/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/tourist-activities/:id/
 */
export function useCoreTouristActivitiesReadSuspense<
  TData = CoreTouristActivitiesRead["response"],
  TQueryKey extends QueryKey = CoreTouristActivitiesReadSuspenseQueryKey,
>(
  id: CoreTouristActivitiesReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreTouristActivitiesRead["response"],
        CoreTouristActivitiesRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreTouristActivitiesRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreTouristActivitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreTouristActivitiesReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreTouristActivitiesReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreTouristActivitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
