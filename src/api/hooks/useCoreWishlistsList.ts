import client from "../../client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CoreWishlistsListQueryResponse } from "../types/CoreWishlistsList";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CoreWishlistsListClient = typeof client<CoreWishlistsListQueryResponse, never, never>;
type CoreWishlistsList = {
    data: CoreWishlistsListQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreWishlistsListQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreWishlistsListClient>[0]>;
        return: Awaited<ReturnType<CoreWishlistsListClient>>;
    };
};
export const coreWishlistsListQueryKey = () => [{ url: "/core/wishlists/" }] as const;
export type CoreWishlistsListQueryKey = ReturnType<typeof coreWishlistsListQueryKey>;
export function coreWishlistsListQueryOptions(options: CoreWishlistsList["client"]["parameters"] = {}) {
    const queryKey = coreWishlistsListQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreWishlistsList["data"], CoreWishlistsList["error"]>({
                method: "get",
                url: `/core/wishlists/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing wishlists.
 * @link /core/wishlists/
 */
export function useCoreWishlistsList<TData = CoreWishlistsList["response"], TQueryData = CoreWishlistsList["response"], TQueryKey extends QueryKey = CoreWishlistsListQueryKey>(options: {
    query?: Partial<QueryObserverOptions<CoreWishlistsList["response"], CoreWishlistsList["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreWishlistsList["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreWishlistsList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreWishlistsListQueryKey();
    const query = useQuery({
        ...coreWishlistsListQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CoreWishlistsList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const coreWishlistsListSuspenseQueryKey = () => [{ url: "/core/wishlists/" }] as const;
export type CoreWishlistsListSuspenseQueryKey = ReturnType<typeof coreWishlistsListSuspenseQueryKey>;
export function coreWishlistsListSuspenseQueryOptions(options: CoreWishlistsList["client"]["parameters"] = {}) {
    const queryKey = coreWishlistsListSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreWishlistsList["data"], CoreWishlistsList["error"]>({
                method: "get",
                url: `/core/wishlists/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing wishlists.
 * @link /core/wishlists/
 */
export function useCoreWishlistsListSuspense<TData = CoreWishlistsList["response"], TQueryKey extends QueryKey = CoreWishlistsListSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<CoreWishlistsList["response"], CoreWishlistsList["error"], TData, TQueryKey>>;
    client?: CoreWishlistsList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CoreWishlistsList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreWishlistsListSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...coreWishlistsListSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CoreWishlistsList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}