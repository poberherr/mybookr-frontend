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
import type { SpacesListQueryResponse } from "../types/SpacesList";

type SpacesListClient = typeof client<SpacesListQueryResponse, never, never>;
type SpacesList = {
  data: SpacesListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: SpacesListQueryResponse;
  client: {
    parameters: Partial<Parameters<SpacesListClient>[0]>;
    return: Awaited<ReturnType<SpacesListClient>>;
  };
};
export const spacesListQueryKey = () => [{ url: "/spaces/" }] as const;
export type SpacesListQueryKey = ReturnType<typeof spacesListQueryKey>;
export function spacesListQueryOptions(
  options: SpacesList["client"]["parameters"] = {},
) {
  const queryKey = spacesListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<SpacesList["data"], SpacesList["error"]>({
        method: "get",
        url: `/spaces/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing spaces.
 * @link /spaces/
 */
export function useSpacesList<
  TData = SpacesList["response"],
  TQueryData = SpacesList["response"],
  TQueryKey extends QueryKey = SpacesListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        SpacesList["response"],
        SpacesList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: SpacesList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, SpacesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? spacesListQueryKey();
  const query = useQuery({
    ...(spacesListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, SpacesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const spacesListSuspenseQueryKey = () => [{ url: "/spaces/" }] as const;
export type SpacesListSuspenseQueryKey = ReturnType<
  typeof spacesListSuspenseQueryKey
>;
export function spacesListSuspenseQueryOptions(
  options: SpacesList["client"]["parameters"] = {},
) {
  const queryKey = spacesListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<SpacesList["data"], SpacesList["error"]>({
        method: "get",
        url: `/spaces/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing spaces.
 * @link /spaces/
 */
export function useSpacesListSuspense<
  TData = SpacesList["response"],
  TQueryKey extends QueryKey = SpacesListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        SpacesList["response"],
        SpacesList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: SpacesList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, SpacesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? spacesListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(spacesListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, SpacesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
