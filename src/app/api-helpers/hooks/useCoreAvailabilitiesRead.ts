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
  CoreAvailabilitiesReadPathParams,
  CoreAvailabilitiesReadQueryResponse,
} from "../types/CoreAvailabilitiesRead";

type CoreAvailabilitiesReadClient = typeof client<
  CoreAvailabilitiesReadQueryResponse,
  never,
  never
>;
type CoreAvailabilitiesRead = {
  data: CoreAvailabilitiesReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreAvailabilitiesReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreAvailabilitiesReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreAvailabilitiesReadClient>[0]>;
    return: Awaited<ReturnType<CoreAvailabilitiesReadClient>>;
  };
};
export const coreAvailabilitiesReadQueryKey = (
  id: CoreAvailabilitiesReadPathParams["id"],
) => [{ url: "/core/availabilities/:id/", params: { id: id } }] as const;
export type CoreAvailabilitiesReadQueryKey = ReturnType<
  typeof coreAvailabilitiesReadQueryKey
>;
export function coreAvailabilitiesReadQueryOptions(
  id: CoreAvailabilitiesReadPathParams["id"],
  options: CoreAvailabilitiesRead["client"]["parameters"] = {},
) {
  const queryKey = coreAvailabilitiesReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreAvailabilitiesRead["data"],
        CoreAvailabilitiesRead["error"]
      >({
        method: "get",
        url: `/core/availabilities/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/availabilities/:id/
 */
export function useCoreAvailabilitiesRead<
  TData = CoreAvailabilitiesRead["response"],
  TQueryData = CoreAvailabilitiesRead["response"],
  TQueryKey extends QueryKey = CoreAvailabilitiesReadQueryKey,
>(
  id: CoreAvailabilitiesReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreAvailabilitiesRead["response"],
        CoreAvailabilitiesRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreAvailabilitiesRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreAvailabilitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreAvailabilitiesReadQueryKey(id);
  const query = useQuery({
    ...(coreAvailabilitiesReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreAvailabilitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreAvailabilitiesReadSuspenseQueryKey = (
  id: CoreAvailabilitiesReadPathParams["id"],
) => [{ url: "/core/availabilities/:id/", params: { id: id } }] as const;
export type CoreAvailabilitiesReadSuspenseQueryKey = ReturnType<
  typeof coreAvailabilitiesReadSuspenseQueryKey
>;
export function coreAvailabilitiesReadSuspenseQueryOptions(
  id: CoreAvailabilitiesReadPathParams["id"],
  options: CoreAvailabilitiesRead["client"]["parameters"] = {},
) {
  const queryKey = coreAvailabilitiesReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreAvailabilitiesRead["data"],
        CoreAvailabilitiesRead["error"]
      >({
        method: "get",
        url: `/core/availabilities/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/availabilities/:id/
 */
export function useCoreAvailabilitiesReadSuspense<
  TData = CoreAvailabilitiesRead["response"],
  TQueryKey extends QueryKey = CoreAvailabilitiesReadSuspenseQueryKey,
>(
  id: CoreAvailabilitiesReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreAvailabilitiesRead["response"],
        CoreAvailabilitiesRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreAvailabilitiesRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreAvailabilitiesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreAvailabilitiesReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreAvailabilitiesReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreAvailabilitiesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
