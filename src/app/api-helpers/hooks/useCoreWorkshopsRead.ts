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
  CoreWorkshopsReadPathParams,
  CoreWorkshopsReadQueryResponse,
} from "../types/CoreWorkshopsRead";

type CoreWorkshopsReadClient = typeof client<
  CoreWorkshopsReadQueryResponse,
  never,
  never
>;
type CoreWorkshopsRead = {
  data: CoreWorkshopsReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreWorkshopsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreWorkshopsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreWorkshopsReadClient>[0]>;
    return: Awaited<ReturnType<CoreWorkshopsReadClient>>;
  };
};
export const coreWorkshopsReadQueryKey = (
  id: CoreWorkshopsReadPathParams["id"],
) => [{ url: "/core/workshops/:id/", params: { id: id } }] as const;
export type CoreWorkshopsReadQueryKey = ReturnType<
  typeof coreWorkshopsReadQueryKey
>;
export function coreWorkshopsReadQueryOptions(
  id: CoreWorkshopsReadPathParams["id"],
  options: CoreWorkshopsRead["client"]["parameters"] = {},
) {
  const queryKey = coreWorkshopsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreWorkshopsRead["data"],
        CoreWorkshopsRead["error"]
      >({
        method: "get",
        url: `/core/workshops/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/workshops/:id/
 */
export function useCoreWorkshopsRead<
  TData = CoreWorkshopsRead["response"],
  TQueryData = CoreWorkshopsRead["response"],
  TQueryKey extends QueryKey = CoreWorkshopsReadQueryKey,
>(
  id: CoreWorkshopsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreWorkshopsRead["response"],
        CoreWorkshopsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreWorkshopsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreWorkshopsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreWorkshopsReadQueryKey(id);
  const query = useQuery({
    ...(coreWorkshopsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreWorkshopsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreWorkshopsReadSuspenseQueryKey = (
  id: CoreWorkshopsReadPathParams["id"],
) => [{ url: "/core/workshops/:id/", params: { id: id } }] as const;
export type CoreWorkshopsReadSuspenseQueryKey = ReturnType<
  typeof coreWorkshopsReadSuspenseQueryKey
>;
export function coreWorkshopsReadSuspenseQueryOptions(
  id: CoreWorkshopsReadPathParams["id"],
  options: CoreWorkshopsRead["client"]["parameters"] = {},
) {
  const queryKey = coreWorkshopsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreWorkshopsRead["data"],
        CoreWorkshopsRead["error"]
      >({
        method: "get",
        url: `/core/workshops/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/workshops/:id/
 */
export function useCoreWorkshopsReadSuspense<
  TData = CoreWorkshopsRead["response"],
  TQueryKey extends QueryKey = CoreWorkshopsReadSuspenseQueryKey,
>(
  id: CoreWorkshopsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreWorkshopsRead["response"],
        CoreWorkshopsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreWorkshopsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreWorkshopsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreWorkshopsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreWorkshopsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreWorkshopsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
