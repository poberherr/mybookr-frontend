import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreMessagesUpdateMutationRequest,
  CoreMessagesUpdateMutationResponse,
  CoreMessagesUpdatePathParams,
} from "../types/CoreMessagesUpdate";

type CoreMessagesUpdateClient = typeof client<
  CoreMessagesUpdateMutationResponse,
  never,
  CoreMessagesUpdateMutationRequest
>;
type CoreMessagesUpdate = {
  data: CoreMessagesUpdateMutationResponse;
  error: never;
  request: CoreMessagesUpdateMutationRequest;
  pathParams: CoreMessagesUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreMessagesUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreMessagesUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreMessagesUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing messages.
 * @link /core/messages/:id/
 */
export function useCoreMessagesUpdate(
  id: CoreMessagesUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreMessagesUpdate["response"],
      CoreMessagesUpdate["error"],
      CoreMessagesUpdate["request"]
    >;
    client?: CoreMessagesUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreMessagesUpdate["data"],
        CoreMessagesUpdate["error"],
        CoreMessagesUpdate["request"]
      >({
        method: "put",
        url: `/core/messages/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
