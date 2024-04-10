import client from "../../client";
import { useMutation } from "@tanstack/react-query";
import type { CoreAmenitiesUpdateMutationRequest, CoreAmenitiesUpdateMutationResponse, CoreAmenitiesUpdatePathParams } from "../types/CoreAmenitiesUpdate";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CoreAmenitiesUpdateClient = typeof client<CoreAmenitiesUpdateMutationResponse, never, CoreAmenitiesUpdateMutationRequest>;
type CoreAmenitiesUpdate = {
    data: CoreAmenitiesUpdateMutationResponse;
    error: never;
    request: CoreAmenitiesUpdateMutationRequest;
    pathParams: CoreAmenitiesUpdatePathParams;
    queryParams: never;
    headerParams: never;
    response: CoreAmenitiesUpdateMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreAmenitiesUpdateClient>[0]>;
        return: Awaited<ReturnType<CoreAmenitiesUpdateClient>>;
    };
};
/**
 * @description API endpoint for managing amenities.
 * @link /core/amenities/:id/
 */
export function useCoreAmenitiesUpdate(id: CoreAmenitiesUpdatePathParams["id"], options: {
    mutation?: UseMutationOptions<CoreAmenitiesUpdate["response"], CoreAmenitiesUpdate["error"], CoreAmenitiesUpdate["request"]>;
    client?: CoreAmenitiesUpdate["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CoreAmenitiesUpdate["data"], CoreAmenitiesUpdate["error"], CoreAmenitiesUpdate["request"]>({
                method: "put",
                url: `/core/amenities/${id}/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}