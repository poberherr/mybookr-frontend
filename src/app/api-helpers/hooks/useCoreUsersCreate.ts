import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreUsersCreateMutationRequest,
  CoreUsersCreateMutationResponse,
} from "../types/CoreUsersCreate";

type CoreUsersCreateClient = typeof client<
  CoreUsersCreateMutationResponse,
  never,
  CoreUsersCreateMutationRequest
>;
type CoreUsersCreate = {
  data: CoreUsersCreateMutationResponse;
  error: never;
  request: CoreUsersCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreUsersCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreUsersCreateClient>[0]>;
    return: Awaited<ReturnType<CoreUsersCreateClient>>;
  };
};
/**
 * @description API endpoint for managing users.
 * @link /core/users/
 */
export function useCoreUsersCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreUsersCreate["response"],
      CoreUsersCreate["error"],
      CoreUsersCreate["request"]
    >;
    client?: CoreUsersCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreUsersCreate["data"],
        CoreUsersCreate["error"],
        CoreUsersCreate["request"]
      >({
        method: "post",
        url: `/core/users/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
