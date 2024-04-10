import client from "../../client";
import { useMutation } from "@tanstack/react-query";
import type { CoreAmenitiesDeleteMutationResponse, CoreAmenitiesDeletePathParams } from "../types/CoreAmenitiesDelete";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CoreAmenitiesDeleteClient = typeof client<CoreAmenitiesDeleteMutationResponse, never, never>;
type CoreAmenitiesDelete = {
    data: CoreAmenitiesDeleteMutationResponse;
    error: never;
    request: never;
    pathParams: CoreAmenitiesDeletePathParams;
    queryParams: never;
    headerParams: never;
    response: CoreAmenitiesDeleteMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreAmenitiesDeleteClient>[0]>;
        return: Awaited<ReturnType<CoreAmenitiesDeleteClient>>;
    };
};
/**
 * @description API endpoint for managing amenities.
 * @link /core/amenities/:id/
 */
export function useCoreAmenitiesDelete(id: CoreAmenitiesDeletePathParams["id"], options: {
    mutation?: UseMutationOptions<CoreAmenitiesDelete["response"], CoreAmenitiesDelete["error"], CoreAmenitiesDelete["request"]>;
    client?: CoreAmenitiesDelete["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<CoreAmenitiesDelete["data"], CoreAmenitiesDelete["error"], CoreAmenitiesDelete["request"]>({
                method: "delete",
                url: `/core/amenities/${id}/`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}