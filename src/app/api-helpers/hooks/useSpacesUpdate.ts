import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  SpacesUpdateMutationRequest,
  SpacesUpdateMutationResponse,
  SpacesUpdatePathParams,
} from "../types/SpacesUpdate";

type SpacesUpdateClient = typeof client<
  SpacesUpdateMutationResponse,
  never,
  SpacesUpdateMutationRequest
>;
type SpacesUpdate = {
  data: SpacesUpdateMutationResponse;
  error: never;
  request: SpacesUpdateMutationRequest;
  pathParams: SpacesUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: SpacesUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<SpacesUpdateClient>[0]>;
    return: Awaited<ReturnType<SpacesUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing spaces.
 * @link /spaces/:id/
 */
export function useSpacesUpdate(
  id: SpacesUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      SpacesUpdate["response"],
      SpacesUpdate["error"],
      SpacesUpdate["request"]
    >;
    client?: SpacesUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        SpacesUpdate["data"],
        SpacesUpdate["error"],
        SpacesUpdate["request"]
      >({
        method: "put",
        url: `/spaces/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
