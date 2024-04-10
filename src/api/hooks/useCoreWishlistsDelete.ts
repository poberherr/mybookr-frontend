import client from "../../client";
import { useMutation } from "@tanstack/react-query";
import type { CoreWishlistsDeleteMutationResponse, CoreWishlistsDeletePathParams } from "../types/CoreWishlistsDelete";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CoreWishlistsDeleteClient = typeof client<CoreWishlistsDeleteMutationResponse, never, never>;
type CoreWishlistsDelete = {
    data: CoreWishlistsDeleteMutationResponse;
    error: never;
    request: never;
    pathParams: CoreWishlistsDeletePathParams;
    queryParams: never;
    headerParams: never;
    response: CoreWishlistsDeleteMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreWishlistsDeleteClient>[0]>;
        return: Awaited<ReturnType<CoreWishlistsDeleteClient>>;
    };
};
/**
 * @description API endpoint for managing wishlists.
 * @link /core/wishlists/:id/
 */
export function useCoreWishlistsDelete(id: CoreWishlistsDeletePathParams["id"], options: {
    mutation?: UseMutationOptions<CoreWishlistsDelete["response"], CoreWishlistsDelete["error"], CoreWishlistsDelete["request"]>;
    client?: CoreWishlistsDelete["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<CoreWishlistsDelete["data"], CoreWishlistsDelete["error"], CoreWishlistsDelete["request"]>({
                method: "delete",
                url: `/core/wishlists/${id}/`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}