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
import type { MessagesListQueryResponse } from "../types/MessagesList";

type MessagesListClient = typeof client<
  MessagesListQueryResponse,
  never,
  never
>;
type MessagesList = {
  data: MessagesListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: MessagesListQueryResponse;
  client: {
    parameters: Partial<Parameters<MessagesListClient>[0]>;
    return: Awaited<ReturnType<MessagesListClient>>;
  };
};
export const messagesListQueryKey = () => [{ url: "/messages/" }] as const;
export type MessagesListQueryKey = ReturnType<typeof messagesListQueryKey>;
export function messagesListQueryOptions(
  options: MessagesList["client"]["parameters"] = {},
) {
  const queryKey = messagesListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<MessagesList["data"], MessagesList["error"]>({
        method: "get",
        url: `/messages/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing messages.
 * @link /messages/
 */
export function useMessagesList<
  TData = MessagesList["response"],
  TQueryData = MessagesList["response"],
  TQueryKey extends QueryKey = MessagesListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        MessagesList["response"],
        MessagesList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: MessagesList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, MessagesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? messagesListQueryKey();
  const query = useQuery({
    ...(messagesListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, MessagesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const messagesListSuspenseQueryKey = () =>
  [{ url: "/messages/" }] as const;
export type MessagesListSuspenseQueryKey = ReturnType<
  typeof messagesListSuspenseQueryKey
>;
export function messagesListSuspenseQueryOptions(
  options: MessagesList["client"]["parameters"] = {},
) {
  const queryKey = messagesListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<MessagesList["data"], MessagesList["error"]>({
        method: "get",
        url: `/messages/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing messages.
 * @link /messages/
 */
export function useMessagesListSuspense<
  TData = MessagesList["response"],
  TQueryKey extends QueryKey = MessagesListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        MessagesList["response"],
        MessagesList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: MessagesList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, MessagesList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? messagesListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(messagesListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, MessagesList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
