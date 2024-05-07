import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreReviewsUpdateMutationRequest,
  CoreReviewsUpdateMutationResponse,
  CoreReviewsUpdatePathParams,
} from "../types/CoreReviewsUpdate";

type CoreReviewsUpdateClient = typeof client<
  CoreReviewsUpdateMutationResponse,
  never,
  CoreReviewsUpdateMutationRequest
>;
type CoreReviewsUpdate = {
  data: CoreReviewsUpdateMutationResponse;
  error: never;
  request: CoreReviewsUpdateMutationRequest;
  pathParams: CoreReviewsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreReviewsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreReviewsUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreReviewsUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing reviews.
 * @link /core/reviews/:id/
 */
export function useCoreReviewsUpdate(
  id: CoreReviewsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreReviewsUpdate["response"],
      CoreReviewsUpdate["error"],
      CoreReviewsUpdate["request"]
    >;
    client?: CoreReviewsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreReviewsUpdate["data"],
        CoreReviewsUpdate["error"],
        CoreReviewsUpdate["request"]
      >({
        method: "put",
        url: `/core/reviews/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
