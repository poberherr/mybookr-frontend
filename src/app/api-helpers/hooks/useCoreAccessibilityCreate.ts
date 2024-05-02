import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreAccessibilityCreateMutationRequest,
  CoreAccessibilityCreateMutationResponse,
} from "../types/CoreAccessibilityCreate";

type CoreAccessibilityCreateClient = typeof client<
  CoreAccessibilityCreateMutationResponse,
  never,
  CoreAccessibilityCreateMutationRequest
>;
type CoreAccessibilityCreate = {
  data: CoreAccessibilityCreateMutationResponse;
  error: never;
  request: CoreAccessibilityCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreAccessibilityCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreAccessibilityCreateClient>[0]>;
    return: Awaited<ReturnType<CoreAccessibilityCreateClient>>;
  };
};
/**
 * @description API endpoint for managing accessibility.
 * @link /core/accessibility/
 */
export function useCoreAccessibilityCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreAccessibilityCreate["response"],
      CoreAccessibilityCreate["error"],
      CoreAccessibilityCreate["request"]
    >;
    client?: CoreAccessibilityCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreAccessibilityCreate["data"],
        CoreAccessibilityCreate["error"],
        CoreAccessibilityCreate["request"]
      >({
        method: "post",
        url: `/core/accessibility/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
