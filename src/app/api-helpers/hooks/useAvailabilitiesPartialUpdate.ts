import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  AvailabilitiesPartialUpdateMutationRequest,
  AvailabilitiesPartialUpdateMutationResponse,
  AvailabilitiesPartialUpdatePathParams,
} from "../types/AvailabilitiesPartialUpdate";

type AvailabilitiesPartialUpdateClient = typeof client<
  AvailabilitiesPartialUpdateMutationResponse,
  never,
  AvailabilitiesPartialUpdateMutationRequest
>;
type AvailabilitiesPartialUpdate = {
  data: AvailabilitiesPartialUpdateMutationResponse;
  error: never;
  request: AvailabilitiesPartialUpdateMutationRequest;
  pathParams: AvailabilitiesPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: AvailabilitiesPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<AvailabilitiesPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<AvailabilitiesPartialUpdateClient>>;
  };
};
/**
 * @link /availabilities/:id/
 */
export function useAvailabilitiesPartialUpdate(
  id: AvailabilitiesPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      AvailabilitiesPartialUpdate["response"],
      AvailabilitiesPartialUpdate["error"],
      AvailabilitiesPartialUpdate["request"]
    >;
    client?: AvailabilitiesPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        AvailabilitiesPartialUpdate["data"],
        AvailabilitiesPartialUpdate["error"],
        AvailabilitiesPartialUpdate["request"]
      >({
        method: "patch",
        url: `/availabilities/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
