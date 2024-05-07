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
  CoreDietaryOptionsReadPathParams,
  CoreDietaryOptionsReadQueryResponse,
} from "../types/CoreDietaryOptionsRead";

type CoreDietaryOptionsReadClient = typeof client<
  CoreDietaryOptionsReadQueryResponse,
  never,
  never
>;
type CoreDietaryOptionsRead = {
  data: CoreDietaryOptionsReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreDietaryOptionsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreDietaryOptionsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreDietaryOptionsReadClient>[0]>;
    return: Awaited<ReturnType<CoreDietaryOptionsReadClient>>;
  };
};
export const coreDietaryOptionsReadQueryKey = (
  id: CoreDietaryOptionsReadPathParams["id"],
) => [{ url: "/core/dietary-options/:id/", params: { id: id } }] as const;
export type CoreDietaryOptionsReadQueryKey = ReturnType<
  typeof coreDietaryOptionsReadQueryKey
>;
export function coreDietaryOptionsReadQueryOptions(
  id: CoreDietaryOptionsReadPathParams["id"],
  options: CoreDietaryOptionsRead["client"]["parameters"] = {},
) {
  const queryKey = coreDietaryOptionsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreDietaryOptionsRead["data"],
        CoreDietaryOptionsRead["error"]
      >({
        method: "get",
        url: `/core/dietary-options/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/dietary-options/:id/
 */
export function useCoreDietaryOptionsRead<
  TData = CoreDietaryOptionsRead["response"],
  TQueryData = CoreDietaryOptionsRead["response"],
  TQueryKey extends QueryKey = CoreDietaryOptionsReadQueryKey,
>(
  id: CoreDietaryOptionsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreDietaryOptionsRead["response"],
        CoreDietaryOptionsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreDietaryOptionsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreDietaryOptionsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreDietaryOptionsReadQueryKey(id);
  const query = useQuery({
    ...(coreDietaryOptionsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreDietaryOptionsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreDietaryOptionsReadSuspenseQueryKey = (
  id: CoreDietaryOptionsReadPathParams["id"],
) => [{ url: "/core/dietary-options/:id/", params: { id: id } }] as const;
export type CoreDietaryOptionsReadSuspenseQueryKey = ReturnType<
  typeof coreDietaryOptionsReadSuspenseQueryKey
>;
export function coreDietaryOptionsReadSuspenseQueryOptions(
  id: CoreDietaryOptionsReadPathParams["id"],
  options: CoreDietaryOptionsRead["client"]["parameters"] = {},
) {
  const queryKey = coreDietaryOptionsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreDietaryOptionsRead["data"],
        CoreDietaryOptionsRead["error"]
      >({
        method: "get",
        url: `/core/dietary-options/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @link /core/dietary-options/:id/
 */
export function useCoreDietaryOptionsReadSuspense<
  TData = CoreDietaryOptionsRead["response"],
  TQueryKey extends QueryKey = CoreDietaryOptionsReadSuspenseQueryKey,
>(
  id: CoreDietaryOptionsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreDietaryOptionsRead["response"],
        CoreDietaryOptionsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreDietaryOptionsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreDietaryOptionsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreDietaryOptionsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(coreDietaryOptionsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreDietaryOptionsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
