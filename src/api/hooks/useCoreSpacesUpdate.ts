import client from "../../client";
import { useMutation } from "@tanstack/react-query";
import type { CoreSpacesUpdateMutationRequest, CoreSpacesUpdateMutationResponse, CoreSpacesUpdatePathParams } from "../types/CoreSpacesUpdate";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CoreSpacesUpdateClient = typeof client<CoreSpacesUpdateMutationResponse, never, CoreSpacesUpdateMutationRequest>;
type CoreSpacesUpdate = {
    data: CoreSpacesUpdateMutationResponse;
    error: never;
    request: CoreSpacesUpdateMutationRequest;
    pathParams: CoreSpacesUpdatePathParams;
    queryParams: never;
    headerParams: never;
    response: CoreSpacesUpdateMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreSpacesUpdateClient>[0]>;
        return: Awaited<ReturnType<CoreSpacesUpdateClient>>;
    };
};
/**
 * @description API endpoint for managing spaces.
 * @link /core/spaces/:id/
 */
export function useCoreSpacesUpdate(id: CoreSpacesUpdatePathParams["id"], options: {
    mutation?: UseMutationOptions<CoreSpacesUpdate["response"], CoreSpacesUpdate["error"], CoreSpacesUpdate["request"]>;
    client?: CoreSpacesUpdate["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CoreSpacesUpdate["data"], CoreSpacesUpdate["error"], CoreSpacesUpdate["request"]>({
                method: "put",
                url: `/core/spaces/${id}/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}