import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreReviewsPartialUpdateMutationRequest,
  CoreReviewsPartialUpdateMutationResponse,
  CoreReviewsPartialUpdatePathParams,
} from "../types/CoreReviewsPartialUpdate";

type CoreReviewsPartialUpdateClient = typeof client<
  CoreReviewsPartialUpdateMutationResponse,
  never,
  CoreReviewsPartialUpdateMutationRequest
>;
type CoreReviewsPartialUpdate = {
  data: CoreReviewsPartialUpdateMutationResponse;
  error: never;
  request: CoreReviewsPartialUpdateMutationRequest;
  pathParams: CoreReviewsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreReviewsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreReviewsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreReviewsPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing reviews.
 * @link /core/reviews/:id/
 */
export function useCoreReviewsPartialUpdate(
  id: CoreReviewsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreReviewsPartialUpdate["response"],
      CoreReviewsPartialUpdate["error"],
      CoreReviewsPartialUpdate["request"]
    >;
    client?: CoreReviewsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreReviewsPartialUpdate["data"],
        CoreReviewsPartialUpdate["error"],
        CoreReviewsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/reviews/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
