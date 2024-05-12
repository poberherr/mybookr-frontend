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
  RetreatsReadPathParams,
  RetreatsReadQueryResponse,
} from "../types/RetreatsRead";

type RetreatsReadClient = typeof client<
  RetreatsReadQueryResponse,
  never,
  never
>;
type RetreatsRead = {
  data: RetreatsReadQueryResponse;
  error: never;
  request: never;
  pathParams: RetreatsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: RetreatsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<RetreatsReadClient>[0]>;
    return: Awaited<ReturnType<RetreatsReadClient>>;
  };
};
export const retreatsReadQueryKey = (id: RetreatsReadPathParams["id"]) =>
  [{ url: "/retreats/:id/", params: { id: id } }] as const;
export type RetreatsReadQueryKey = ReturnType<typeof retreatsReadQueryKey>;
export function retreatsReadQueryOptions(
  id: RetreatsReadPathParams["id"],
  options: RetreatsRead["client"]["parameters"] = {},
) {
  const queryKey = retreatsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<RetreatsRead["data"], RetreatsRead["error"]>({
        method: "get",
        url: `/retreats/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /retreats/:id/
 */
export function useRetreatsRead<
  TData = RetreatsRead["response"],
  TQueryData = RetreatsRead["response"],
  TQueryKey extends QueryKey = RetreatsReadQueryKey,
>(
  id: RetreatsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        RetreatsRead["response"],
        RetreatsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: RetreatsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, RetreatsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? retreatsReadQueryKey(id);
  const query = useQuery({
    ...(retreatsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, RetreatsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const retreatsReadSuspenseQueryKey = (
  id: RetreatsReadPathParams["id"],
) => [{ url: "/retreats/:id/", params: { id: id } }] as const;
export type RetreatsReadSuspenseQueryKey = ReturnType<
  typeof retreatsReadSuspenseQueryKey
>;
export function retreatsReadSuspenseQueryOptions(
  id: RetreatsReadPathParams["id"],
  options: RetreatsRead["client"]["parameters"] = {},
) {
  const queryKey = retreatsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<RetreatsRead["data"], RetreatsRead["error"]>({
        method: "get",
        url: `/retreats/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /retreats/:id/
 */
export function useRetreatsReadSuspense<
  TData = RetreatsRead["response"],
  TQueryKey extends QueryKey = RetreatsReadSuspenseQueryKey,
>(
  id: RetreatsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        RetreatsRead["response"],
        RetreatsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: RetreatsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, RetreatsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? retreatsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(retreatsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, RetreatsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
