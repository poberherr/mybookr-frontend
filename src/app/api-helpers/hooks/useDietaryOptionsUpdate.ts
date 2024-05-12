import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  DietaryOptionsUpdateMutationRequest,
  DietaryOptionsUpdateMutationResponse,
  DietaryOptionsUpdatePathParams,
} from "../types/DietaryOptionsUpdate";

type DietaryOptionsUpdateClient = typeof client<
  DietaryOptionsUpdateMutationResponse,
  never,
  DietaryOptionsUpdateMutationRequest
>;
type DietaryOptionsUpdate = {
  data: DietaryOptionsUpdateMutationResponse;
  error: never;
  request: DietaryOptionsUpdateMutationRequest;
  pathParams: DietaryOptionsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: DietaryOptionsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<DietaryOptionsUpdateClient>[0]>;
    return: Awaited<ReturnType<DietaryOptionsUpdateClient>>;
  };
};
/**
 * @link /dietary-options/:id/
 */
export function useDietaryOptionsUpdate(
  id: DietaryOptionsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      DietaryOptionsUpdate["response"],
      DietaryOptionsUpdate["error"],
      DietaryOptionsUpdate["request"]
    >;
    client?: DietaryOptionsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        DietaryOptionsUpdate["data"],
        DietaryOptionsUpdate["error"],
        DietaryOptionsUpdate["request"]
      >({
        method: "put",
        url: `/dietary-options/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
