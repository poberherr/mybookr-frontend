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
  CoreAccessibilityReadPathParams,
  CoreAccessibilityReadQueryResponse,
} from "../types/CoreAccessibilityRead";

type CoreAccessibilityReadClient = typeof client<
  CoreAccessibilityReadQueryResponse,
  never,
  never
>;
type CoreAccessibilityRead = {
  data: CoreAccessibilityReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreAccessibilityReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreAccessibilityReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreAccessibilityReadClient>[0]>;
    return: Awaited<ReturnType<CoreAccessibilityReadClient>>;
  };
};
export const coreAccessibilityReadQueryKey = (
  id: CoreAccessibilityReadPathParams["id"],
) => [{ url: "/core/accessibility/:id/", params: { id: id } }] as const;
export type CoreAccessibilityReadQueryKey = ReturnType<
  typeof coreAccessibilityReadQueryKey
>;
export function coreAccessibilityReadQueryOptions(
  id: CoreAccessibilityReadPathParams["id"],
  options: CoreAccessibilityRead["client"]["parameters"] = {},
) {
  const queryKey = coreAccessibilityReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreAccessibilityRead["data"],
        CoreAccessibilityRead["error"]
      >({
        method: "get",
        url: `/core/accessibility/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing accessibility.
 * @link /core/accessibility/:id/
 */
export function useCoreAccessibilityRead<
  TData = CoreAccessibilityRead["response"],
  TQueryData = CoreAccessibilityRead["response"],
  TQueryKey extends QueryKey = CoreAccessibilityReadQueryKey,
>(
  id: CoreAccessibilityReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreAccessibilityRead["response"],
        CoreAccessibilityRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreAccessibilityRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreAccessibilityRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreAccessibilityReadQueryKey(id);
  const query = useQuery({
    ...(coreAccessibilityReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreAccessibilityRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreAccessibilityReadSuspenseQueryKey = (
  id: CoreAccessibilityReadPathParams["id"],
) => [{ url: "/core/accessibility/:id/", params: { id: id } }] as const;
export type CoreAccessibilityReadSuspenseQueryKey = ReturnType<
  typeof coreAccessibilityReadSuspenseQueryKey
>;
export function coreAccessibilityReadSuspenseQueryOptions(
  id: CoreAccessibilityReadPathParams["id"],
  options: CoreAccessibilityRead["client"]["parameters"] = {},
) {
  const queryKey = coreAccessibilityReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreAccessibilityRead["data"],
        CoreAccessibilityRead["error"]
      >({
        method: "get",
        url: `/core/accessibility/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing accessibility.
 * @link /core/accessibility/:id/
 */
export function useCoreAccessibilityReadSuspense<
  TData = CoreAccessibilityRead["response"],
  TQueryKey extends QueryKey = CoreAccessibilityReadSuspenseQueryKey,
>(
  id: CoreAccessibilityReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreAccessibilityRead["response"],
        CoreAccessibilityRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreAccessibilityRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreAccessibilityRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreAccessibilityReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreAccessibilityReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreAccessibilityRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
