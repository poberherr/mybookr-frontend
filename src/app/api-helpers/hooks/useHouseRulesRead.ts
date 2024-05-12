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
  HouseRulesReadPathParams,
  HouseRulesReadQueryResponse,
} from "../types/HouseRulesRead";

type HouseRulesReadClient = typeof client<
  HouseRulesReadQueryResponse,
  never,
  never
>;
type HouseRulesRead = {
  data: HouseRulesReadQueryResponse;
  error: never;
  request: never;
  pathParams: HouseRulesReadPathParams;
  queryParams: never;
  headerParams: never;
  response: HouseRulesReadQueryResponse;
  client: {
    parameters: Partial<Parameters<HouseRulesReadClient>[0]>;
    return: Awaited<ReturnType<HouseRulesReadClient>>;
  };
};
export const houseRulesReadQueryKey = (id: HouseRulesReadPathParams["id"]) =>
  [{ url: "/house-rules/:id/", params: { id: id } }] as const;
export type HouseRulesReadQueryKey = ReturnType<typeof houseRulesReadQueryKey>;
export function houseRulesReadQueryOptions(
  id: HouseRulesReadPathParams["id"],
  options: HouseRulesRead["client"]["parameters"] = {},
) {
  const queryKey = houseRulesReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<HouseRulesRead["data"], HouseRulesRead["error"]>(
        {
          method: "get",
          url: `/house-rules/${id}/`,
          ...options,
        },
      );
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing houseRules.
 * @link /house-rules/:id/
 */
export function useHouseRulesRead<
  TData = HouseRulesRead["response"],
  TQueryData = HouseRulesRead["response"],
  TQueryKey extends QueryKey = HouseRulesReadQueryKey,
>(
  id: HouseRulesReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        HouseRulesRead["response"],
        HouseRulesRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: HouseRulesRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, HouseRulesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? houseRulesReadQueryKey(id);
  const query = useQuery({
    ...(houseRulesReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, HouseRulesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const houseRulesReadSuspenseQueryKey = (
  id: HouseRulesReadPathParams["id"],
) => [{ url: "/house-rules/:id/", params: { id: id } }] as const;
export type HouseRulesReadSuspenseQueryKey = ReturnType<
  typeof houseRulesReadSuspenseQueryKey
>;
export function houseRulesReadSuspenseQueryOptions(
  id: HouseRulesReadPathParams["id"],
  options: HouseRulesRead["client"]["parameters"] = {},
) {
  const queryKey = houseRulesReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<HouseRulesRead["data"], HouseRulesRead["error"]>(
        {
          method: "get",
          url: `/house-rules/${id}/`,
          ...options,
        },
      );
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing houseRules.
 * @link /house-rules/:id/
 */
export function useHouseRulesReadSuspense<
  TData = HouseRulesRead["response"],
  TQueryKey extends QueryKey = HouseRulesReadSuspenseQueryKey,
>(
  id: HouseRulesReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        HouseRulesRead["response"],
        HouseRulesRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: HouseRulesRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, HouseRulesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? houseRulesReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(houseRulesReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, HouseRulesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
