import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  LocationsPartialUpdateMutationRequest,
  LocationsPartialUpdateMutationResponse,
  LocationsPartialUpdatePathParams,
} from "../types/LocationsPartialUpdate";

type LocationsPartialUpdateClient = typeof client<
  LocationsPartialUpdateMutationResponse,
  never,
  LocationsPartialUpdateMutationRequest
>;
type LocationsPartialUpdate = {
  data: LocationsPartialUpdateMutationResponse;
  error: never;
  request: LocationsPartialUpdateMutationRequest;
  pathParams: LocationsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: LocationsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<LocationsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<LocationsPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing location.
 * @link /locations/:id/
 */
export function useLocationsPartialUpdate(
  id: LocationsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      LocationsPartialUpdate["response"],
      LocationsPartialUpdate["error"],
      LocationsPartialUpdate["request"]
    >;
    client?: LocationsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        LocationsPartialUpdate["data"],
        LocationsPartialUpdate["error"],
        LocationsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/locations/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
