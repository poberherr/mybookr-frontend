import client from "../../client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CoreMessagesReadQueryResponse, CoreMessagesReadPathParams } from "../types/CoreMessagesRead";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CoreMessagesReadClient = typeof client<CoreMessagesReadQueryResponse, never, never>;
type CoreMessagesRead = {
    data: CoreMessagesReadQueryResponse;
    error: never;
    request: never;
    pathParams: CoreMessagesReadPathParams;
    queryParams: never;
    headerParams: never;
    response: CoreMessagesReadQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreMessagesReadClient>[0]>;
        return: Awaited<ReturnType<CoreMessagesReadClient>>;
    };
};
export const coreMessagesReadQueryKey = (id: CoreMessagesReadPathParams["id"]) => [{ url: "/core/messages/:id/", params: { id: id } }] as const;
export type CoreMessagesReadQueryKey = ReturnType<typeof coreMessagesReadQueryKey>;
export function coreMessagesReadQueryOptions(id: CoreMessagesReadPathParams["id"], options: CoreMessagesRead["client"]["parameters"] = {}) {
    const queryKey = coreMessagesReadQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreMessagesRead["data"], CoreMessagesRead["error"]>({
                method: "get",
                url: `/core/messages/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing messages.
 * @link /core/messages/:id/
 */
export function useCoreMessagesRead<TData = CoreMessagesRead["response"], TQueryData = CoreMessagesRead["response"], TQueryKey extends QueryKey = CoreMessagesReadQueryKey>(id: CoreMessagesReadPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<CoreMessagesRead["response"], CoreMessagesRead["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreMessagesRead["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreMessagesRead["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreMessagesReadQueryKey(id);
    const query = useQuery({
        ...coreMessagesReadQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CoreMessagesRead["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const coreMessagesReadSuspenseQueryKey = (id: CoreMessagesReadPathParams["id"]) => [{ url: "/core/messages/:id/", params: { id: id } }] as const;
export type CoreMessagesReadSuspenseQueryKey = ReturnType<typeof coreMessagesReadSuspenseQueryKey>;
export function coreMessagesReadSuspenseQueryOptions(id: CoreMessagesReadPathParams["id"], options: CoreMessagesRead["client"]["parameters"] = {}) {
    const queryKey = coreMessagesReadSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreMessagesRead["data"], CoreMessagesRead["error"]>({
                method: "get",
                url: `/core/messages/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing messages.
 * @link /core/messages/:id/
 */
export function useCoreMessagesReadSuspense<TData = CoreMessagesRead["response"], TQueryKey extends QueryKey = CoreMessagesReadSuspenseQueryKey>(id: CoreMessagesReadPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<CoreMessagesRead["response"], CoreMessagesRead["error"], TData, TQueryKey>>;
    client?: CoreMessagesRead["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CoreMessagesRead["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreMessagesReadSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...coreMessagesReadSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CoreMessagesRead["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}