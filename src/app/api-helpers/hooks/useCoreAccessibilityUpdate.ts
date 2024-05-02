import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreAccessibilityUpdateMutationRequest,
  CoreAccessibilityUpdateMutationResponse,
  CoreAccessibilityUpdatePathParams,
} from "../types/CoreAccessibilityUpdate";

type CoreAccessibilityUpdateClient = typeof client<
  CoreAccessibilityUpdateMutationResponse,
  never,
  CoreAccessibilityUpdateMutationRequest
>;
type CoreAccessibilityUpdate = {
  data: CoreAccessibilityUpdateMutationResponse;
  error: never;
  request: CoreAccessibilityUpdateMutationRequest;
  pathParams: CoreAccessibilityUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreAccessibilityUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreAccessibilityUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreAccessibilityUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing accessibility.
 * @link /core/accessibility/:id/
 */
export function useCoreAccessibilityUpdate(
  id: CoreAccessibilityUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreAccessibilityUpdate["response"],
      CoreAccessibilityUpdate["error"],
      CoreAccessibilityUpdate["request"]
    >;
    client?: CoreAccessibilityUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreAccessibilityUpdate["data"],
        CoreAccessibilityUpdate["error"],
        CoreAccessibilityUpdate["request"]
      >({
        method: "put",
        url: `/core/accessibility/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
