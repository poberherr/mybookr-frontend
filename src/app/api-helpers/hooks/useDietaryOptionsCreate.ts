import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  DietaryOptionsCreateMutationRequest,
  DietaryOptionsCreateMutationResponse,
} from "../types/DietaryOptionsCreate";

type DietaryOptionsCreateClient = typeof client<
  DietaryOptionsCreateMutationResponse,
  never,
  DietaryOptionsCreateMutationRequest
>;
type DietaryOptionsCreate = {
  data: DietaryOptionsCreateMutationResponse;
  error: never;
  request: DietaryOptionsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: DietaryOptionsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<DietaryOptionsCreateClient>[0]>;
    return: Awaited<ReturnType<DietaryOptionsCreateClient>>;
  };
};
/**
 * @link /dietary-options/
 */
export function useDietaryOptionsCreate(
  options: {
    mutation?: UseMutationOptions<
      DietaryOptionsCreate["response"],
      DietaryOptionsCreate["error"],
      DietaryOptionsCreate["request"]
    >;
    client?: DietaryOptionsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        DietaryOptionsCreate["data"],
        DietaryOptionsCreate["error"],
        DietaryOptionsCreate["request"]
      >({
        method: "post",
        url: `/dietary-options/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
