import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  MessagesDeleteMutationResponse,
  MessagesDeletePathParams,
} from "../types/MessagesDelete";

type MessagesDeleteClient = typeof client<
  MessagesDeleteMutationResponse,
  never,
  never
>;
type MessagesDelete = {
  data: MessagesDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: MessagesDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: MessagesDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<MessagesDeleteClient>[0]>;
    return: Awaited<ReturnType<MessagesDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing messages.
 * @link /messages/:id/
 */
export function useMessagesDelete(
  id: MessagesDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      MessagesDelete["response"],
      MessagesDelete["error"],
      MessagesDelete["request"]
    >;
    client?: MessagesDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        MessagesDelete["data"],
        MessagesDelete["error"],
        MessagesDelete["request"]
      >({
        method: "delete",
        url: `/messages/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
