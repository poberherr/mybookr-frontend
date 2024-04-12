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
import type { CoreMessagesListQueryResponse } from "../types/CoreMessagesList";

type CoreMessagesListClient = typeof client<
  CoreMessagesListQueryResponse,
  never,
  never
>;
type CoreMessagesList = {
  data: CoreMessagesListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreMessagesListQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreMessagesListClient>[0]>;
    return: Awaited<ReturnType<CoreMessagesListClient>>;
  };
};
export const coreMessagesListQueryKey = () =>
  [{ url: "/core/messages/" }] as const;
export type CoreMessagesListQueryKey = ReturnType<
  typeof coreMessagesListQueryKey
>;
export function coreMessagesListQueryOptions(
  options: CoreMessagesList["client"]["parameters"] = {},
) {
  const queryKey = coreMessagesListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreMessagesList["data"],
        CoreMessagesList["error"]
      >({
        method: "get",
        url: `/core/messages/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing messages.
 * @link /core/messages/
 */
export function useCoreMessagesList<
  TData = CoreMessagesList["response"],
  TQueryData = CoreMessagesList["response"],
  TQueryKey extends QueryKey = CoreMessagesListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreMessagesList["response"],
        CoreMessagesList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreMessagesList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreMessagesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreMessagesListQueryKey();
  const query = useQuery({
    ...(coreMessagesListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreMessagesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreMessagesListSuspenseQueryKey = () =>
  [{ url: "/core/messages/" }] as const;
export type CoreMessagesListSuspenseQueryKey = ReturnType<
  typeof coreMessagesListSuspenseQueryKey
>;
export function coreMessagesListSuspenseQueryOptions(
  options: CoreMessagesList["client"]["parameters"] = {},
) {
  const queryKey = coreMessagesListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreMessagesList["data"],
        CoreMessagesList["error"]
      >({
        method: "get",
        url: `/core/messages/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing messages.
 * @link /core/messages/
 */
export function useCoreMessagesListSuspense<
  TData = CoreMessagesList["response"],
  TQueryKey extends QueryKey = CoreMessagesListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreMessagesList["response"],
        CoreMessagesList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreMessagesList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreMessagesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? coreMessagesListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(coreMessagesListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreMessagesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
