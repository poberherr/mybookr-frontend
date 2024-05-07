import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreLocationsUpdateMutationRequest,
  CoreLocationsUpdateMutationResponse,
  CoreLocationsUpdatePathParams,
} from "../types/CoreLocationsUpdate";

type CoreLocationsUpdateClient = typeof client<
  CoreLocationsUpdateMutationResponse,
  never,
  CoreLocationsUpdateMutationRequest
>;
type CoreLocationsUpdate = {
  data: CoreLocationsUpdateMutationResponse;
  error: never;
  request: CoreLocationsUpdateMutationRequest;
  pathParams: CoreLocationsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreLocationsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreLocationsUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreLocationsUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing location.
 * @link /core/locations/:id/
 */
export function useCoreLocationsUpdate(
  id: CoreLocationsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreLocationsUpdate["response"],
      CoreLocationsUpdate["error"],
      CoreLocationsUpdate["request"]
    >;
    client?: CoreLocationsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreLocationsUpdate["data"],
        CoreLocationsUpdate["error"],
        CoreLocationsUpdate["request"]
      >({
        method: "put",
        url: `/core/locations/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
