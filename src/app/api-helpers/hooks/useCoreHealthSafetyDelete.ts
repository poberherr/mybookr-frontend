import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreHealthSafetyDeleteMutationResponse,
  CoreHealthSafetyDeletePathParams,
} from "../types/CoreHealthSafetyDelete";

type CoreHealthSafetyDeleteClient = typeof client<
  CoreHealthSafetyDeleteMutationResponse,
  never,
  never
>;
type CoreHealthSafetyDelete = {
  data: CoreHealthSafetyDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreHealthSafetyDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreHealthSafetyDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreHealthSafetyDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreHealthSafetyDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing healthSafety.
 * @link /core/health-safety/:id/
 */
export function useCoreHealthSafetyDelete(
  id: CoreHealthSafetyDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreHealthSafetyDelete["response"],
      CoreHealthSafetyDelete["error"],
      CoreHealthSafetyDelete["request"]
    >;
    client?: CoreHealthSafetyDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreHealthSafetyDelete["data"],
        CoreHealthSafetyDelete["error"],
        CoreHealthSafetyDelete["request"]
      >({
        method: "delete",
        url: `/core/health-safety/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
