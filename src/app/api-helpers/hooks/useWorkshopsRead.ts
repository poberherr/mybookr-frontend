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
  WorkshopsReadPathParams,
  WorkshopsReadQueryResponse,
} from "../types/WorkshopsRead";

type WorkshopsReadClient = typeof client<
  WorkshopsReadQueryResponse,
  never,
  never
>;
type WorkshopsRead = {
  data: WorkshopsReadQueryResponse;
  error: never;
  request: never;
  pathParams: WorkshopsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: WorkshopsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<WorkshopsReadClient>[0]>;
    return: Awaited<ReturnType<WorkshopsReadClient>>;
  };
};
export const workshopsReadQueryKey = (id: WorkshopsReadPathParams["id"]) =>
  [{ url: "/workshops/:id/", params: { id: id } }] as const;
export type WorkshopsReadQueryKey = ReturnType<typeof workshopsReadQueryKey>;
export function workshopsReadQueryOptions(
  id: WorkshopsReadPathParams["id"],
  options: WorkshopsRead["client"]["parameters"] = {},
) {
  const queryKey = workshopsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<WorkshopsRead["data"], WorkshopsRead["error"]>({
        method: "get",
        url: `/workshops/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /workshops/:id/
 */
export function useWorkshopsRead<
  TData = WorkshopsRead["response"],
  TQueryData = WorkshopsRead["response"],
  TQueryKey extends QueryKey = WorkshopsReadQueryKey,
>(
  id: WorkshopsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        WorkshopsRead["response"],
        WorkshopsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: WorkshopsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, WorkshopsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? workshopsReadQueryKey(id);
  const query = useQuery({
    ...(workshopsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, WorkshopsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const workshopsReadSuspenseQueryKey = (
  id: WorkshopsReadPathParams["id"],
) => [{ url: "/workshops/:id/", params: { id: id } }] as const;
export type WorkshopsReadSuspenseQueryKey = ReturnType<
  typeof workshopsReadSuspenseQueryKey
>;
export function workshopsReadSuspenseQueryOptions(
  id: WorkshopsReadPathParams["id"],
  options: WorkshopsRead["client"]["parameters"] = {},
) {
  const queryKey = workshopsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<WorkshopsRead["data"], WorkshopsRead["error"]>({
        method: "get",
        url: `/workshops/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /workshops/:id/
 */
export function useWorkshopsReadSuspense<
  TData = WorkshopsRead["response"],
  TQueryKey extends QueryKey = WorkshopsReadSuspenseQueryKey,
>(
  id: WorkshopsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        WorkshopsRead["response"],
        WorkshopsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: WorkshopsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, WorkshopsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? workshopsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(workshopsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, WorkshopsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
