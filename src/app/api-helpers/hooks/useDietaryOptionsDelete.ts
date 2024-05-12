import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  DietaryOptionsDeleteMutationResponse,
  DietaryOptionsDeletePathParams,
} from "../types/DietaryOptionsDelete";

type DietaryOptionsDeleteClient = typeof client<
  DietaryOptionsDeleteMutationResponse,
  never,
  never
>;
type DietaryOptionsDelete = {
  data: DietaryOptionsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: DietaryOptionsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: DietaryOptionsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<DietaryOptionsDeleteClient>[0]>;
    return: Awaited<ReturnType<DietaryOptionsDeleteClient>>;
  };
};
/**
 * @link /dietary-options/:id/
 */
export function useDietaryOptionsDelete(
  id: DietaryOptionsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      DietaryOptionsDelete["response"],
      DietaryOptionsDelete["error"],
      DietaryOptionsDelete["request"]
    >;
    client?: DietaryOptionsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        DietaryOptionsDelete["data"],
        DietaryOptionsDelete["error"],
        DietaryOptionsDelete["request"]
      >({
        method: "delete",
        url: `/dietary-options/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
