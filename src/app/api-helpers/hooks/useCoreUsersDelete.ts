import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreUsersDeleteMutationResponse,
  CoreUsersDeletePathParams,
} from "../types/CoreUsersDelete";

type CoreUsersDeleteClient = typeof client<
  CoreUsersDeleteMutationResponse,
  never,
  never
>;
type CoreUsersDelete = {
  data: CoreUsersDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreUsersDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreUsersDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreUsersDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreUsersDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing users.
 * @link /core/users/:id/
 */
export function useCoreUsersDelete(
  id: CoreUsersDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreUsersDelete["response"],
      CoreUsersDelete["error"],
      CoreUsersDelete["request"]
    >;
    client?: CoreUsersDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreUsersDelete["data"],
        CoreUsersDelete["error"],
        CoreUsersDelete["request"]
      >({
        method: "delete",
        url: `/core/users/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
