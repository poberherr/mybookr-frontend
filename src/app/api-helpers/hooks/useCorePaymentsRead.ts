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
import type {
  CorePaymentsReadPathParams,
  CorePaymentsReadQueryResponse,
} from "../types/CorePaymentsRead";

type CorePaymentsReadClient = typeof client<
  CorePaymentsReadQueryResponse,
  never,
  never
>;
type CorePaymentsRead = {
  data: CorePaymentsReadQueryResponse;
  error: never;
  request: never;
  pathParams: CorePaymentsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CorePaymentsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CorePaymentsReadClient>[0]>;
    return: Awaited<ReturnType<CorePaymentsReadClient>>;
  };
};
export const corePaymentsReadQueryKey = (
  id: CorePaymentsReadPathParams["id"],
) => [{ url: "/core/payments/:id/", params: { id: id } }] as const;
export type CorePaymentsReadQueryKey = ReturnType<
  typeof corePaymentsReadQueryKey
>;
export function corePaymentsReadQueryOptions(
  id: CorePaymentsReadPathParams["id"],
  options: CorePaymentsRead["client"]["parameters"] = {},
) {
  const queryKey = corePaymentsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CorePaymentsRead["data"],
        CorePaymentsRead["error"]
      >({
        method: "get",
        url: `/core/payments/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing payments.
 * @link /core/payments/:id/
 */
export function useCorePaymentsRead<
  TData = CorePaymentsRead["response"],
  TQueryData = CorePaymentsRead["response"],
  TQueryKey extends QueryKey = CorePaymentsReadQueryKey,
>(
  id: CorePaymentsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CorePaymentsRead["response"],
        CorePaymentsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CorePaymentsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CorePaymentsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? corePaymentsReadQueryKey(id);
  const query = useQuery({
    ...(corePaymentsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CorePaymentsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const corePaymentsReadSuspenseQueryKey = (
  id: CorePaymentsReadPathParams["id"],
) => [{ url: "/core/payments/:id/", params: { id: id } }] as const;
export type CorePaymentsReadSuspenseQueryKey = ReturnType<
  typeof corePaymentsReadSuspenseQueryKey
>;
export function corePaymentsReadSuspenseQueryOptions(
  id: CorePaymentsReadPathParams["id"],
  options: CorePaymentsRead["client"]["parameters"] = {},
) {
  const queryKey = corePaymentsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CorePaymentsRead["data"],
        CorePaymentsRead["error"]
      >({
        method: "get",
        url: `/core/payments/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing payments.
 * @link /core/payments/:id/
 */
export function useCorePaymentsReadSuspense<
  TData = CorePaymentsRead["response"],
  TQueryKey extends QueryKey = CorePaymentsReadSuspenseQueryKey,
>(
  id: CorePaymentsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CorePaymentsRead["response"],
        CorePaymentsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CorePaymentsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CorePaymentsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? corePaymentsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(corePaymentsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CorePaymentsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
