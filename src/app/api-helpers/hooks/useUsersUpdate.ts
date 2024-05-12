import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  UsersUpdateMutationRequest,
  UsersUpdateMutationResponse,
  UsersUpdatePathParams,
} from "../types/UsersUpdate";

type UsersUpdateClient = typeof client<
  UsersUpdateMutationResponse,
  never,
  UsersUpdateMutationRequest
>;
type UsersUpdate = {
  data: UsersUpdateMutationResponse;
  error: never;
  request: UsersUpdateMutationRequest;
  pathParams: UsersUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: UsersUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<UsersUpdateClient>[0]>;
    return: Awaited<ReturnType<UsersUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing users.
 * @link /users/:id/
 */
export function useUsersUpdate(
  id: UsersUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      UsersUpdate["response"],
      UsersUpdate["error"],
      UsersUpdate["request"]
    >;
    client?: UsersUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        UsersUpdate["data"],
        UsersUpdate["error"],
        UsersUpdate["request"]
      >({
        method: "put",
        url: `/users/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
