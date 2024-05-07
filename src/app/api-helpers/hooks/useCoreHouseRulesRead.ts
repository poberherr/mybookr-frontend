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
  CoreHouseRulesReadPathParams,
  CoreHouseRulesReadQueryResponse,
} from "../types/CoreHouseRulesRead";

type CoreHouseRulesReadClient = typeof client<
  CoreHouseRulesReadQueryResponse,
  never,
  never
>;
type CoreHouseRulesRead = {
  data: CoreHouseRulesReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreHouseRulesReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreHouseRulesReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreHouseRulesReadClient>[0]>;
    return: Awaited<ReturnType<CoreHouseRulesReadClient>>;
  };
};
export const coreHouseRulesReadQueryKey = (
  id: CoreHouseRulesReadPathParams["id"],
) => [{ url: "/core/house-rules/:id/", params: { id: id } }] as const;
export type CoreHouseRulesReadQueryKey = ReturnType<
  typeof coreHouseRulesReadQueryKey
>;
export function coreHouseRulesReadQueryOptions(
  id: CoreHouseRulesReadPathParams["id"],
  options: CoreHouseRulesRead["client"]["parameters"] = {},
) {
  const queryKey = coreHouseRulesReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreHouseRulesRead["data"],
        CoreHouseRulesRead["error"]
      >({
        method: "get",
        url: `/core/house-rules/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing houseRules.
 * @link /core/house-rules/:id/
 */
export function useCoreHouseRulesRead<
  TData = CoreHouseRulesRead["response"],
  TQueryData = CoreHouseRulesRead["response"],
  TQueryKey extends QueryKey = CoreHouseRulesReadQueryKey,
>(
  id: CoreHouseRulesReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreHouseRulesRead["response"],
        CoreHouseRulesRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreHouseRulesRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreHouseRulesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreHouseRulesReadQueryKey(id);
  const query = useQuery({
    ...(coreHouseRulesReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreHouseRulesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreHouseRulesReadSuspenseQueryKey = (
  id: CoreHouseRulesReadPathParams["id"],
) => [{ url: "/core/house-rules/:id/", params: { id: id } }] as const;
export type CoreHouseRulesReadSuspenseQueryKey = ReturnType<
  typeof coreHouseRulesReadSuspenseQueryKey
>;
export function coreHouseRulesReadSuspenseQueryOptions(
  id: CoreHouseRulesReadPathParams["id"],
  options: CoreHouseRulesRead["client"]["parameters"] = {},
) {
  const queryKey = coreHouseRulesReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreHouseRulesRead["data"],
        CoreHouseRulesRead["error"]
      >({
        method: "get",
        url: `/core/house-rules/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing houseRules.
 * @link /core/house-rules/:id/
 */
export function useCoreHouseRulesReadSuspense<
  TData = CoreHouseRulesRead["response"],
  TQueryKey extends QueryKey = CoreHouseRulesReadSuspenseQueryKey,
>(
  id: CoreHouseRulesReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreHouseRulesRead["response"],
        CoreHouseRulesRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreHouseRulesRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreHouseRulesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreHouseRulesReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreHouseRulesReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreHouseRulesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
