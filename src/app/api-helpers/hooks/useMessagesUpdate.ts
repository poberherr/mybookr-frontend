import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  MessagesUpdateMutationRequest,
  MessagesUpdateMutationResponse,
  MessagesUpdatePathParams,
} from "../types/MessagesUpdate";

type MessagesUpdateClient = typeof client<
  MessagesUpdateMutationResponse,
  never,
  MessagesUpdateMutationRequest
>;
type MessagesUpdate = {
  data: MessagesUpdateMutationResponse;
  error: never;
  request: MessagesUpdateMutationRequest;
  pathParams: MessagesUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: MessagesUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<MessagesUpdateClient>[0]>;
    return: Awaited<ReturnType<MessagesUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing messages.
 * @link /messages/:id/
 */
export function useMessagesUpdate(
  id: MessagesUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      MessagesUpdate["response"],
      MessagesUpdate["error"],
      MessagesUpdate["request"]
    >;
    client?: MessagesUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        MessagesUpdate["data"],
        MessagesUpdate["error"],
        MessagesUpdate["request"]
      >({
        method: "put",
        url: `/messages/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
