import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  UsersPartialUpdateMutationRequest,
  UsersPartialUpdateMutationResponse,
  UsersPartialUpdatePathParams,
} from "../types/UsersPartialUpdate";

type UsersPartialUpdateClient = typeof client<
  UsersPartialUpdateMutationResponse,
  never,
  UsersPartialUpdateMutationRequest
>;
type UsersPartialUpdate = {
  data: UsersPartialUpdateMutationResponse;
  error: never;
  request: UsersPartialUpdateMutationRequest;
  pathParams: UsersPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: UsersPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<UsersPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<UsersPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing users.
 * @link /users/:id/
 */
export function useUsersPartialUpdate(
  id: UsersPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      UsersPartialUpdate["response"],
      UsersPartialUpdate["error"],
      UsersPartialUpdate["request"]
    >;
    client?: UsersPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        UsersPartialUpdate["data"],
        UsersPartialUpdate["error"],
        UsersPartialUpdate["request"]
      >({
        method: "patch",
        url: `/users/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
