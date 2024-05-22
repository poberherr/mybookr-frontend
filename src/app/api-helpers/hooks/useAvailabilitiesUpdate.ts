import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  AvailabilitiesUpdateMutationRequest,
  AvailabilitiesUpdateMutationResponse,
  AvailabilitiesUpdatePathParams,
} from "../types/AvailabilitiesUpdate";

type AvailabilitiesUpdateClient = typeof client<
  AvailabilitiesUpdateMutationResponse,
  never,
  AvailabilitiesUpdateMutationRequest
>;
type AvailabilitiesUpdate = {
  data: AvailabilitiesUpdateMutationResponse;
  error: never;
  request: AvailabilitiesUpdateMutationRequest;
  pathParams: AvailabilitiesUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: AvailabilitiesUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<AvailabilitiesUpdateClient>[0]>;
    return: Awaited<ReturnType<AvailabilitiesUpdateClient>>;
  };
};
/**
 * @link /availabilities/:id/
 */
export function useAvailabilitiesUpdate(
  id: AvailabilitiesUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      AvailabilitiesUpdate["response"],
      AvailabilitiesUpdate["error"],
      AvailabilitiesUpdate["request"]
    >;
    client?: AvailabilitiesUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        AvailabilitiesUpdate["data"],
        AvailabilitiesUpdate["error"],
        AvailabilitiesUpdate["request"]
      >({
        method: "put",
        url: `/availabilities/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
