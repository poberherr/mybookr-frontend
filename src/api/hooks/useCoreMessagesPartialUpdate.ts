import client from "../../client";
import { useMutation } from "@tanstack/react-query";
import type { CoreMessagesPartialUpdateMutationRequest, CoreMessagesPartialUpdateMutationResponse, CoreMessagesPartialUpdatePathParams } from "../types/CoreMessagesPartialUpdate";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CoreMessagesPartialUpdateClient = typeof client<CoreMessagesPartialUpdateMutationResponse, never, CoreMessagesPartialUpdateMutationRequest>;
type CoreMessagesPartialUpdate = {
    data: CoreMessagesPartialUpdateMutationResponse;
    error: never;
    request: CoreMessagesPartialUpdateMutationRequest;
    pathParams: CoreMessagesPartialUpdatePathParams;
    queryParams: never;
    headerParams: never;
    response: CoreMessagesPartialUpdateMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreMessagesPartialUpdateClient>[0]>;
        return: Awaited<ReturnType<CoreMessagesPartialUpdateClient>>;
    };
};
/**
 * @description API endpoint for managing messages.
 * @link /core/messages/:id/
 */
export function useCoreMessagesPartialUpdate(id: CoreMessagesPartialUpdatePathParams["id"], options: {
    mutation?: UseMutationOptions<CoreMessagesPartialUpdate["response"], CoreMessagesPartialUpdate["error"], CoreMessagesPartialUpdate["request"]>;
    client?: CoreMessagesPartialUpdate["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CoreMessagesPartialUpdate["data"], CoreMessagesPartialUpdate["error"], CoreMessagesPartialUpdate["request"]>({
                method: "patch",
                url: `/core/messages/${id}/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}