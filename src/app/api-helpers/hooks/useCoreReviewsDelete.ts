import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreReviewsDeleteMutationResponse,
  CoreReviewsDeletePathParams,
} from "../types/CoreReviewsDelete";

type CoreReviewsDeleteClient = typeof client<
  CoreReviewsDeleteMutationResponse,
  never,
  never
>;
type CoreReviewsDelete = {
  data: CoreReviewsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreReviewsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreReviewsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreReviewsDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreReviewsDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing reviews.
 * @link /core/reviews/:id/
 */
export function useCoreReviewsDelete(
  id: CoreReviewsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreReviewsDelete["response"],
      CoreReviewsDelete["error"],
      CoreReviewsDelete["request"]
    >;
    client?: CoreReviewsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreReviewsDelete["data"],
        CoreReviewsDelete["error"],
        CoreReviewsDelete["request"]
      >({
        method: "delete",
        url: `/core/reviews/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
