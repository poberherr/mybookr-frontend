import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  UsersCreateMutationRequest,
  UsersCreateMutationResponse,
} from "../types/UsersCreate";

type UsersCreateClient = typeof client<
  UsersCreateMutationResponse,
  never,
  UsersCreateMutationRequest
>;
type UsersCreate = {
  data: UsersCreateMutationResponse;
  error: never;
  request: UsersCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: UsersCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<UsersCreateClient>[0]>;
    return: Awaited<ReturnType<UsersCreateClient>>;
  };
};
/**
 * @description API endpoint for managing users.
 * @link /users/
 */
export function useUsersCreate(
  options: {
    mutation?: UseMutationOptions<
      UsersCreate["response"],
      UsersCreate["error"],
      UsersCreate["request"]
    >;
    client?: UsersCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        UsersCreate["data"],
        UsersCreate["error"],
        UsersCreate["request"]
      >({
        method: "post",
        url: `/users/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
