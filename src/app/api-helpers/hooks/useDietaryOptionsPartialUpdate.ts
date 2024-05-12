import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  DietaryOptionsPartialUpdateMutationRequest,
  DietaryOptionsPartialUpdateMutationResponse,
  DietaryOptionsPartialUpdatePathParams,
} from "../types/DietaryOptionsPartialUpdate";

type DietaryOptionsPartialUpdateClient = typeof client<
  DietaryOptionsPartialUpdateMutationResponse,
  never,
  DietaryOptionsPartialUpdateMutationRequest
>;
type DietaryOptionsPartialUpdate = {
  data: DietaryOptionsPartialUpdateMutationResponse;
  error: never;
  request: DietaryOptionsPartialUpdateMutationRequest;
  pathParams: DietaryOptionsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: DietaryOptionsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<DietaryOptionsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<DietaryOptionsPartialUpdateClient>>;
  };
};
/**
 * @link /dietary-options/:id/
 */
export function useDietaryOptionsPartialUpdate(
  id: DietaryOptionsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      DietaryOptionsPartialUpdate["response"],
      DietaryOptionsPartialUpdate["error"],
      DietaryOptionsPartialUpdate["request"]
    >;
    client?: DietaryOptionsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        DietaryOptionsPartialUpdate["data"],
        DietaryOptionsPartialUpdate["error"],
        DietaryOptionsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/dietary-options/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
