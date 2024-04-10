import client from "../../client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CoreReviewsListQueryResponse } from "../types/CoreReviewsList";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CoreReviewsListClient = typeof client<CoreReviewsListQueryResponse, never, never>;
type CoreReviewsList = {
    data: CoreReviewsListQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreReviewsListQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreReviewsListClient>[0]>;
        return: Awaited<ReturnType<CoreReviewsListClient>>;
    };
};
export const coreReviewsListQueryKey = () => [{ url: "/core/reviews/" }] as const;
export type CoreReviewsListQueryKey = ReturnType<typeof coreReviewsListQueryKey>;
export function coreReviewsListQueryOptions(options: CoreReviewsList["client"]["parameters"] = {}) {
    const queryKey = coreReviewsListQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreReviewsList["data"], CoreReviewsList["error"]>({
                method: "get",
                url: `/core/reviews/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing reviews.
 * @link /core/reviews/
 */
export function useCoreReviewsList<TData = CoreReviewsList["response"], TQueryData = CoreReviewsList["response"], TQueryKey extends QueryKey = CoreReviewsListQueryKey>(options: {
    query?: Partial<QueryObserverOptions<CoreReviewsList["response"], CoreReviewsList["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreReviewsList["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreReviewsList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreReviewsListQueryKey();
    const query = useQuery({
        ...coreReviewsListQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CoreReviewsList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const coreReviewsListSuspenseQueryKey = () => [{ url: "/core/reviews/" }] as const;
export type CoreReviewsListSuspenseQueryKey = ReturnType<typeof coreReviewsListSuspenseQueryKey>;
export function coreReviewsListSuspenseQueryOptions(options: CoreReviewsList["client"]["parameters"] = {}) {
    const queryKey = coreReviewsListSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreReviewsList["data"], CoreReviewsList["error"]>({
                method: "get",
                url: `/core/reviews/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing reviews.
 * @link /core/reviews/
 */
export function useCoreReviewsListSuspense<TData = CoreReviewsList["response"], TQueryKey extends QueryKey = CoreReviewsListSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<CoreReviewsList["response"], CoreReviewsList["error"], TData, TQueryKey>>;
    client?: CoreReviewsList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CoreReviewsList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreReviewsListSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...coreReviewsListSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CoreReviewsList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}