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
import type { DietaryOptionsListQueryResponse } from "../types/DietaryOptionsList";

type DietaryOptionsListClient = typeof client<
  DietaryOptionsListQueryResponse,
  never,
  never
>;
type DietaryOptionsList = {
  data: DietaryOptionsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: DietaryOptionsListQueryResponse;
  client: {
    parameters: Partial<Parameters<DietaryOptionsListClient>[0]>;
    return: Awaited<ReturnType<DietaryOptionsListClient>>;
  };
};
export const dietaryOptionsListQueryKey = () =>
  [{ url: "/dietary-options/" }] as const;
export type DietaryOptionsListQueryKey = ReturnType<
  typeof dietaryOptionsListQueryKey
>;
export function dietaryOptionsListQueryOptions(
  options: DietaryOptionsList["client"]["parameters"] = {},
) {
  const queryKey = dietaryOptionsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        DietaryOptionsList["data"],
        DietaryOptionsList["error"]
      >({
        method: "get",
        url: `/dietary-options/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /dietary-options/
 */
export function useDietaryOptionsList<
  TData = DietaryOptionsList["response"],
  TQueryData = DietaryOptionsList["response"],
  TQueryKey extends QueryKey = DietaryOptionsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        DietaryOptionsList["response"],
        DietaryOptionsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: DietaryOptionsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, DietaryOptionsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? dietaryOptionsListQueryKey();
  const query = useQuery({
    ...(dietaryOptionsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, DietaryOptionsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const dietaryOptionsListSuspenseQueryKey = () =>
  [{ url: "/dietary-options/" }] as const;
export type DietaryOptionsListSuspenseQueryKey = ReturnType<
  typeof dietaryOptionsListSuspenseQueryKey
>;
export function dietaryOptionsListSuspenseQueryOptions(
  options: DietaryOptionsList["client"]["parameters"] = {},
) {
  const queryKey = dietaryOptionsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        DietaryOptionsList["data"],
        DietaryOptionsList["error"]
      >({
        method: "get",
        url: `/dietary-options/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /dietary-options/
 */
export function useDietaryOptionsListSuspense<
  TData = DietaryOptionsList["response"],
  TQueryKey extends QueryKey = DietaryOptionsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        DietaryOptionsList["response"],
        DietaryOptionsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: DietaryOptionsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, DietaryOptionsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? dietaryOptionsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(dietaryOptionsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, DietaryOptionsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
