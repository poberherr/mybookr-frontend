import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  ApiSignupCreateMutationRequest,
  ApiSignupCreateMutationResponse,
} from "../types/ApiSignupCreate";

type ApiSignupCreateClient = typeof client<
  ApiSignupCreateMutationResponse,
  never,
  ApiSignupCreateMutationRequest
>;
type ApiSignupCreate = {
  data: ApiSignupCreateMutationResponse;
  error: never;
  request: ApiSignupCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: ApiSignupCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<ApiSignupCreateClient>[0]>;
    return: Awaited<ReturnType<ApiSignupCreateClient>>;
  };
};
/**
 * @description Sign up using Clerk ID and email
 * @link /api/signup/
 */
export function useApiSignupCreate(
  options: {
    mutation?: UseMutationOptions<
      ApiSignupCreate["response"],
      ApiSignupCreate["error"],
      ApiSignupCreate["request"]
    >;
    client?: ApiSignupCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        ApiSignupCreate["data"],
        ApiSignupCreate["error"],
        ApiSignupCreate["request"]
      >({
        method: "post",
        url: `/api/signup/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
