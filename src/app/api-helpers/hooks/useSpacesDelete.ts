import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  SpacesDeleteMutationResponse,
  SpacesDeletePathParams,
} from "../types/SpacesDelete";

type SpacesDeleteClient = typeof client<
  SpacesDeleteMutationResponse,
  never,
  never
>;
type SpacesDelete = {
  data: SpacesDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: SpacesDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: SpacesDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<SpacesDeleteClient>[0]>;
    return: Awaited<ReturnType<SpacesDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing spaces.
 * @link /spaces/:id/
 */
export function useSpacesDelete(
  id: SpacesDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      SpacesDelete["response"],
      SpacesDelete["error"],
      SpacesDelete["request"]
    >;
    client?: SpacesDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        SpacesDelete["data"],
        SpacesDelete["error"],
        SpacesDelete["request"]
      >({
        method: "delete",
        url: `/spaces/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
