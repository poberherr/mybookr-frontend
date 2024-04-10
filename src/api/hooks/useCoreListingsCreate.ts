import client from "../../client";
import { useMutation } from "@tanstack/react-query";
import type { CoreListingsCreateMutationRequest, CoreListingsCreateMutationResponse } from "../types/CoreListingsCreate";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CoreListingsCreateClient = typeof client<CoreListingsCreateMutationResponse, never, CoreListingsCreateMutationRequest>;
type CoreListingsCreate = {
    data: CoreListingsCreateMutationResponse;
    error: never;
    request: CoreListingsCreateMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreListingsCreateMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreListingsCreateClient>[0]>;
        return: Awaited<ReturnType<CoreListingsCreateClient>>;
    };
};
/**
 * @link /core/listings/
 */
export function useCoreListingsCreate(options: {
    mutation?: UseMutationOptions<CoreListingsCreate["response"], CoreListingsCreate["error"], CoreListingsCreate["request"]>;
    client?: CoreListingsCreate["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CoreListingsCreate["data"], CoreListingsCreate["error"], CoreListingsCreate["request"]>({
                method: "post",
                url: `/core/listings/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}