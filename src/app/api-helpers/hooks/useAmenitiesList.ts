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
import type { AmenitiesListQueryResponse } from "../types/AmenitiesList";

type AmenitiesListClient = typeof client<
  AmenitiesListQueryResponse,
  never,
  never
>;
type AmenitiesList = {
  data: AmenitiesListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AmenitiesListQueryResponse;
  client: {
    parameters: Partial<Parameters<AmenitiesListClient>[0]>;
    return: Awaited<ReturnType<AmenitiesListClient>>;
  };
};
export const amenitiesListQueryKey = () => [{ url: "/amenities/" }] as const;
export type AmenitiesListQueryKey = ReturnType<typeof amenitiesListQueryKey>;
export function amenitiesListQueryOptions(
  options: AmenitiesList["client"]["parameters"] = {},
) {
  const queryKey = amenitiesListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<AmenitiesList["data"], AmenitiesList["error"]>({
        method: "get",
        url: `/amenities/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing amenities.
 * @link /amenities/
 */
export function useAmenitiesList<
  TData = AmenitiesList["response"],
  TQueryData = AmenitiesList["response"],
  TQueryKey extends QueryKey = AmenitiesListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        AmenitiesList["response"],
        AmenitiesList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: AmenitiesList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, AmenitiesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? amenitiesListQueryKey();
  const query = useQuery({
    ...(amenitiesListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, AmenitiesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const amenitiesListSuspenseQueryKey = () =>
  [{ url: "/amenities/" }] as const;
export type AmenitiesListSuspenseQueryKey = ReturnType<
  typeof amenitiesListSuspenseQueryKey
>;
export function amenitiesListSuspenseQueryOptions(
  options: AmenitiesList["client"]["parameters"] = {},
) {
  const queryKey = amenitiesListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<AmenitiesList["data"], AmenitiesList["error"]>({
        method: "get",
        url: `/amenities/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing amenities.
 * @link /amenities/
 */
export function useAmenitiesListSuspense<
  TData = AmenitiesList["response"],
  TQueryKey extends QueryKey = AmenitiesListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        AmenitiesList["response"],
        AmenitiesList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: AmenitiesList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, AmenitiesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? amenitiesListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(amenitiesListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, AmenitiesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
