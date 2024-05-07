import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreDietaryOptionsCreateMutationRequest,
  CoreDietaryOptionsCreateMutationResponse,
} from "../types/CoreDietaryOptionsCreate";

type CoreDietaryOptionsCreateClient = typeof client<
  CoreDietaryOptionsCreateMutationResponse,
  never,
  CoreDietaryOptionsCreateMutationRequest
>;
type CoreDietaryOptionsCreate = {
  data: CoreDietaryOptionsCreateMutationResponse;
  error: never;
  request: CoreDietaryOptionsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreDietaryOptionsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreDietaryOptionsCreateClient>[0]>;
    return: Awaited<ReturnType<CoreDietaryOptionsCreateClient>>;
  };
};
/**
 * @link /core/dietary-options/
 */
export function useCoreDietaryOptionsCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreDietaryOptionsCreate["response"],
      CoreDietaryOptionsCreate["error"],
      CoreDietaryOptionsCreate["request"]
    >;
    client?: CoreDietaryOptionsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreDietaryOptionsCreate["data"],
        CoreDietaryOptionsCreate["error"],
        CoreDietaryOptionsCreate["request"]
      >({
        method: "post",
        url: `/core/dietary-options/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
