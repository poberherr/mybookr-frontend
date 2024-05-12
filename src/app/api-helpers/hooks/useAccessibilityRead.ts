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
  AccessibilityReadPathParams,
  AccessibilityReadQueryResponse,
} from "../types/AccessibilityRead";

type AccessibilityReadClient = typeof client<
  AccessibilityReadQueryResponse,
  never,
  never
>;
type AccessibilityRead = {
  data: AccessibilityReadQueryResponse;
  error: never;
  request: never;
  pathParams: AccessibilityReadPathParams;
  queryParams: never;
  headerParams: never;
  response: AccessibilityReadQueryResponse;
  client: {
    parameters: Partial<Parameters<AccessibilityReadClient>[0]>;
    return: Awaited<ReturnType<AccessibilityReadClient>>;
  };
};
export const accessibilityReadQueryKey = (
  id: AccessibilityReadPathParams["id"],
) => [{ url: "/accessibility/:id/", params: { id: id } }] as const;
export type AccessibilityReadQueryKey = ReturnType<
  typeof accessibilityReadQueryKey
>;
export function accessibilityReadQueryOptions(
  id: AccessibilityReadPathParams["id"],
  options: AccessibilityRead["client"]["parameters"] = {},
) {
  const queryKey = accessibilityReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AccessibilityRead["data"],
        AccessibilityRead["error"]
      >({
        method: "get",
        url: `/accessibility/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing accessibility.
 * @link /accessibility/:id/
 */
export function useAccessibilityRead<
  TData = AccessibilityRead["response"],
  TQueryData = AccessibilityRead["response"],
  TQueryKey extends QueryKey = AccessibilityReadQueryKey,
>(
  id: AccessibilityReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        AccessibilityRead["response"],
        AccessibilityRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: AccessibilityRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, AccessibilityRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? accessibilityReadQueryKey(id);
  const query = useQuery({
    ...(accessibilityReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, AccessibilityRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const accessibilityReadSuspenseQueryKey = (
  id: AccessibilityReadPathParams["id"],
) => [{ url: "/accessibility/:id/", params: { id: id } }] as const;
export type AccessibilityReadSuspenseQueryKey = ReturnType<
  typeof accessibilityReadSuspenseQueryKey
>;
export function accessibilityReadSuspenseQueryOptions(
  id: AccessibilityReadPathParams["id"],
  options: AccessibilityRead["client"]["parameters"] = {},
) {
  const queryKey = accessibilityReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AccessibilityRead["data"],
        AccessibilityRead["error"]
      >({
        method: "get",
        url: `/accessibility/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing accessibility.
 * @link /accessibility/:id/
 */
export function useAccessibilityReadSuspense<
  TData = AccessibilityRead["response"],
  TQueryKey extends QueryKey = AccessibilityReadSuspenseQueryKey,
>(
  id: AccessibilityReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        AccessibilityRead["response"],
        AccessibilityRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: AccessibilityRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, AccessibilityRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? accessibilityReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(accessibilityReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, AccessibilityRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
