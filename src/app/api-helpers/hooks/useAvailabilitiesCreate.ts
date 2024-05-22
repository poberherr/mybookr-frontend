import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  AvailabilitiesCreateMutationRequest,
  AvailabilitiesCreateMutationResponse,
} from "../types/AvailabilitiesCreate";

type AvailabilitiesCreateClient = typeof client<
  AvailabilitiesCreateMutationResponse,
  never,
  AvailabilitiesCreateMutationRequest
>;
type AvailabilitiesCreate = {
  data: AvailabilitiesCreateMutationResponse;
  error: never;
  request: AvailabilitiesCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AvailabilitiesCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<AvailabilitiesCreateClient>[0]>;
    return: Awaited<ReturnType<AvailabilitiesCreateClient>>;
  };
};
/**
 * @link /availabilities/
 */
export function useAvailabilitiesCreate(
  options: {
    mutation?: UseMutationOptions<
      AvailabilitiesCreate["response"],
      AvailabilitiesCreate["error"],
      AvailabilitiesCreate["request"]
    >;
    client?: AvailabilitiesCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        AvailabilitiesCreate["data"],
        AvailabilitiesCreate["error"],
        AvailabilitiesCreate["request"]
      >({
        method: "post",
        url: `/availabilities/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
