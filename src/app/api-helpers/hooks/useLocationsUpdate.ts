import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  LocationsUpdateMutationRequest,
  LocationsUpdateMutationResponse,
  LocationsUpdatePathParams,
} from "../types/LocationsUpdate";

type LocationsUpdateClient = typeof client<
  LocationsUpdateMutationResponse,
  never,
  LocationsUpdateMutationRequest
>;
type LocationsUpdate = {
  data: LocationsUpdateMutationResponse;
  error: never;
  request: LocationsUpdateMutationRequest;
  pathParams: LocationsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: LocationsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<LocationsUpdateClient>[0]>;
    return: Awaited<ReturnType<LocationsUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing location.
 * @link /locations/:id/
 */
export function useLocationsUpdate(
  id: LocationsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      LocationsUpdate["response"],
      LocationsUpdate["error"],
      LocationsUpdate["request"]
    >;
    client?: LocationsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        LocationsUpdate["data"],
        LocationsUpdate["error"],
        LocationsUpdate["request"]
      >({
        method: "put",
        url: `/locations/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
