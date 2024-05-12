import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  HealthSafetyDeleteMutationResponse,
  HealthSafetyDeletePathParams,
} from "../types/HealthSafetyDelete";

type HealthSafetyDeleteClient = typeof client<
  HealthSafetyDeleteMutationResponse,
  never,
  never
>;
type HealthSafetyDelete = {
  data: HealthSafetyDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: HealthSafetyDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: HealthSafetyDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<HealthSafetyDeleteClient>[0]>;
    return: Awaited<ReturnType<HealthSafetyDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing healthSafety.
 * @link /health-safety/:id/
 */
export function useHealthSafetyDelete(
  id: HealthSafetyDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      HealthSafetyDelete["response"],
      HealthSafetyDelete["error"],
      HealthSafetyDelete["request"]
    >;
    client?: HealthSafetyDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        HealthSafetyDelete["data"],
        HealthSafetyDelete["error"],
        HealthSafetyDelete["request"]
      >({
        method: "delete",
        url: `/health-safety/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
