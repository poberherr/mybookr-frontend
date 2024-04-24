import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreMetadataPartialUpdateMutationRequest,
  CoreMetadataPartialUpdateMutationResponse,
  CoreMetadataPartialUpdatePathParams,
} from "../types/CoreMetadataPartialUpdate";

type CoreMetadataPartialUpdateClient = typeof client<
  CoreMetadataPartialUpdateMutationResponse,
  never,
  CoreMetadataPartialUpdateMutationRequest
>;
type CoreMetadataPartialUpdate = {
  data: CoreMetadataPartialUpdateMutationResponse;
  error: never;
  request: CoreMetadataPartialUpdateMutationRequest;
  pathParams: CoreMetadataPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreMetadataPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreMetadataPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreMetadataPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing meta data.
 * @link /core/metadata/:id/
 */
export function useCoreMetadataPartialUpdate(
  id: CoreMetadataPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreMetadataPartialUpdate["response"],
      CoreMetadataPartialUpdate["error"],
      CoreMetadataPartialUpdate["request"]
    >;
    client?: CoreMetadataPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreMetadataPartialUpdate["data"],
        CoreMetadataPartialUpdate["error"],
        CoreMetadataPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/metadata/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
