import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreAccessibilityPartialUpdateMutationRequest,
  CoreAccessibilityPartialUpdateMutationResponse,
  CoreAccessibilityPartialUpdatePathParams,
} from "../types/CoreAccessibilityPartialUpdate";

type CoreAccessibilityPartialUpdateClient = typeof client<
  CoreAccessibilityPartialUpdateMutationResponse,
  never,
  CoreAccessibilityPartialUpdateMutationRequest
>;
type CoreAccessibilityPartialUpdate = {
  data: CoreAccessibilityPartialUpdateMutationResponse;
  error: never;
  request: CoreAccessibilityPartialUpdateMutationRequest;
  pathParams: CoreAccessibilityPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreAccessibilityPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreAccessibilityPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreAccessibilityPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing accessibility.
 * @link /core/accessibility/:id/
 */
export function useCoreAccessibilityPartialUpdate(
  id: CoreAccessibilityPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreAccessibilityPartialUpdate["response"],
      CoreAccessibilityPartialUpdate["error"],
      CoreAccessibilityPartialUpdate["request"]
    >;
    client?: CoreAccessibilityPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreAccessibilityPartialUpdate["data"],
        CoreAccessibilityPartialUpdate["error"],
        CoreAccessibilityPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/accessibility/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
