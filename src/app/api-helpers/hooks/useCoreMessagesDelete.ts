import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreMessagesDeleteMutationResponse,
  CoreMessagesDeletePathParams,
} from "../types/CoreMessagesDelete";

type CoreMessagesDeleteClient = typeof client<
  CoreMessagesDeleteMutationResponse,
  never,
  never
>;
type CoreMessagesDelete = {
  data: CoreMessagesDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreMessagesDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreMessagesDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreMessagesDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreMessagesDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing messages.
 * @link /core/messages/:id/
 */
export function useCoreMessagesDelete(
  id: CoreMessagesDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreMessagesDelete["response"],
      CoreMessagesDelete["error"],
      CoreMessagesDelete["request"]
    >;
    client?: CoreMessagesDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreMessagesDelete["data"],
        CoreMessagesDelete["error"],
        CoreMessagesDelete["request"]
      >({
        method: "delete",
        url: `/core/messages/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
