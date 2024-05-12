import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  UsersDeleteMutationResponse,
  UsersDeletePathParams,
} from "../types/UsersDelete";

type UsersDeleteClient = typeof client<
  UsersDeleteMutationResponse,
  never,
  never
>;
type UsersDelete = {
  data: UsersDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: UsersDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: UsersDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<UsersDeleteClient>[0]>;
    return: Awaited<ReturnType<UsersDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing users.
 * @link /users/:id/
 */
export function useUsersDelete(
  id: UsersDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      UsersDelete["response"],
      UsersDelete["error"],
      UsersDelete["request"]
    >;
    client?: UsersDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        UsersDelete["data"],
        UsersDelete["error"],
        UsersDelete["request"]
      >({
        method: "delete",
        url: `/users/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
