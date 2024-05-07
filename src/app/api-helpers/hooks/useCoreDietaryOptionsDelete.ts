import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreDietaryOptionsDeleteMutationResponse,
  CoreDietaryOptionsDeletePathParams,
} from "../types/CoreDietaryOptionsDelete";

type CoreDietaryOptionsDeleteClient = typeof client<
  CoreDietaryOptionsDeleteMutationResponse,
  never,
  never
>;
type CoreDietaryOptionsDelete = {
  data: CoreDietaryOptionsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreDietaryOptionsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreDietaryOptionsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreDietaryOptionsDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreDietaryOptionsDeleteClient>>;
  };
};
/**
 * @link /core/dietary-options/:id/
 */
export function useCoreDietaryOptionsDelete(
  id: CoreDietaryOptionsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreDietaryOptionsDelete["response"],
      CoreDietaryOptionsDelete["error"],
      CoreDietaryOptionsDelete["request"]
    >;
    client?: CoreDietaryOptionsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreDietaryOptionsDelete["data"],
        CoreDietaryOptionsDelete["error"],
        CoreDietaryOptionsDelete["request"]
      >({
        method: "delete",
        url: `/core/dietary-options/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
