import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreMetadataDeleteMutationResponse,
  CoreMetadataDeletePathParams,
} from "../types/CoreMetadataDelete";

type CoreMetadataDeleteClient = typeof client<
  CoreMetadataDeleteMutationResponse,
  never,
  never
>;
type CoreMetadataDelete = {
  data: CoreMetadataDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreMetadataDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreMetadataDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreMetadataDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreMetadataDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing meta data.
 * @link /core/metadata/:id/
 */
export function useCoreMetadataDelete(
  id: CoreMetadataDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreMetadataDelete["response"],
      CoreMetadataDelete["error"],
      CoreMetadataDelete["request"]
    >;
    client?: CoreMetadataDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreMetadataDelete["data"],
        CoreMetadataDelete["error"],
        CoreMetadataDelete["request"]
      >({
        method: "delete",
        url: `/core/metadata/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
