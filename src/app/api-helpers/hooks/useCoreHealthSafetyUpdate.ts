import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreHealthSafetyUpdateMutationRequest,
  CoreHealthSafetyUpdateMutationResponse,
  CoreHealthSafetyUpdatePathParams,
} from "../types/CoreHealthSafetyUpdate";

type CoreHealthSafetyUpdateClient = typeof client<
  CoreHealthSafetyUpdateMutationResponse,
  never,
  CoreHealthSafetyUpdateMutationRequest
>;
type CoreHealthSafetyUpdate = {
  data: CoreHealthSafetyUpdateMutationResponse;
  error: never;
  request: CoreHealthSafetyUpdateMutationRequest;
  pathParams: CoreHealthSafetyUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreHealthSafetyUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreHealthSafetyUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreHealthSafetyUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing healthSafety.
 * @link /core/health-safety/:id/
 */
export function useCoreHealthSafetyUpdate(
  id: CoreHealthSafetyUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreHealthSafetyUpdate["response"],
      CoreHealthSafetyUpdate["error"],
      CoreHealthSafetyUpdate["request"]
    >;
    client?: CoreHealthSafetyUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreHealthSafetyUpdate["data"],
        CoreHealthSafetyUpdate["error"],
        CoreHealthSafetyUpdate["request"]
      >({
        method: "put",
        url: `/core/health-safety/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
