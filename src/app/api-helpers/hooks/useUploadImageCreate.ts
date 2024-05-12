import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  UploadImageCreateMutationRequest,
  UploadImageCreateMutationResponse,
  UploadImageCreateQueryParams,
} from "../types/UploadImageCreate";

type UploadImageCreateClient = typeof client<
  UploadImageCreateMutationResponse,
  never,
  UploadImageCreateMutationRequest
>;
type UploadImageCreate = {
  data: UploadImageCreateMutationResponse;
  error: never;
  request: UploadImageCreateMutationRequest;
  pathParams: never;
  queryParams: UploadImageCreateQueryParams;
  headerParams: never;
  response: UploadImageCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<UploadImageCreateClient>[0]>;
    return: Awaited<ReturnType<UploadImageCreateClient>>;
  };
};
/**
 * @description Upload an image
 * @link /upload-image/
 */
export function useUploadImageCreate(
  params: UploadImageCreate["queryParams"],
  options: {
    mutation?: UseMutationOptions<
      UploadImageCreate["response"],
      UploadImageCreate["error"],
      UploadImageCreate["request"]
    >;
    client?: UploadImageCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        UploadImageCreate["data"],
        UploadImageCreate["error"],
        UploadImageCreate["request"]
      >({
        method: "post",
        url: `/upload-image/`,
        params,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
