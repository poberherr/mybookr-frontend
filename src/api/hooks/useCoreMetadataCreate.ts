import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreMetadataCreateMutationRequest,
  CoreMetadataCreateMutationResponse,
} from "../types/CoreMetadataCreate";

type CoreMetadataCreateClient = typeof client<
  CoreMetadataCreateMutationResponse,
  never,
  CoreMetadataCreateMutationRequest
>;
type CoreMetadataCreate = {
  data: CoreMetadataCreateMutationResponse;
  error: never;
  request: CoreMetadataCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreMetadataCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreMetadataCreateClient>[0]>;
    return: Awaited<ReturnType<CoreMetadataCreateClient>>;
  };
};
/**
 * @description API endpoint for managing meta data.
 * @link /core/metadata/
 */
export function useCoreMetadataCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreMetadataCreate["response"],
      CoreMetadataCreate["error"],
      CoreMetadataCreate["request"]
    >;
    client?: CoreMetadataCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreMetadataCreate["data"],
        CoreMetadataCreate["error"],
        CoreMetadataCreate["request"]
      >({
        method: "post",
        url: `/core/metadata/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
