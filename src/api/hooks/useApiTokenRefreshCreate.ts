import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  ApiTokenRefreshCreateMutationRequest,
  ApiTokenRefreshCreateMutationResponse,
} from "../types/ApiTokenRefreshCreate";

type ApiTokenRefreshCreateClient = typeof client<
  ApiTokenRefreshCreateMutationResponse,
  never,
  ApiTokenRefreshCreateMutationRequest
>;
type ApiTokenRefreshCreate = {
  data: ApiTokenRefreshCreateMutationResponse;
  error: never;
  request: ApiTokenRefreshCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: ApiTokenRefreshCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<ApiTokenRefreshCreateClient>[0]>;
    return: Awaited<ReturnType<ApiTokenRefreshCreateClient>>;
  };
};
/**
 * @description Takes a refresh type JSON web token and returns an access type JSON webtoken if the refresh token is valid.
 * @link /api/token/refresh/
 */
export function useApiTokenRefreshCreate(
  options: {
    mutation?: UseMutationOptions<
      ApiTokenRefreshCreate["response"],
      ApiTokenRefreshCreate["error"],
      ApiTokenRefreshCreate["request"]
    >;
    client?: ApiTokenRefreshCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        ApiTokenRefreshCreate["data"],
        ApiTokenRefreshCreate["error"],
        ApiTokenRefreshCreate["request"]
      >({
        method: "post",
        url: `/api/token/refresh/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
