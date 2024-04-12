import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreUsersUpdateMutationRequest,
  CoreUsersUpdateMutationResponse,
  CoreUsersUpdatePathParams,
} from "../types/CoreUsersUpdate";

type CoreUsersUpdateClient = typeof client<
  CoreUsersUpdateMutationResponse,
  never,
  CoreUsersUpdateMutationRequest
>;
type CoreUsersUpdate = {
  data: CoreUsersUpdateMutationResponse;
  error: never;
  request: CoreUsersUpdateMutationRequest;
  pathParams: CoreUsersUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreUsersUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreUsersUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreUsersUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing users.
 * @link /core/users/:id/
 */
export function useCoreUsersUpdate(
  id: CoreUsersUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreUsersUpdate["response"],
      CoreUsersUpdate["error"],
      CoreUsersUpdate["request"]
    >;
    client?: CoreUsersUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreUsersUpdate["data"],
        CoreUsersUpdate["error"],
        CoreUsersUpdate["request"]
      >({
        method: "put",
        url: `/core/users/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
