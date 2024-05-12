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
  SpacesReadPathParams,
  SpacesReadQueryResponse,
} from "../types/SpacesRead";

type SpacesReadClient = typeof client<SpacesReadQueryResponse, never, never>;
type SpacesRead = {
  data: SpacesReadQueryResponse;
  error: never;
  request: never;
  pathParams: SpacesReadPathParams;
  queryParams: never;
  headerParams: never;
  response: SpacesReadQueryResponse;
  client: {
    parameters: Partial<Parameters<SpacesReadClient>[0]>;
    return: Awaited<ReturnType<SpacesReadClient>>;
  };
};
export const spacesReadQueryKey = (id: SpacesReadPathParams["id"]) =>
  [{ url: "/spaces/:id/", params: { id: id } }] as const;
export type SpacesReadQueryKey = ReturnType<typeof spacesReadQueryKey>;
export function spacesReadQueryOptions(
  id: SpacesReadPathParams["id"],
  options: SpacesRead["client"]["parameters"] = {},
) {
  const queryKey = spacesReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<SpacesRead["data"], SpacesRead["error"]>({
        method: "get",
        url: `/spaces/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing spaces.
 * @link /spaces/:id/
 */
export function useSpacesRead<
  TData = SpacesRead["response"],
  TQueryData = SpacesRead["response"],
  TQueryKey extends QueryKey = SpacesReadQueryKey,
>(
  id: SpacesReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        SpacesRead["response"],
        SpacesRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: SpacesRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, SpacesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? spacesReadQueryKey(id);
  const query = useQuery({
    ...(spacesReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, SpacesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const spacesReadSuspenseQueryKey = (id: SpacesReadPathParams["id"]) =>
  [{ url: "/spaces/:id/", params: { id: id } }] as const;
export type SpacesReadSuspenseQueryKey = ReturnType<
  typeof spacesReadSuspenseQueryKey
>;
export function spacesReadSuspenseQueryOptions(
  id: SpacesReadPathParams["id"],
  options: SpacesRead["client"]["parameters"] = {},
) {
  const queryKey = spacesReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<SpacesRead["data"], SpacesRead["error"]>({
        method: "get",
        url: `/spaces/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing spaces.
 * @link /spaces/:id/
 */
export function useSpacesReadSuspense<
  TData = SpacesRead["response"],
  TQueryKey extends QueryKey = SpacesReadSuspenseQueryKey,
>(
  id: SpacesReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        SpacesRead["response"],
        SpacesRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: SpacesRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, SpacesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? spacesReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(spacesReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, SpacesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
