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
import type { CoreHouseRulesListQueryResponse } from "../types/CoreHouseRulesList";

type CoreHouseRulesListClient = typeof client<
  CoreHouseRulesListQueryResponse,
  never,
  never
>;
type CoreHouseRulesList = {
  data: CoreHouseRulesListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreHouseRulesListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreHouseRulesListClient>[0]>;
    return: Awaited<ReturnType<CoreHouseRulesListClient>>;
  };
};
export const coreHouseRulesListQueryKey = () =>
  [{ url: "/core/house-rules/" }] as const;
export type CoreHouseRulesListQueryKey = ReturnType<
  typeof coreHouseRulesListQueryKey
>;
export function coreHouseRulesListQueryOptions(
  options: CoreHouseRulesList["client"]["parameters"] = {},
) {
  const queryKey = coreHouseRulesListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreHouseRulesList["data"],
        CoreHouseRulesList["error"]
      >({
        method: "get",
        url: `/core/house-rules/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing houseRules.
 * @link /core/house-rules/
 */
export function useCoreHouseRulesList<
  TData = CoreHouseRulesList["response"],
  TQueryData = CoreHouseRulesList["response"],
  TQueryKey extends QueryKey = CoreHouseRulesListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreHouseRulesList["response"],
        CoreHouseRulesList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreHouseRulesList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreHouseRulesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreHouseRulesListQueryKey();
  const query = useQuery({
    ...(coreHouseRulesListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreHouseRulesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreHouseRulesListSuspenseQueryKey = () =>
  [{ url: "/core/house-rules/" }] as const;
export type CoreHouseRulesListSuspenseQueryKey = ReturnType<
  typeof coreHouseRulesListSuspenseQueryKey
>;
export function coreHouseRulesListSuspenseQueryOptions(
  options: CoreHouseRulesList["client"]["parameters"] = {},
) {
  const queryKey = coreHouseRulesListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreHouseRulesList["data"],
        CoreHouseRulesList["error"]
      >({
        method: "get",
        url: `/core/house-rules/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing houseRules.
 * @link /core/house-rules/
 */
export function useCoreHouseRulesListSuspense<
  TData = CoreHouseRulesList["response"],
  TQueryKey extends QueryKey = CoreHouseRulesListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreHouseRulesList["response"],
        CoreHouseRulesList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreHouseRulesList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreHouseRulesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreHouseRulesListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreHouseRulesListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreHouseRulesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
