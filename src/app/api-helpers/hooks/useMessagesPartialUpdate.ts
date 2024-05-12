import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  MessagesPartialUpdateMutationRequest,
  MessagesPartialUpdateMutationResponse,
  MessagesPartialUpdatePathParams,
} from "../types/MessagesPartialUpdate";

type MessagesPartialUpdateClient = typeof client<
  MessagesPartialUpdateMutationResponse,
  never,
  MessagesPartialUpdateMutationRequest
>;
type MessagesPartialUpdate = {
  data: MessagesPartialUpdateMutationResponse;
  error: never;
  request: MessagesPartialUpdateMutationRequest;
  pathParams: MessagesPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: MessagesPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<MessagesPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<MessagesPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing messages.
 * @link /messages/:id/
 */
export function useMessagesPartialUpdate(
  id: MessagesPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      MessagesPartialUpdate["response"],
      MessagesPartialUpdate["error"],
      MessagesPartialUpdate["request"]
    >;
    client?: MessagesPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        MessagesPartialUpdate["data"],
        MessagesPartialUpdate["error"],
        MessagesPartialUpdate["request"]
      >({
        method: "patch",
        url: `/messages/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
