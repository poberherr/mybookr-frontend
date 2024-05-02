import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreAvailabilitiesPartialUpdateMutationRequest,
  CoreAvailabilitiesPartialUpdateMutationResponse,
  CoreAvailabilitiesPartialUpdatePathParams,
} from "../types/CoreAvailabilitiesPartialUpdate";

type CoreAvailabilitiesPartialUpdateClient = typeof client<
  CoreAvailabilitiesPartialUpdateMutationResponse,
  never,
  CoreAvailabilitiesPartialUpdateMutationRequest
>;
type CoreAvailabilitiesPartialUpdate = {
  data: CoreAvailabilitiesPartialUpdateMutationResponse;
  error: never;
  request: CoreAvailabilitiesPartialUpdateMutationRequest;
  pathParams: CoreAvailabilitiesPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreAvailabilitiesPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreAvailabilitiesPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreAvailabilitiesPartialUpdateClient>>;
  };
};
/**
 * @link /core/availabilities/:availability_id/
 */
export function useCoreAvailabilitiesPartialUpdate(
  availabilityId: CoreAvailabilitiesPartialUpdatePathParams["availability_id"],
  options: {
    mutation?: UseMutationOptions<
      CoreAvailabilitiesPartialUpdate["response"],
      CoreAvailabilitiesPartialUpdate["error"],
      CoreAvailabilitiesPartialUpdate["request"]
    >;
    client?: CoreAvailabilitiesPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreAvailabilitiesPartialUpdate["data"],
        CoreAvailabilitiesPartialUpdate["error"],
        CoreAvailabilitiesPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/availabilities/${availabilityId}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
