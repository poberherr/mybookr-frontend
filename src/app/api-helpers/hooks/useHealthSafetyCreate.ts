import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  HealthSafetyCreateMutationRequest,
  HealthSafetyCreateMutationResponse,
} from "../types/HealthSafetyCreate";

type HealthSafetyCreateClient = typeof client<
  HealthSafetyCreateMutationResponse,
  never,
  HealthSafetyCreateMutationRequest
>;
type HealthSafetyCreate = {
  data: HealthSafetyCreateMutationResponse;
  error: never;
  request: HealthSafetyCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: HealthSafetyCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<HealthSafetyCreateClient>[0]>;
    return: Awaited<ReturnType<HealthSafetyCreateClient>>;
  };
};
/**
 * @description API endpoint for managing healthSafety.
 * @link /health-safety/
 */
export function useHealthSafetyCreate(
  options: {
    mutation?: UseMutationOptions<
      HealthSafetyCreate["response"],
      HealthSafetyCreate["error"],
      HealthSafetyCreate["request"]
    >;
    client?: HealthSafetyCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        HealthSafetyCreate["data"],
        HealthSafetyCreate["error"],
        HealthSafetyCreate["request"]
      >({
        method: "post",
        url: `/health-safety/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
