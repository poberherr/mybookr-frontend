import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreAvailabilitiesCreateMutationRequest,
  CoreAvailabilitiesCreateMutationResponse,
} from "../types/CoreAvailabilitiesCreate";

type CoreAvailabilitiesCreateClient = typeof client<
  CoreAvailabilitiesCreateMutationResponse,
  never,
  CoreAvailabilitiesCreateMutationRequest
>;
type CoreAvailabilitiesCreate = {
  data: CoreAvailabilitiesCreateMutationResponse;
  error: never;
  request: CoreAvailabilitiesCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreAvailabilitiesCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreAvailabilitiesCreateClient>[0]>;
    return: Awaited<ReturnType<CoreAvailabilitiesCreateClient>>;
  };
};
/**
 * @link /core/availabilities/
 */
export function useCoreAvailabilitiesCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreAvailabilitiesCreate["response"],
      CoreAvailabilitiesCreate["error"],
      CoreAvailabilitiesCreate["request"]
    >;
    client?: CoreAvailabilitiesCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreAvailabilitiesCreate["data"],
        CoreAvailabilitiesCreate["error"],
        CoreAvailabilitiesCreate["request"]
      >({
        method: "post",
        url: `/core/availabilities/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
