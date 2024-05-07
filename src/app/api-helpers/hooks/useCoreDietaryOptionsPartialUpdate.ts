import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreDietaryOptionsPartialUpdateMutationRequest,
  CoreDietaryOptionsPartialUpdateMutationResponse,
  CoreDietaryOptionsPartialUpdatePathParams,
} from "../types/CoreDietaryOptionsPartialUpdate";

type CoreDietaryOptionsPartialUpdateClient = typeof client<
  CoreDietaryOptionsPartialUpdateMutationResponse,
  never,
  CoreDietaryOptionsPartialUpdateMutationRequest
>;
type CoreDietaryOptionsPartialUpdate = {
  data: CoreDietaryOptionsPartialUpdateMutationResponse;
  error: never;
  request: CoreDietaryOptionsPartialUpdateMutationRequest;
  pathParams: CoreDietaryOptionsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreDietaryOptionsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreDietaryOptionsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreDietaryOptionsPartialUpdateClient>>;
  };
};
/**
 * @link /core/dietary-options/:id/
 */
export function useCoreDietaryOptionsPartialUpdate(
  id: CoreDietaryOptionsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreDietaryOptionsPartialUpdate["response"],
      CoreDietaryOptionsPartialUpdate["error"],
      CoreDietaryOptionsPartialUpdate["request"]
    >;
    client?: CoreDietaryOptionsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreDietaryOptionsPartialUpdate["data"],
        CoreDietaryOptionsPartialUpdate["error"],
        CoreDietaryOptionsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/dietary-options/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
