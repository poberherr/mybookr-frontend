import client from "../../client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CoreSpacesListQueryResponse } from "../types/CoreSpacesList";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CoreSpacesListClient = typeof client<CoreSpacesListQueryResponse, never, never>;
type CoreSpacesList = {
    data: CoreSpacesListQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreSpacesListQueryResponse;
    client: {
        parameters: Partial<Parameters<CoreSpacesListClient>[0]>;
        return: Awaited<ReturnType<CoreSpacesListClient>>;
    };
};
export const coreSpacesListQueryKey = () => [{ url: "/core/spaces/" }] as const;
export type CoreSpacesListQueryKey = ReturnType<typeof coreSpacesListQueryKey>;
export function coreSpacesListQueryOptions(options: CoreSpacesList["client"]["parameters"] = {}) {
    const queryKey = coreSpacesListQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreSpacesList["data"], CoreSpacesList["error"]>({
                method: "get",
                url: `/core/spaces/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing spaces.
 * @link /core/spaces/
 */
export function useCoreSpacesList<TData = CoreSpacesList["response"], TQueryData = CoreSpacesList["response"], TQueryKey extends QueryKey = CoreSpacesListQueryKey>(options: {
    query?: Partial<QueryObserverOptions<CoreSpacesList["response"], CoreSpacesList["error"], TData, TQueryData, TQueryKey>>;
    client?: CoreSpacesList["client"]["parameters"];
} = {}): UseQueryResult<TData, CoreSpacesList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreSpacesListQueryKey();
    const query = useQuery({
        ...coreSpacesListQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CoreSpacesList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const coreSpacesListSuspenseQueryKey = () => [{ url: "/core/spaces/" }] as const;
export type CoreSpacesListSuspenseQueryKey = ReturnType<typeof coreSpacesListSuspenseQueryKey>;
export function coreSpacesListSuspenseQueryOptions(options: CoreSpacesList["client"]["parameters"] = {}) {
    const queryKey = coreSpacesListSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CoreSpacesList["data"], CoreSpacesList["error"]>({
                method: "get",
                url: `/core/spaces/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description API endpoint for managing spaces.
 * @link /core/spaces/
 */
export function useCoreSpacesListSuspense<TData = CoreSpacesList["response"], TQueryKey extends QueryKey = CoreSpacesListSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<CoreSpacesList["response"], CoreSpacesList["error"], TData, TQueryKey>>;
    client?: CoreSpacesList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CoreSpacesList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? coreSpacesListSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...coreSpacesListSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CoreSpacesList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}