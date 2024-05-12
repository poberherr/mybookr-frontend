import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  HealthSafetyUpdateMutationRequest,
  HealthSafetyUpdateMutationResponse,
  HealthSafetyUpdatePathParams,
} from "../types/HealthSafetyUpdate";

type HealthSafetyUpdateClient = typeof client<
  HealthSafetyUpdateMutationResponse,
  never,
  HealthSafetyUpdateMutationRequest
>;
type HealthSafetyUpdate = {
  data: HealthSafetyUpdateMutationResponse;
  error: never;
  request: HealthSafetyUpdateMutationRequest;
  pathParams: HealthSafetyUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: HealthSafetyUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<HealthSafetyUpdateClient>[0]>;
    return: Awaited<ReturnType<HealthSafetyUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing healthSafety.
 * @link /health-safety/:id/
 */
export function useHealthSafetyUpdate(
  id: HealthSafetyUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      HealthSafetyUpdate["response"],
      HealthSafetyUpdate["error"],
      HealthSafetyUpdate["request"]
    >;
    client?: HealthSafetyUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        HealthSafetyUpdate["data"],
        HealthSafetyUpdate["error"],
        HealthSafetyUpdate["request"]
      >({
        method: "put",
        url: `/health-safety/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
