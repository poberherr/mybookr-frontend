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
  DietaryOptionsReadPathParams,
  DietaryOptionsReadQueryResponse,
} from "../types/DietaryOptionsRead";

type DietaryOptionsReadClient = typeof client<
  DietaryOptionsReadQueryResponse,
  never,
  never
>;
type DietaryOptionsRead = {
  data: DietaryOptionsReadQueryResponse;
  error: never;
  request: never;
  pathParams: DietaryOptionsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: DietaryOptionsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<DietaryOptionsReadClient>[0]>;
    return: Awaited<ReturnType<DietaryOptionsReadClient>>;
  };
};
export const dietaryOptionsReadQueryKey = (
  id: DietaryOptionsReadPathParams["id"],
) => [{ url: "/dietary-options/:id/", params: { id: id } }] as const;
export type DietaryOptionsReadQueryKey = ReturnType<
  typeof dietaryOptionsReadQueryKey
>;
export function dietaryOptionsReadQueryOptions(
  id: DietaryOptionsReadPathParams["id"],
  options: DietaryOptionsRead["client"]["parameters"] = {},
) {
  const queryKey = dietaryOptionsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        DietaryOptionsRead["data"],
        DietaryOptionsRead["error"]
      >({
        method: "get",
        url: `/dietary-options/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /dietary-options/:id/
 */
export function useDietaryOptionsRead<
  TData = DietaryOptionsRead["response"],
  TQueryData = DietaryOptionsRead["response"],
  TQueryKey extends QueryKey = DietaryOptionsReadQueryKey,
>(
  id: DietaryOptionsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        DietaryOptionsRead["response"],
        DietaryOptionsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: DietaryOptionsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, DietaryOptionsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? dietaryOptionsReadQueryKey(id);
  const query = useQuery({
    ...(dietaryOptionsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, DietaryOptionsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const dietaryOptionsReadSuspenseQueryKey = (
  id: DietaryOptionsReadPathParams["id"],
) => [{ url: "/dietary-options/:id/", params: { id: id } }] as const;
export type DietaryOptionsReadSuspenseQueryKey = ReturnType<
  typeof dietaryOptionsReadSuspenseQueryKey
>;
export function dietaryOptionsReadSuspenseQueryOptions(
  id: DietaryOptionsReadPathParams["id"],
  options: DietaryOptionsRead["client"]["parameters"] = {},
) {
  const queryKey = dietaryOptionsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        DietaryOptionsRead["data"],
        DietaryOptionsRead["error"]
      >({
        method: "get",
        url: `/dietary-options/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /dietary-options/:id/
 */
export function useDietaryOptionsReadSuspense<
  TData = DietaryOptionsRead["response"],
  TQueryKey extends QueryKey = DietaryOptionsReadSuspenseQueryKey,
>(
  id: DietaryOptionsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        DietaryOptionsRead["response"],
        DietaryOptionsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: DietaryOptionsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, DietaryOptionsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? dietaryOptionsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(dietaryOptionsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, DietaryOptionsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
