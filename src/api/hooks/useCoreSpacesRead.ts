import client from "../../client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CoreSpacesReadQueryResponse, CoreSpacesReadPathParams } from "../types/CoreSpacesRead";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CoreSpacesReadClient = typeof client<CoreSpacesReadQueryResponse, never, never>;
type CoreSpacesRead = {
    data: CoreSpacesReadQueryResponse;
    error: never;
    request: never;
    pathParams: CoreSpacesReadPathParams;
    queryParams: never;
    headerParams: never;
    response: CoreSpacesReadQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreSpacesReadClient>[0]>;
        return: Awaited<ReturnType<CoreSpacesReadClient>>;
    };
};
export const coreSpacesReadQueryKey = (id: CoreSpacesReadPathParams["id"]) => [{ url: "/core/spaces/:id/", params: { id: id } }] as const;
export type CoreSpacesReadQueryKey = ReturnType<typeof coreSpacesReadQueryKey>;
export function coreSpacesReadQueryOptions(id: CoreSpacesReadPathParams["id"], options: CoreSpacesRead["client"]["parameters"] = {}) {
    const queryKey = coreSpacesReadQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreSpacesRead["data"], CoreSpacesRead["error"]>({
                method: "get",
                url: `/core/spaces/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing spaces.
 * @link /core/spaces/:id/
 */
export function useCoreSpacesRead<TData = CoreSpacesRead["response"], TQueryData = CoreSpacesRead["response"], TQueryKey extends QueryKey = CoreSpacesReadQueryKey>(id: CoreSpacesReadPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<CoreSpacesRead["response"], CoreSpacesRead["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreSpacesRead["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreSpacesRead["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreSpacesReadQueryKey(id);
    const query = useQuery({
        ...coreSpacesReadQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CoreSpacesRead["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const coreSpacesReadSuspenseQueryKey = (id: CoreSpacesReadPathParams["id"]) => [{ url: "/core/spaces/:id/", params: { id: id } }] as const;
export type CoreSpacesReadSuspenseQueryKey = ReturnType<typeof coreSpacesReadSuspenseQueryKey>;
export function coreSpacesReadSuspenseQueryOptions(id: CoreSpacesReadPathParams["id"], options: CoreSpacesRead["client"]["parameters"] = {}) {
    const queryKey = coreSpacesReadSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreSpacesRead["data"], CoreSpacesRead["error"]>({
                method: "get",
                url: `/core/spaces/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing spaces.
 * @link /core/spaces/:id/
 */
export function useCoreSpacesReadSuspense<TData = CoreSpacesRead["response"], TQueryKey extends QueryKey = CoreSpacesReadSuspenseQueryKey>(id: CoreSpacesReadPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<CoreSpacesRead["response"], CoreSpacesRead["error"], TData, TQueryKey>>;
    client?: CoreSpacesRead["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CoreSpacesRead["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreSpacesReadSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...coreSpacesReadSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CoreSpacesRead["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}