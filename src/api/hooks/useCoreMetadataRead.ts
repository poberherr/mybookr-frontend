import client from "../../client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CoreMetadataReadQueryResponse, CoreMetadataReadPathParams } from "../types/CoreMetadataRead";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CoreMetadataReadClient = typeof client<CoreMetadataReadQueryResponse, never, never>;
type CoreMetadataRead = {
    data: CoreMetadataReadQueryResponse;
    error: never;
    request: never;
    pathParams: CoreMetadataReadPathParams;
    queryParams: never;
    headerParams: never;
    response: CoreMetadataReadQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreMetadataReadClient>[0]>;
        return: Awaited<ReturnType<CoreMetadataReadClient>>;
    };
};
export const coreMetadataReadQueryKey = (id: CoreMetadataReadPathParams["id"]) => [{ url: "/core/metadata/:id/", params: { id: id } }] as const;
export type CoreMetadataReadQueryKey = ReturnType<typeof coreMetadataReadQueryKey>;
export function coreMetadataReadQueryOptions(id: CoreMetadataReadPathParams["id"], options: CoreMetadataRead["client"]["parameters"] = {}) {
    const queryKey = coreMetadataReadQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreMetadataRead["data"], CoreMetadataRead["error"]>({
                method: "get",
                url: `/core/metadata/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing meta data.
 * @link /core/metadata/:id/
 */
export function useCoreMetadataRead<TData = CoreMetadataRead["response"], TQueryData = CoreMetadataRead["response"], TQueryKey extends QueryKey = CoreMetadataReadQueryKey>(id: CoreMetadataReadPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<CoreMetadataRead["response"], CoreMetadataRead["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreMetadataRead["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreMetadataRead["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreMetadataReadQueryKey(id);
    const query = useQuery({
        ...coreMetadataReadQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CoreMetadataRead["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const coreMetadataReadSuspenseQueryKey = (id: CoreMetadataReadPathParams["id"]) => [{ url: "/core/metadata/:id/", params: { id: id } }] as const;
export type CoreMetadataReadSuspenseQueryKey = ReturnType<typeof coreMetadataReadSuspenseQueryKey>;
export function coreMetadataReadSuspenseQueryOptions(id: CoreMetadataReadPathParams["id"], options: CoreMetadataRead["client"]["parameters"] = {}) {
    const queryKey = coreMetadataReadSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreMetadataRead["data"], CoreMetadataRead["error"]>({
                method: "get",
                url: `/core/metadata/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing meta data.
 * @link /core/metadata/:id/
 */
export function useCoreMetadataReadSuspense<TData = CoreMetadataRead["response"], TQueryKey extends QueryKey = CoreMetadataReadSuspenseQueryKey>(id: CoreMetadataReadPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<CoreMetadataRead["response"], CoreMetadataRead["error"], TData, TQueryKey>>;
    client?: CoreMetadataRead["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CoreMetadataRead["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreMetadataReadSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...coreMetadataReadSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CoreMetadataRead["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}