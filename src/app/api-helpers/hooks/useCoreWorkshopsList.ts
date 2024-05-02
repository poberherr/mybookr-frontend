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
import type { CoreWorkshopsListQueryResponse } from "../types/CoreWorkshopsList";

type CoreWorkshopsListClient = typeof client<
  CoreWorkshopsListQueryResponse,
  never,
  never
>;
type CoreWorkshopsList = {
  data: CoreWorkshopsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreWorkshopsListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreWorkshopsListClient>[0]>;
    return: Awaited<ReturnType<CoreWorkshopsListClient>>;
  };
};
export const coreWorkshopsListQueryKey = () =>
  [{ url: "/core/workshops/" }] as const;
export type CoreWorkshopsListQueryKey = ReturnType<
  typeof coreWorkshopsListQueryKey
>;
export function coreWorkshopsListQueryOptions(
  options: CoreWorkshopsList["client"]["parameters"] = {},
) {
  const queryKey = coreWorkshopsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreWorkshopsList["data"],
        CoreWorkshopsList["error"]
      >({
        method: "get",
        url: `/core/workshops/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/workshops/
 */
export function useCoreWorkshopsList<
  TData = CoreWorkshopsList["response"],
  TQueryData = CoreWorkshopsList["response"],
  TQueryKey extends QueryKey = CoreWorkshopsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreWorkshopsList["response"],
        CoreWorkshopsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreWorkshopsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreWorkshopsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreWorkshopsListQueryKey();
  const query = useQuery({
    ...(coreWorkshopsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreWorkshopsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreWorkshopsListSuspenseQueryKey = () =>
  [{ url: "/core/workshops/" }] as const;
export type CoreWorkshopsListSuspenseQueryKey = ReturnType<
  typeof coreWorkshopsListSuspenseQueryKey
>;
export function coreWorkshopsListSuspenseQueryOptions(
  options: CoreWorkshopsList["client"]["parameters"] = {},
) {
  const queryKey = coreWorkshopsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreWorkshopsList["data"],
        CoreWorkshopsList["error"]
      >({
        method: "get",
        url: `/core/workshops/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/workshops/
 */
export function useCoreWorkshopsListSuspense<
  TData = CoreWorkshopsList["response"],
  TQueryKey extends QueryKey = CoreWorkshopsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreWorkshopsList["response"],
        CoreWorkshopsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreWorkshopsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreWorkshopsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreWorkshopsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreWorkshopsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreWorkshopsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
