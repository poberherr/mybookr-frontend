import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreDietaryOptionsUpdateMutationRequest,
  CoreDietaryOptionsUpdateMutationResponse,
  CoreDietaryOptionsUpdatePathParams,
} from "../types/CoreDietaryOptionsUpdate";

type CoreDietaryOptionsUpdateClient = typeof client<
  CoreDietaryOptionsUpdateMutationResponse,
  never,
  CoreDietaryOptionsUpdateMutationRequest
>;
type CoreDietaryOptionsUpdate = {
  data: CoreDietaryOptionsUpdateMutationResponse;
  error: never;
  request: CoreDietaryOptionsUpdateMutationRequest;
  pathParams: CoreDietaryOptionsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreDietaryOptionsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreDietaryOptionsUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreDietaryOptionsUpdateClient>>;
  };
};
/**
 * @link /core/dietary-options/:id/
 */
export function useCoreDietaryOptionsUpdate(
  id: CoreDietaryOptionsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreDietaryOptionsUpdate["response"],
      CoreDietaryOptionsUpdate["error"],
      CoreDietaryOptionsUpdate["request"]
    >;
    client?: CoreDietaryOptionsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreDietaryOptionsUpdate["data"],
        CoreDietaryOptionsUpdate["error"],
        CoreDietaryOptionsUpdate["request"]
      >({
        method: "put",
        url: `/core/dietary-options/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
