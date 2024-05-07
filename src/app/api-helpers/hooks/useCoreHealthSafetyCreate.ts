import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreHealthSafetyCreateMutationRequest,
  CoreHealthSafetyCreateMutationResponse,
} from "../types/CoreHealthSafetyCreate";

type CoreHealthSafetyCreateClient = typeof client<
  CoreHealthSafetyCreateMutationResponse,
  never,
  CoreHealthSafetyCreateMutationRequest
>;
type CoreHealthSafetyCreate = {
  data: CoreHealthSafetyCreateMutationResponse;
  error: never;
  request: CoreHealthSafetyCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreHealthSafetyCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreHealthSafetyCreateClient>[0]>;
    return: Awaited<ReturnType<CoreHealthSafetyCreateClient>>;
  };
};
/**
 * @description API endpoint for managing healthSafety.
 * @link /core/health-safety/
 */
export function useCoreHealthSafetyCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreHealthSafetyCreate["response"],
      CoreHealthSafetyCreate["error"],
      CoreHealthSafetyCreate["request"]
    >;
    client?: CoreHealthSafetyCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreHealthSafetyCreate["data"],
        CoreHealthSafetyCreate["error"],
        CoreHealthSafetyCreate["request"]
      >({
        method: "post",
        url: `/core/health-safety/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
