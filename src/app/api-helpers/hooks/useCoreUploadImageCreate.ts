import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type { CoreUploadImageCreateMutationResponse } from "../types/CoreUploadImageCreate";

type CoreUploadImageCreateClient = typeof client<
  CoreUploadImageCreateMutationResponse,
  never,
  never
>;
type CoreUploadImageCreate = {
  data: CoreUploadImageCreateMutationResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreUploadImageCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreUploadImageCreateClient>[0]>;
    return: Awaited<ReturnType<CoreUploadImageCreateClient>>;
  };
};
/**
 * @link /core/upload-image/
 */
export function useCoreUploadImageCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreUploadImageCreate["response"],
      CoreUploadImageCreate["error"],
      CoreUploadImageCreate["request"]
    >;
    client?: CoreUploadImageCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreUploadImageCreate["data"],
        CoreUploadImageCreate["error"],
        CoreUploadImageCreate["request"]
      >({
        method: "post",
        url: `/core/upload-image/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
