import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  LocationsCreateMutationRequest,
  LocationsCreateMutationResponse,
} from "../types/LocationsCreate";

type LocationsCreateClient = typeof client<
  LocationsCreateMutationResponse,
  never,
  LocationsCreateMutationRequest
>;
type LocationsCreate = {
  data: LocationsCreateMutationResponse;
  error: never;
  request: LocationsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: LocationsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<LocationsCreateClient>[0]>;
    return: Awaited<ReturnType<LocationsCreateClient>>;
  };
};
/**
 * @description API endpoint for managing location.
 * @link /locations/
 */
export function useLocationsCreate(
  options: {
    mutation?: UseMutationOptions<
      LocationsCreate["response"],
      LocationsCreate["error"],
      LocationsCreate["request"]
    >;
    client?: LocationsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        LocationsCreate["data"],
        LocationsCreate["error"],
        LocationsCreate["request"]
      >({
        method: "post",
        url: `/locations/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
