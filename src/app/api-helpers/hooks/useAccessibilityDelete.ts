import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  AccessibilityDeleteMutationResponse,
  AccessibilityDeletePathParams,
} from "../types/AccessibilityDelete";

type AccessibilityDeleteClient = typeof client<
  AccessibilityDeleteMutationResponse,
  never,
  never
>;
type AccessibilityDelete = {
  data: AccessibilityDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: AccessibilityDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: AccessibilityDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<AccessibilityDeleteClient>[0]>;
    return: Awaited<ReturnType<AccessibilityDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing accessibility.
 * @link /accessibility/:id/
 */
export function useAccessibilityDelete(
  id: AccessibilityDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      AccessibilityDelete["response"],
      AccessibilityDelete["error"],
      AccessibilityDelete["request"]
    >;
    client?: AccessibilityDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        AccessibilityDelete["data"],
        AccessibilityDelete["error"],
        AccessibilityDelete["request"]
      >({
        method: "delete",
        url: `/accessibility/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
