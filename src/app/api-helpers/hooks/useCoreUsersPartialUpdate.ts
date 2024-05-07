import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreUsersPartialUpdateMutationRequest,
  CoreUsersPartialUpdateMutationResponse,
  CoreUsersPartialUpdatePathParams,
} from "../types/CoreUsersPartialUpdate";

type CoreUsersPartialUpdateClient = typeof client<
  CoreUsersPartialUpdateMutationResponse,
  never,
  CoreUsersPartialUpdateMutationRequest
>;
type CoreUsersPartialUpdate = {
  data: CoreUsersPartialUpdateMutationResponse;
  error: never;
  request: CoreUsersPartialUpdateMutationRequest;
  pathParams: CoreUsersPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreUsersPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreUsersPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreUsersPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing users.
 * @link /core/users/:id/
 */
export function useCoreUsersPartialUpdate(
  id: CoreUsersPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreUsersPartialUpdate["response"],
      CoreUsersPartialUpdate["error"],
      CoreUsersPartialUpdate["request"]
    >;
    client?: CoreUsersPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreUsersPartialUpdate["data"],
        CoreUsersPartialUpdate["error"],
        CoreUsersPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/users/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
