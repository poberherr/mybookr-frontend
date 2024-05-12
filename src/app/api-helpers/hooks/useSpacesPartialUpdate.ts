import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  SpacesPartialUpdateMutationRequest,
  SpacesPartialUpdateMutationResponse,
  SpacesPartialUpdatePathParams,
} from "../types/SpacesPartialUpdate";

type SpacesPartialUpdateClient = typeof client<
  SpacesPartialUpdateMutationResponse,
  never,
  SpacesPartialUpdateMutationRequest
>;
type SpacesPartialUpdate = {
  data: SpacesPartialUpdateMutationResponse;
  error: never;
  request: SpacesPartialUpdateMutationRequest;
  pathParams: SpacesPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: SpacesPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<SpacesPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<SpacesPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing spaces.
 * @link /spaces/:id/
 */
export function useSpacesPartialUpdate(
  id: SpacesPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      SpacesPartialUpdate["response"],
      SpacesPartialUpdate["error"],
      SpacesPartialUpdate["request"]
    >;
    client?: SpacesPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        SpacesPartialUpdate["data"],
        SpacesPartialUpdate["error"],
        SpacesPartialUpdate["request"]
      >({
        method: "patch",
        url: `/spaces/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
