import client from "../../client";
import { useMutation } from "@tanstack/react-query";
import type { CoreBookingsDeleteMutationResponse, CoreBookingsDeletePathParams } from "../types/CoreBookingsDelete";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CoreBookingsDeleteClient = typeof client<CoreBookingsDeleteMutationResponse, never, never>;
type CoreBookingsDelete = {
    data: CoreBookingsDeleteMutationResponse;
    error: never;
    request: never;
    pathParams: CoreBookingsDeletePathParams;
    queryParams: never;
    headerParams: never;
    response: CoreBookingsDeleteMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreBookingsDeleteClient>[0]>;
        return: Awaited<ReturnType<CoreBookingsDeleteClient>>;
    };
};
/**
 * @description API endpoint for managing bookings.
 * @link /core/bookings/:id/
 */
export function useCoreBookingsDelete(id: CoreBookingsDeletePathParams["id"], options: {
    mutation?: UseMutationOptions<CoreBookingsDelete["response"], CoreBookingsDelete["error"], CoreBookingsDelete["request"]>;
    client?: CoreBookingsDelete["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<CoreBookingsDelete["data"], CoreBookingsDelete["error"], CoreBookingsDelete["request"]>({
                method: "delete",
                url: `/core/bookings/${id}/`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}