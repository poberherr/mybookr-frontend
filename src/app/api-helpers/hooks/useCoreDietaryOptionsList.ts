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
import type { CoreDietaryOptionsListQueryResponse } from "../types/CoreDietaryOptionsList";

type CoreDietaryOptionsListClient = typeof client<
  CoreDietaryOptionsListQueryResponse,
  never,
  never
>;
type CoreDietaryOptionsList = {
  data: CoreDietaryOptionsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreDietaryOptionsListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreDietaryOptionsListClient>[0]>;
    return: Awaited<ReturnType<CoreDietaryOptionsListClient>>;
  };
};
export const coreDietaryOptionsListQueryKey = () =>
  [{ url: "/core/dietary-options/" }] as const;
export type CoreDietaryOptionsListQueryKey = ReturnType<
  typeof coreDietaryOptionsListQueryKey
>;
export function coreDietaryOptionsListQueryOptions(
  options: CoreDietaryOptionsList["client"]["parameters"] = {},
) {
  const queryKey = coreDietaryOptionsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreDietaryOptionsList["data"],
        CoreDietaryOptionsList["error"]
      >({
        method: "get",
        url: `/core/dietary-options/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/dietary-options/
 */
export function useCoreDietaryOptionsList<
  TData = CoreDietaryOptionsList["response"],
  TQueryData = CoreDietaryOptionsList["response"],
  TQueryKey extends QueryKey = CoreDietaryOptionsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreDietaryOptionsList["response"],
        CoreDietaryOptionsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreDietaryOptionsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreDietaryOptionsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreDietaryOptionsListQueryKey();
  const query = useQuery({
    ...(coreDietaryOptionsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreDietaryOptionsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreDietaryOptionsListSuspenseQueryKey = () =>
  [{ url: "/core/dietary-options/" }] as const;
export type CoreDietaryOptionsListSuspenseQueryKey = ReturnType<
  typeof coreDietaryOptionsListSuspenseQueryKey
>;
export function coreDietaryOptionsListSuspenseQueryOptions(
  options: CoreDietaryOptionsList["client"]["parameters"] = {},
) {
  const queryKey = coreDietaryOptionsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreDietaryOptionsList["data"],
        CoreDietaryOptionsList["error"]
      >({
        method: "get",
        url: `/core/dietary-options/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/dietary-options/
 */
export function useCoreDietaryOptionsListSuspense<
  TData = CoreDietaryOptionsList["response"],
  TQueryKey extends QueryKey = CoreDietaryOptionsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreDietaryOptionsList["response"],
        CoreDietaryOptionsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreDietaryOptionsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreDietaryOptionsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreDietaryOptionsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreDietaryOptionsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreDietaryOptionsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
