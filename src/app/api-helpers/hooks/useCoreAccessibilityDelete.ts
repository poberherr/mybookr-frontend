import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreAccessibilityDeleteMutationResponse,
  CoreAccessibilityDeletePathParams,
} from "../types/CoreAccessibilityDelete";

type CoreAccessibilityDeleteClient = typeof client<
  CoreAccessibilityDeleteMutationResponse,
  never,
  never
>;
type CoreAccessibilityDelete = {
  data: CoreAccessibilityDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreAccessibilityDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreAccessibilityDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreAccessibilityDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreAccessibilityDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing accessibility.
 * @link /core/accessibility/:id/
 */
export function useCoreAccessibilityDelete(
  id: CoreAccessibilityDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreAccessibilityDelete["response"],
      CoreAccessibilityDelete["error"],
      CoreAccessibilityDelete["request"]
    >;
    client?: CoreAccessibilityDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreAccessibilityDelete["data"],
        CoreAccessibilityDelete["error"],
        CoreAccessibilityDelete["request"]
      >({
        method: "delete",
        url: `/core/accessibility/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
