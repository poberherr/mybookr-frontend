import client from "../../client";
import { useMutation } from "@tanstack/react-query";
import type { CoreFilterListingsCreateMutationResponse } from "../types/CoreFilterListingsCreate";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CoreFilterListingsCreateClient = typeof client<CoreFilterListingsCreateMutationResponse, never, never>;
type CoreFilterListingsCreate = {
    data: CoreFilterListingsCreateMutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreFilterListingsCreateMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreFilterListingsCreateClient>[0]>;
        return: Awaited<ReturnType<CoreFilterListingsCreateClient>>;
    };
};
/**
 * @description Post a JSON object with filtering criteria to get filtered listings.
 * @link /core/filter-listings/
 */
export function useCoreFilterListingsCreate(options: {
    mutation?: UseMutationOptions<CoreFilterListingsCreate["response"], CoreFilterListingsCreate["error"], CoreFilterListingsCreate["request"]>;
    client?: CoreFilterListingsCreate["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<CoreFilterListingsCreate["data"], CoreFilterListingsCreate["error"], CoreFilterListingsCreate["request"]>({
                method: "post",
                url: `/core/filter-listings/`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}