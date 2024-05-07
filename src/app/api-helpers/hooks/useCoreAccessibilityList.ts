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
import type { CoreAccessibilityListQueryResponse } from "../types/CoreAccessibilityList";

type CoreAccessibilityListClient = typeof client<
  CoreAccessibilityListQueryResponse,
  never,
  never
>;
type CoreAccessibilityList = {
  data: CoreAccessibilityListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreAccessibilityListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreAccessibilityListClient>[0]>;
    return: Awaited<ReturnType<CoreAccessibilityListClient>>;
  };
};
export const coreAccessibilityListQueryKey = () =>
  [{ url: "/core/accessibility/" }] as const;
export type CoreAccessibilityListQueryKey = ReturnType<
  typeof coreAccessibilityListQueryKey
>;
export function coreAccessibilityListQueryOptions(
  options: CoreAccessibilityList["client"]["parameters"] = {},
) {
  const queryKey = coreAccessibilityListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreAccessibilityList["data"],
        CoreAccessibilityList["error"]
      >({
        method: "get",
        url: `/core/accessibility/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing accessibility.
 * @link /core/accessibility/
 */
export function useCoreAccessibilityList<
  TData = CoreAccessibilityList["response"],
  TQueryData = CoreAccessibilityList["response"],
  TQueryKey extends QueryKey = CoreAccessibilityListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreAccessibilityList["response"],
        CoreAccessibilityList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreAccessibilityList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreAccessibilityList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreAccessibilityListQueryKey();
  const query = useQuery({
    ...(coreAccessibilityListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreAccessibilityList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreAccessibilityListSuspenseQueryKey = () =>
  [{ url: "/core/accessibility/" }] as const;
export type CoreAccessibilityListSuspenseQueryKey = ReturnType<
  typeof coreAccessibilityListSuspenseQueryKey
>;
export function coreAccessibilityListSuspenseQueryOptions(
  options: CoreAccessibilityList["client"]["parameters"] = {},
) {
  const queryKey = coreAccessibilityListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreAccessibilityList["data"],
        CoreAccessibilityList["error"]
      >({
        method: "get",
        url: `/core/accessibility/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing accessibility.
 * @link /core/accessibility/
 */
export function useCoreAccessibilityListSuspense<
  TData = CoreAccessibilityList["response"],
  TQueryKey extends QueryKey = CoreAccessibilityListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreAccessibilityList["response"],
        CoreAccessibilityList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreAccessibilityList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreAccessibilityList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreAccessibilityListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreAccessibilityListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreAccessibilityList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
