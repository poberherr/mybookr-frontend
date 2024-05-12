import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  LocationsDeleteMutationResponse,
  LocationsDeletePathParams,
} from "../types/LocationsDelete";

type LocationsDeleteClient = typeof client<
  LocationsDeleteMutationResponse,
  never,
  never
>;
type LocationsDelete = {
  data: LocationsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: LocationsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: LocationsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<LocationsDeleteClient>[0]>;
    return: Awaited<ReturnType<LocationsDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing location.
 * @link /locations/:id/
 */
export function useLocationsDelete(
  id: LocationsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      LocationsDelete["response"],
      LocationsDelete["error"],
      LocationsDelete["request"]
    >;
    client?: LocationsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        LocationsDelete["data"],
        LocationsDelete["error"],
        LocationsDelete["request"]
      >({
        method: "delete",
        url: `/locations/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
