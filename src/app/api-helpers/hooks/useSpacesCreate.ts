import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  SpacesCreateMutationRequest,
  SpacesCreateMutationResponse,
} from "../types/SpacesCreate";

type SpacesCreateClient = typeof client<
  SpacesCreateMutationResponse,
  never,
  SpacesCreateMutationRequest
>;
type SpacesCreate = {
  data: SpacesCreateMutationResponse;
  error: never;
  request: SpacesCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: SpacesCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<SpacesCreateClient>[0]>;
    return: Awaited<ReturnType<SpacesCreateClient>>;
  };
};
/**
 * @description API endpoint for managing spaces.
 * @link /spaces/
 */
export function useSpacesCreate(
  options: {
    mutation?: UseMutationOptions<
      SpacesCreate["response"],
      SpacesCreate["error"],
      SpacesCreate["request"]
    >;
    client?: SpacesCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        SpacesCreate["data"],
        SpacesCreate["error"],
        SpacesCreate["request"]
      >({
        method: "post",
        url: `/spaces/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
