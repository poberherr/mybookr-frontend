import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  ApiLoginCreate404,
  ApiLoginCreateMutationRequest,
  ApiLoginCreateMutationResponse,
} from "../types/ApiLoginCreate";

type ApiLoginCreateClient = typeof client<
  ApiLoginCreateMutationResponse,
  ApiLoginCreate404,
  ApiLoginCreateMutationRequest
>;
type ApiLoginCreate = {
  data: ApiLoginCreateMutationResponse;
  error: ApiLoginCreate404;
  request: ApiLoginCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: ApiLoginCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<ApiLoginCreateClient>[0]>;
    return: Awaited<ReturnType<ApiLoginCreateClient>>;
  };
};
/**
 * @description Log in using Clerk ID
 * @link /api/login/
 */
export function useApiLoginCreate(
  options: {
    mutation?: UseMutationOptions<
      ApiLoginCreate["response"],
      ApiLoginCreate["error"],
      ApiLoginCreate["request"]
    >;
    client?: ApiLoginCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        ApiLoginCreate["data"],
        ApiLoginCreate["error"],
        ApiLoginCreate["request"]
      >({
        method: "post",
        url: `/api/login/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
