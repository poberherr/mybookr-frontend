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
  MessagesReadPathParams,
  MessagesReadQueryResponse,
} from "../types/MessagesRead";

type MessagesReadClient = typeof client<
  MessagesReadQueryResponse,
  never,
  never
>;
type MessagesRead = {
  data: MessagesReadQueryResponse;
  error: never;
  request: never;
  pathParams: MessagesReadPathParams;
  queryParams: never;
  headerParams: never;
  response: MessagesReadQueryResponse;
  client: {
    parameters: Partial<Parameters<MessagesReadClient>[0]>;
    return: Awaited<ReturnType<MessagesReadClient>>;
  };
};
export const messagesReadQueryKey = (id: MessagesReadPathParams["id"]) =>
  [{ url: "/messages/:id/", params: { id: id } }] as const;
export type MessagesReadQueryKey = ReturnType<typeof messagesReadQueryKey>;
export function messagesReadQueryOptions(
  id: MessagesReadPathParams["id"],
  options: MessagesRead["client"]["parameters"] = {},
) {
  const queryKey = messagesReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<MessagesRead["data"], MessagesRead["error"]>({
        method: "get",
        url: `/messages/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing messages.
 * @link /messages/:id/
 */
export function useMessagesRead<
  TData = MessagesRead["response"],
  TQueryData = MessagesRead["response"],
  TQueryKey extends QueryKey = MessagesReadQueryKey,
>(
  id: MessagesReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        MessagesRead["response"],
        MessagesRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: MessagesRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, MessagesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? messagesReadQueryKey(id);
  const query = useQuery({
    ...(messagesReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, MessagesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const messagesReadSuspenseQueryKey = (
  id: MessagesReadPathParams["id"],
) => [{ url: "/messages/:id/", params: { id: id } }] as const;
export type MessagesReadSuspenseQueryKey = ReturnType<
  typeof messagesReadSuspenseQueryKey
>;
export function messagesReadSuspenseQueryOptions(
  id: MessagesReadPathParams["id"],
  options: MessagesRead["client"]["parameters"] = {},
) {
  const queryKey = messagesReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<MessagesRead["data"], MessagesRead["error"]>({
        method: "get",
        url: `/messages/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing messages.
 * @link /messages/:id/
 */
export function useMessagesReadSuspense<
  TData = MessagesRead["response"],
  TQueryKey extends QueryKey = MessagesReadSuspenseQueryKey,
>(
  id: MessagesReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        MessagesRead["response"],
        MessagesRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: MessagesRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, MessagesRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? messagesReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(messagesReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, MessagesRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
