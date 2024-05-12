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
import type { HouseRulesListQueryResponse } from "../types/HouseRulesList";

type HouseRulesListClient = typeof client<
  HouseRulesListQueryResponse,
  never,
  never
>;
type HouseRulesList = {
  data: HouseRulesListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: HouseRulesListQueryResponse;
  client: {
    parameters: Partial<Parameters<HouseRulesListClient>[0]>;
    return: Awaited<ReturnType<HouseRulesListClient>>;
  };
};
export const houseRulesListQueryKey = () => [{ url: "/house-rules/" }] as const;
export type HouseRulesListQueryKey = ReturnType<typeof houseRulesListQueryKey>;
export function houseRulesListQueryOptions(
  options: HouseRulesList["client"]["parameters"] = {},
) {
  const queryKey = houseRulesListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<HouseRulesList["data"], HouseRulesList["error"]>(
        {
          method: "get",
          url: `/house-rules/`,
          ...options,
        },
      );
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing houseRules.
 * @link /house-rules/
 */
export function useHouseRulesList<
  TData = HouseRulesList["response"],
  TQueryData = HouseRulesList["response"],
  TQueryKey extends QueryKey = HouseRulesListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        HouseRulesList["response"],
        HouseRulesList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: HouseRulesList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, HouseRulesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? houseRulesListQueryKey();
  const query = useQuery({
    ...(houseRulesListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, HouseRulesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const houseRulesListSuspenseQueryKey = () =>
  [{ url: "/house-rules/" }] as const;
export type HouseRulesListSuspenseQueryKey = ReturnType<
  typeof houseRulesListSuspenseQueryKey
>;
export function houseRulesListSuspenseQueryOptions(
  options: HouseRulesList["client"]["parameters"] = {},
) {
  const queryKey = houseRulesListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<HouseRulesList["data"], HouseRulesList["error"]>(
        {
          method: "get",
          url: `/house-rules/`,
          ...options,
        },
      );
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing houseRules.
 * @link /house-rules/
 */
export function useHouseRulesListSuspense<
  TData = HouseRulesList["response"],
  TQueryKey extends QueryKey = HouseRulesListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        HouseRulesList["response"],
        HouseRulesList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: HouseRulesList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, HouseRulesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? houseRulesListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(houseRulesListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, HouseRulesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
