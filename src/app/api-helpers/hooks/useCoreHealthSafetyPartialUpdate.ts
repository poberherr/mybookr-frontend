import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreHealthSafetyPartialUpdateMutationRequest,
  CoreHealthSafetyPartialUpdateMutationResponse,
  CoreHealthSafetyPartialUpdatePathParams,
} from "../types/CoreHealthSafetyPartialUpdate";

type CoreHealthSafetyPartialUpdateClient = typeof client<
  CoreHealthSafetyPartialUpdateMutationResponse,
  never,
  CoreHealthSafetyPartialUpdateMutationRequest
>;
type CoreHealthSafetyPartialUpdate = {
  data: CoreHealthSafetyPartialUpdateMutationResponse;
  error: never;
  request: CoreHealthSafetyPartialUpdateMutationRequest;
  pathParams: CoreHealthSafetyPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreHealthSafetyPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreHealthSafetyPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreHealthSafetyPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing healthSafety.
 * @link /core/health-safety/:id/
 */
export function useCoreHealthSafetyPartialUpdate(
  id: CoreHealthSafetyPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreHealthSafetyPartialUpdate["response"],
      CoreHealthSafetyPartialUpdate["error"],
      CoreHealthSafetyPartialUpdate["request"]
    >;
    client?: CoreHealthSafetyPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreHealthSafetyPartialUpdate["data"],
        CoreHealthSafetyPartialUpdate["error"],
        CoreHealthSafetyPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/health-safety/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
