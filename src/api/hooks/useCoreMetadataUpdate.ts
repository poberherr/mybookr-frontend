import client from "../../client";
import { useMutation } from "@tanstack/react-query";
import type { CoreMetadataUpdateMutationRequest, CoreMetadataUpdateMutationResponse, CoreMetadataUpdatePathParams } from "../types/CoreMetadataUpdate";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CoreMetadataUpdateClient = typeof client<CoreMetadataUpdateMutationResponse, never, CoreMetadataUpdateMutationRequest>;
type CoreMetadataUpdate = {
    data: CoreMetadataUpdateMutationResponse;
    error: never;
    request: CoreMetadataUpdateMutationRequest;
    pathParams: CoreMetadataUpdatePathParams;
    queryParams: never;
    headerParams: never;
    response: CoreMetadataUpdateMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreMetadataUpdateClient>[0]>;
        return: Awaited<ReturnType<CoreMetadataUpdateClient>>;
    };
};
/**
 * @description API endpoint for managing meta data.
 * @link /core/metadata/:id/
 */
export function useCoreMetadataUpdate(id: CoreMetadataUpdatePathParams["id"], options: {
    mutation?: UseMutationOptions<CoreMetadataUpdate["response"], CoreMetadataUpdate["error"], CoreMetadataUpdate["request"]>;
    client?: CoreMetadataUpdate["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CoreMetadataUpdate["data"], CoreMetadataUpdate["error"], CoreMetadataUpdate["request"]>({
                method: "put",
                url: `/core/metadata/${id}/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}