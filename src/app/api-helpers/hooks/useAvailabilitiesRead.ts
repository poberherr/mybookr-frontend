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
  AvailabilitiesReadPathParams,
  AvailabilitiesReadQueryResponse,
} from "../types/AvailabilitiesRead";

type AvailabilitiesReadClient = typeof client<
  AvailabilitiesReadQueryResponse,
  never,
  never
>;
type AvailabilitiesRead = {
  data: AvailabilitiesReadQueryResponse;
  error: never;
  request: never;
  pathParams: AvailabilitiesReadPathParams;
  queryParams: never;
  headerParams: never;
  response: AvailabilitiesReadQueryResponse;
  client: {
    parameters: Partial<Parameters<AvailabilitiesReadClient>[0]>;
    return: Awaited<ReturnType<AvailabilitiesReadClient>>;
  };
};
export const availabilitiesReadQueryKey = (
  id: AvailabilitiesReadPathParams["id"],
) => [{ url: "/availabilities/:id/", params: { id: id } }] as const;
export type AvailabilitiesReadQueryKey = ReturnType<
  typeof availabilitiesReadQueryKey
>;
export function availabilitiesReadQueryOptions(
  id: AvailabilitiesReadPathParams["id"],
  options: AvailabilitiesRead["client"]["parameters"] = {},
) {
  const queryKey = availabilitiesReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AvailabilitiesRead["data"],
        AvailabilitiesRead["error"]
      >({
        method: "get",
        url: `/availabilities/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /availabilities/:id/
 */
export function useAvailabilitiesRead<
  TData = AvailabilitiesRead["response"],
  TQueryData = AvailabilitiesRead["response"],
  TQueryKey extends QueryKey = AvailabilitiesReadQueryKey,
>(
  id: AvailabilitiesReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        AvailabilitiesRead["response"],
        AvailabilitiesRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: AvailabilitiesRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, AvailabilitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? availabilitiesReadQueryKey(id);
  const query = useQuery({
    ...(availabilitiesReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, AvailabilitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const availabilitiesReadSuspenseQueryKey = (
  id: AvailabilitiesReadPathParams["id"],
) => [{ url: "/availabilities/:id/", params: { id: id } }] as const;
export type AvailabilitiesReadSuspenseQueryKey = ReturnType<
  typeof availabilitiesReadSuspenseQueryKey
>;
export function availabilitiesReadSuspenseQueryOptions(
  id: AvailabilitiesReadPathParams["id"],
  options: AvailabilitiesRead["client"]["parameters"] = {},
) {
  const queryKey = availabilitiesReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AvailabilitiesRead["data"],
        AvailabilitiesRead["error"]
      >({
        method: "get",
        url: `/availabilities/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /availabilities/:id/
 */
export function useAvailabilitiesReadSuspense<
  TData = AvailabilitiesRead["response"],
  TQueryKey extends QueryKey = AvailabilitiesReadSuspenseQueryKey,
>(
  id: AvailabilitiesReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        AvailabilitiesRead["response"],
        AvailabilitiesRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: AvailabilitiesRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, AvailabilitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? availabilitiesReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(availabilitiesReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, AvailabilitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
