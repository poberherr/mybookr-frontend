import client from "../../client";
import { useMutation } from "@tanstack/react-query";
import type { CoreMessagesCreateMutationRequest, CoreMessagesCreateMutationResponse } from "../types/CoreMessagesCreate";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CoreMessagesCreateClient = typeof client<CoreMessagesCreateMutationResponse, never, CoreMessagesCreateMutationRequest>;
type CoreMessagesCreate = {
    data: CoreMessagesCreateMutationResponse;
    error: never;
    request: CoreMessagesCreateMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreMessagesCreateMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreMessagesCreateClient>[0]>;
        return: Awaited<ReturnType<CoreMessagesCreateClient>>;
    };
};
/**
 * @description API endpoint for managing messages.
 * @link /core/messages/
 */
export function useCoreMessagesCreate(options: {
    mutation?: UseMutationOptions<CoreMessagesCreate["response"], CoreMessagesCreate["error"], CoreMessagesCreate["request"]>;
    client?: CoreMessagesCreate["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CoreMessagesCreate["data"], CoreMessagesCreate["error"], CoreMessagesCreate["request"]>({
                method: "post",
                url: `/core/messages/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}