import client from "../../client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CoreReviewsReadQueryResponse, CoreReviewsReadPathParams } from "../types/CoreReviewsRead";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CoreReviewsReadClient = typeof client<CoreReviewsReadQueryResponse, never, never>;
type CoreReviewsRead = {
    data: CoreReviewsReadQueryResponse;
    error: never;
    request: never;
    pathParams: CoreReviewsReadPathParams;
    queryParams: never;
    headerParams: never;
    response: CoreReviewsReadQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreReviewsReadClient>[0]>;
        return: Awaited<ReturnType<CoreReviewsReadClient>>;
    };
};
export const coreReviewsReadQueryKey = (id: CoreReviewsReadPathParams["id"]) => [{ url: "/core/reviews/:id/", params: { id: id } }] as const;
export type CoreReviewsReadQueryKey = ReturnType<typeof coreReviewsReadQueryKey>;
export function coreReviewsReadQueryOptions(id: CoreReviewsReadPathParams["id"], options: CoreReviewsRead["client"]["parameters"] = {}) {
    const queryKey = coreReviewsReadQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreReviewsRead["data"], CoreReviewsRead["error"]>({
                method: "get",
                url: `/core/reviews/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing reviews.
 * @link /core/reviews/:id/
 */
export function useCoreReviewsRead<TData = CoreReviewsRead["response"], TQueryData = CoreReviewsRead["response"], TQueryKey extends QueryKey = CoreReviewsReadQueryKey>(id: CoreReviewsReadPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<CoreReviewsRead["response"], CoreReviewsRead["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreReviewsRead["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreReviewsRead["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreReviewsReadQueryKey(id);
    const query = useQuery({
        ...coreReviewsReadQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CoreReviewsRead["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const coreReviewsReadSuspenseQueryKey = (id: CoreReviewsReadPathParams["id"]) => [{ url: "/core/reviews/:id/", params: { id: id } }] as const;
export type CoreReviewsReadSuspenseQueryKey = ReturnType<typeof coreReviewsReadSuspenseQueryKey>;
export function coreReviewsReadSuspenseQueryOptions(id: CoreReviewsReadPathParams["id"], options: CoreReviewsRead["client"]["parameters"] = {}) {
    const queryKey = coreReviewsReadSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreReviewsRead["data"], CoreReviewsRead["error"]>({
                method: "get",
                url: `/core/reviews/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing reviews.
 * @link /core/reviews/:id/
 */
export function useCoreReviewsReadSuspense<TData = CoreReviewsRead["response"], TQueryKey extends QueryKey = CoreReviewsReadSuspenseQueryKey>(id: CoreReviewsReadPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<CoreReviewsRead["response"], CoreReviewsRead["error"], TData, TQueryKey>>;
    client?: CoreReviewsRead["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CoreReviewsRead["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreReviewsReadSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...coreReviewsReadSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CoreReviewsRead["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}