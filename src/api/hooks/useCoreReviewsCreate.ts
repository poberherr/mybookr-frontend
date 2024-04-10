import client from "../../client";
import { useMutation } from "@tanstack/react-query";
import type { CoreReviewsCreateMutationRequest, CoreReviewsCreateMutationResponse } from "../types/CoreReviewsCreate";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CoreReviewsCreateClient = typeof client<CoreReviewsCreateMutationResponse, never, CoreReviewsCreateMutationRequest>;
type CoreReviewsCreate = {
    data: CoreReviewsCreateMutationResponse;
    error: never;
    request: CoreReviewsCreateMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CoreReviewsCreateMutationResponse;
    client: {
        parameters: Partial<Parameters<CoreReviewsCreateClient>[0]>;
        return: Awaited<ReturnType<CoreReviewsCreateClient>>;
    };
};
/**
 * @description API endpoint for managing reviews.
 * @link /core/reviews/
 */
export function useCoreReviewsCreate(options: {
    mutation?: UseMutationOptions<CoreReviewsCreate["response"], CoreReviewsCreate["error"], CoreReviewsCreate["request"]>;
    client?: CoreReviewsCreate["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CoreReviewsCreate["data"], CoreReviewsCreate["error"], CoreReviewsCreate["request"]>({
                method: "post",
                url: `/core/reviews/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}