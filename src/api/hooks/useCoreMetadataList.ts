import client from "../../client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CoreMetadataListQueryResponse } from "../types/CoreMetadataList";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CoreMetadataListClient = typeof client<CoreMetadataListQueryResponse, never, never>;
type CoreMetadataList = {
    data: CoreMetadataListQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreMetadataListQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreMetadataListClient>[0]>;
        return: Awaited<ReturnType<CoreMetadataListClient>>;
    };
};
export const coreMetadataListQueryKey = () => [{ url: "/core/metadata/" }] as const;
export type CoreMetadataListQueryKey = ReturnType<typeof coreMetadataListQueryKey>;
export function coreMetadataListQueryOptions(options: CoreMetadataList["client"]["parameters"] = {}) {
    const queryKey = coreMetadataListQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreMetadataList["data"], CoreMetadataList["error"]>({
                method: "get",
                url: `/core/metadata/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing meta data.
 * @link /core/metadata/
 */
export function useCoreMetadataList<TData = CoreMetadataList["response"], TQueryData = CoreMetadataList["response"], TQueryKey extends QueryKey = CoreMetadataListQueryKey>(options: {
    query?: Partial<QueryObserverOptions<CoreMetadataList["response"], CoreMetadataList["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreMetadataList["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreMetadataList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreMetadataListQueryKey();
    const query = useQuery({
        ...coreMetadataListQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CoreMetadataList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const coreMetadataListSuspenseQueryKey = () => [{ url: "/core/metadata/" }] as const;
export type CoreMetadataListSuspenseQueryKey = ReturnType<typeof coreMetadataListSuspenseQueryKey>;
export function coreMetadataListSuspenseQueryOptions(options: CoreMetadataList["client"]["parameters"] = {}) {
    const queryKey = coreMetadataListSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreMetadataList["data"], CoreMetadataList["error"]>({
                method: "get",
                url: `/core/metadata/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing meta data.
 * @link /core/metadata/
 */
export function useCoreMetadataListSuspense<TData = CoreMetadataList["response"], TQueryKey extends QueryKey = CoreMetadataListSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<CoreMetadataList["response"], CoreMetadataList["error"], TData, TQueryKey>>;
    client?: CoreMetadataList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CoreMetadataList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreMetadataListSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...coreMetadataListSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CoreMetadataList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}