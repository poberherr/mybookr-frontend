import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreAvailabilitiesUpdateMutationRequest,
  CoreAvailabilitiesUpdateMutationResponse,
  CoreAvailabilitiesUpdatePathParams,
} from "../types/CoreAvailabilitiesUpdate";

type CoreAvailabilitiesUpdateClient = typeof client<
  CoreAvailabilitiesUpdateMutationResponse,
  never,
  CoreAvailabilitiesUpdateMutationRequest
>;
type CoreAvailabilitiesUpdate = {
  data: CoreAvailabilitiesUpdateMutationResponse;
  error: never;
  request: CoreAvailabilitiesUpdateMutationRequest;
  pathParams: CoreAvailabilitiesUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreAvailabilitiesUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreAvailabilitiesUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreAvailabilitiesUpdateClient>>;
  };
};
/**
 * @link /core/availabilities/:availability_id/
 */
export function useCoreAvailabilitiesUpdate(
  availabilityId: CoreAvailabilitiesUpdatePathParams["availability_id"],
  options: {
    mutation?: UseMutationOptions<
      CoreAvailabilitiesUpdate["response"],
      CoreAvailabilitiesUpdate["error"],
      CoreAvailabilitiesUpdate["request"]
    >;
    client?: CoreAvailabilitiesUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreAvailabilitiesUpdate["data"],
        CoreAvailabilitiesUpdate["error"],
        CoreAvailabilitiesUpdate["request"]
      >({
        method: "put",
        url: `/core/availabilities/${availabilityId}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
