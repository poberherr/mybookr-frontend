import client from "../../client";
import { useMutation } from "@tanstack/react-query";
import type { ApiTokenCreateMutationRequest, ApiTokenCreateMutationResponse } from "../types/ApiTokenCreate";
import type { UseMutationOptions } from "@tanstack/react-query";

 type ApiTokenCreateClient = typeof client<ApiTokenCreateMutationResponse, never, ApiTokenCreateMutationRequest>;
type ApiTokenCreate = {
    data: ApiTokenCreateMutationResponse;
    error: never;
    request: ApiTokenCreateMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: ApiTokenCreateMutationResponse;
    client: {
        parameters: Partial<Parameters<ApiTokenCreateClient>[0]>;
        return: Awaited<ReturnType<ApiTokenCreateClient>>;
    };
};
/**
 * @description Takes a set of user credentials and returns an access and refresh JSON webtoken pair to prove the authentication of those credentials.
 * @link /api/token/
 */
export function useApiTokenCreate(options: {
    mutation?: UseMutationOptions<ApiTokenCreate["response"], ApiTokenCreate["error"], ApiTokenCreate["request"]>;
    client?: ApiTokenCreate["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<ApiTokenCreate["data"], ApiTokenCreate["error"], ApiTokenCreate["request"]>({
                method: "post",
                url: `/api/token/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}