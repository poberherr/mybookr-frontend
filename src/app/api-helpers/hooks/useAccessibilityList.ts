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
import type { AccessibilityListQueryResponse } from "../types/AccessibilityList";

type AccessibilityListClient = typeof client<
  AccessibilityListQueryResponse,
  never,
  never
>;
type AccessibilityList = {
  data: AccessibilityListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AccessibilityListQueryResponse;
  client: {
    parameters: Partial<Parameters<AccessibilityListClient>[0]>;
    return: Awaited<ReturnType<AccessibilityListClient>>;
  };
};
export const accessibilityListQueryKey = () =>
  [{ url: "/accessibility/" }] as const;
export type AccessibilityListQueryKey = ReturnType<
  typeof accessibilityListQueryKey
>;
export function accessibilityListQueryOptions(
  options: AccessibilityList["client"]["parameters"] = {},
) {
  const queryKey = accessibilityListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AccessibilityList["data"],
        AccessibilityList["error"]
      >({
        method: "get",
        url: `/accessibility/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing accessibility.
 * @link /accessibility/
 */
export function useAccessibilityList<
  TData = AccessibilityList["response"],
  TQueryData = AccessibilityList["response"],
  TQueryKey extends QueryKey = AccessibilityListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        AccessibilityList["response"],
        AccessibilityList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: AccessibilityList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, AccessibilityList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? accessibilityListQueryKey();
  const query = useQuery({
    ...(accessibilityListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, AccessibilityList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const accessibilityListSuspenseQueryKey = () =>
  [{ url: "/accessibility/" }] as const;
export type AccessibilityListSuspenseQueryKey = ReturnType<
  typeof accessibilityListSuspenseQueryKey
>;
export function accessibilityListSuspenseQueryOptions(
  options: AccessibilityList["client"]["parameters"] = {},
) {
  const queryKey = accessibilityListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        AccessibilityList["data"],
        AccessibilityList["error"]
      >({
        method: "get",
        url: `/accessibility/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing accessibility.
 * @link /accessibility/
 */
export function useAccessibilityListSuspense<
  TData = AccessibilityList["response"],
  TQueryKey extends QueryKey = AccessibilityListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        AccessibilityList["response"],
        AccessibilityList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: AccessibilityList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, AccessibilityList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? accessibilityListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(accessibilityListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, AccessibilityList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
