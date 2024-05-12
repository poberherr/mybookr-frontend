import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  AccessibilityCreateMutationRequest,
  AccessibilityCreateMutationResponse,
} from "../types/AccessibilityCreate";

type AccessibilityCreateClient = typeof client<
  AccessibilityCreateMutationResponse,
  never,
  AccessibilityCreateMutationRequest
>;
type AccessibilityCreate = {
  data: AccessibilityCreateMutationResponse;
  error: never;
  request: AccessibilityCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AccessibilityCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<AccessibilityCreateClient>[0]>;
    return: Awaited<ReturnType<AccessibilityCreateClient>>;
  };
};
/**
 * @description API endpoint for managing accessibility.
 * @link /accessibility/
 */
export function useAccessibilityCreate(
  options: {
    mutation?: UseMutationOptions<
      AccessibilityCreate["response"],
      AccessibilityCreate["error"],
      AccessibilityCreate["request"]
    >;
    client?: AccessibilityCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        AccessibilityCreate["data"],
        AccessibilityCreate["error"],
        AccessibilityCreate["request"]
      >({
        method: "post",
        url: `/accessibility/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
