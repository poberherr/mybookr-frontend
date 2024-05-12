import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  MessagesCreateMutationRequest,
  MessagesCreateMutationResponse,
} from "../types/MessagesCreate";

type MessagesCreateClient = typeof client<
  MessagesCreateMutationResponse,
  never,
  MessagesCreateMutationRequest
>;
type MessagesCreate = {
  data: MessagesCreateMutationResponse;
  error: never;
  request: MessagesCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: MessagesCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<MessagesCreateClient>[0]>;
    return: Awaited<ReturnType<MessagesCreateClient>>;
  };
};
/**
 * @description API endpoint for managing messages.
 * @link /messages/
 */
export function useMessagesCreate(
  options: {
    mutation?: UseMutationOptions<
      MessagesCreate["response"],
      MessagesCreate["error"],
      MessagesCreate["request"]
    >;
    client?: MessagesCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        MessagesCreate["data"],
        MessagesCreate["error"],
        MessagesCreate["request"]
      >({
        method: "post",
        url: `/messages/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
