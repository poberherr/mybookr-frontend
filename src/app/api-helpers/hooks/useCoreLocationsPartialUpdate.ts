import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreLocationsPartialUpdateMutationRequest,
  CoreLocationsPartialUpdateMutationResponse,
  CoreLocationsPartialUpdatePathParams,
} from "../types/CoreLocationsPartialUpdate";

type CoreLocationsPartialUpdateClient = typeof client<
  CoreLocationsPartialUpdateMutationResponse,
  never,
  CoreLocationsPartialUpdateMutationRequest
>;
type CoreLocationsPartialUpdate = {
  data: CoreLocationsPartialUpdateMutationResponse;
  error: never;
  request: CoreLocationsPartialUpdateMutationRequest;
  pathParams: CoreLocationsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreLocationsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreLocationsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreLocationsPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing location.
 * @link /core/locations/:id/
 */
export function useCoreLocationsPartialUpdate(
  id: CoreLocationsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreLocationsPartialUpdate["response"],
      CoreLocationsPartialUpdate["error"],
      CoreLocationsPartialUpdate["request"]
    >;
    client?: CoreLocationsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreLocationsPartialUpdate["data"],
        CoreLocationsPartialUpdate["error"],
        CoreLocationsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/locations/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
