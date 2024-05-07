import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreLocationsCreateMutationRequest,
  CoreLocationsCreateMutationResponse,
} from "../types/CoreLocationsCreate";

type CoreLocationsCreateClient = typeof client<
  CoreLocationsCreateMutationResponse,
  never,
  CoreLocationsCreateMutationRequest
>;
type CoreLocationsCreate = {
  data: CoreLocationsCreateMutationResponse;
  error: never;
  request: CoreLocationsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreLocationsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreLocationsCreateClient>[0]>;
    return: Awaited<ReturnType<CoreLocationsCreateClient>>;
  };
};
/**
 * @description API endpoint for managing location.
 * @link /core/locations/
 */
export function useCoreLocationsCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreLocationsCreate["response"],
      CoreLocationsCreate["error"],
      CoreLocationsCreate["request"]
    >;
    client?: CoreLocationsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreLocationsCreate["data"],
        CoreLocationsCreate["error"],
        CoreLocationsCreate["request"]
      >({
        method: "post",
        url: `/core/locations/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
