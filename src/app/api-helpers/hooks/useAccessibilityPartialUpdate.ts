import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  AccessibilityPartialUpdateMutationRequest,
  AccessibilityPartialUpdateMutationResponse,
  AccessibilityPartialUpdatePathParams,
} from "../types/AccessibilityPartialUpdate";

type AccessibilityPartialUpdateClient = typeof client<
  AccessibilityPartialUpdateMutationResponse,
  never,
  AccessibilityPartialUpdateMutationRequest
>;
type AccessibilityPartialUpdate = {
  data: AccessibilityPartialUpdateMutationResponse;
  error: never;
  request: AccessibilityPartialUpdateMutationRequest;
  pathParams: AccessibilityPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: AccessibilityPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<AccessibilityPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<AccessibilityPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing accessibility.
 * @link /accessibility/:id/
 */
export function useAccessibilityPartialUpdate(
  id: AccessibilityPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      AccessibilityPartialUpdate["response"],
      AccessibilityPartialUpdate["error"],
      AccessibilityPartialUpdate["request"]
    >;
    client?: AccessibilityPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        AccessibilityPartialUpdate["data"],
        AccessibilityPartialUpdate["error"],
        AccessibilityPartialUpdate["request"]
      >({
        method: "patch",
        url: `/accessibility/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
