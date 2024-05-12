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
import type { WorkshopsListQueryResponse } from "../types/WorkshopsList";

type WorkshopsListClient = typeof client<
  WorkshopsListQueryResponse,
  never,
  never
>;
type WorkshopsList = {
  data: WorkshopsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: WorkshopsListQueryResponse;
  client: {
    parameters: Partial<Parameters<WorkshopsListClient>[0]>;
    return: Awaited<ReturnType<WorkshopsListClient>>;
  };
};
export const workshopsListQueryKey = () => [{ url: "/workshops/" }] as const;
export type WorkshopsListQueryKey = ReturnType<typeof workshopsListQueryKey>;
export function workshopsListQueryOptions(
  options: WorkshopsList["client"]["parameters"] = {},
) {
  const queryKey = workshopsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<WorkshopsList["data"], WorkshopsList["error"]>({
        method: "get",
        url: `/workshops/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /workshops/
 */
export function useWorkshopsList<
  TData = WorkshopsList["response"],
  TQueryData = WorkshopsList["response"],
  TQueryKey extends QueryKey = WorkshopsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        WorkshopsList["response"],
        WorkshopsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: WorkshopsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, WorkshopsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? workshopsListQueryKey();
  const query = useQuery({
    ...(workshopsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, WorkshopsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const workshopsListSuspenseQueryKey = () =>
  [{ url: "/workshops/" }] as const;
export type WorkshopsListSuspenseQueryKey = ReturnType<
  typeof workshopsListSuspenseQueryKey
>;
export function workshopsListSuspenseQueryOptions(
  options: WorkshopsList["client"]["parameters"] = {},
) {
  const queryKey = workshopsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<WorkshopsList["data"], WorkshopsList["error"]>({
        method: "get",
        url: `/workshops/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /workshops/
 */
export function useWorkshopsListSuspense<
  TData = WorkshopsList["response"],
  TQueryKey extends QueryKey = WorkshopsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        WorkshopsList["response"],
        WorkshopsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: WorkshopsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, WorkshopsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? workshopsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(workshopsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, WorkshopsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
