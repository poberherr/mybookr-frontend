import client from "../../client";
import { useMutation } from "@tanstack/react-query";
import type { CoreSpacesCreateMutationRequest, CoreSpacesCreateMutationResponse } from "../types/CoreSpacesCreate";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CoreSpacesCreateClient = typeof client<CoreSpacesCreateMutationResponse, never, CoreSpacesCreateMutationRequest>;
type CoreSpacesCreate = {
    data: CoreSpacesCreateMutationResponse;
    error: never;
    request: CoreSpacesCreateMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreSpacesCreateMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreSpacesCreateClient>[0]>;
        return: Awaited<ReturnType<CoreSpacesCreateClient>>;
    };
};
/**
 * @description API endpoint for managing spaces.
 * @link /core/spaces/
 */
export function useCoreSpacesCreate(options: {
    mutation?: UseMutationOptions<CoreSpacesCreate["response"], CoreSpacesCreate["error"], CoreSpacesCreate["request"]>;
    client?: CoreSpacesCreate["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CoreSpacesCreate["data"], CoreSpacesCreate["error"], CoreSpacesCreate["request"]>({
                method: "post",
                url: `/core/spaces/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}