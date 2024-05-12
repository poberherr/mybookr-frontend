import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  AccessibilityUpdateMutationRequest,
  AccessibilityUpdateMutationResponse,
  AccessibilityUpdatePathParams,
} from "../types/AccessibilityUpdate";

type AccessibilityUpdateClient = typeof client<
  AccessibilityUpdateMutationResponse,
  never,
  AccessibilityUpdateMutationRequest
>;
type AccessibilityUpdate = {
  data: AccessibilityUpdateMutationResponse;
  error: never;
  request: AccessibilityUpdateMutationRequest;
  pathParams: AccessibilityUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: AccessibilityUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<AccessibilityUpdateClient>[0]>;
    return: Awaited<ReturnType<AccessibilityUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing accessibility.
 * @link /accessibility/:id/
 */
export function useAccessibilityUpdate(
  id: AccessibilityUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      AccessibilityUpdate["response"],
      AccessibilityUpdate["error"],
      AccessibilityUpdate["request"]
    >;
    client?: AccessibilityUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        AccessibilityUpdate["data"],
        AccessibilityUpdate["error"],
        AccessibilityUpdate["request"]
      >({
        method: "put",
        url: `/accessibility/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
