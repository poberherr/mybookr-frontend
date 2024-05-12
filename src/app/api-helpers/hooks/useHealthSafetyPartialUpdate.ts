import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  HealthSafetyPartialUpdateMutationRequest,
  HealthSafetyPartialUpdateMutationResponse,
  HealthSafetyPartialUpdatePathParams,
} from "../types/HealthSafetyPartialUpdate";

type HealthSafetyPartialUpdateClient = typeof client<
  HealthSafetyPartialUpdateMutationResponse,
  never,
  HealthSafetyPartialUpdateMutationRequest
>;
type HealthSafetyPartialUpdate = {
  data: HealthSafetyPartialUpdateMutationResponse;
  error: never;
  request: HealthSafetyPartialUpdateMutationRequest;
  pathParams: HealthSafetyPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: HealthSafetyPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<HealthSafetyPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<HealthSafetyPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing healthSafety.
 * @link /health-safety/:id/
 */
export function useHealthSafetyPartialUpdate(
  id: HealthSafetyPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      HealthSafetyPartialUpdate["response"],
      HealthSafetyPartialUpdate["error"],
      HealthSafetyPartialUpdate["request"]
    >;
    client?: HealthSafetyPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        HealthSafetyPartialUpdate["data"],
        HealthSafetyPartialUpdate["error"],
        HealthSafetyPartialUpdate["request"]
      >({
        method: "patch",
        url: `/health-safety/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
