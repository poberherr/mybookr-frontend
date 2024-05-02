import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreLocationsDeleteMutationResponse,
  CoreLocationsDeletePathParams,
} from "../types/CoreLocationsDelete";

type CoreLocationsDeleteClient = typeof client<
  CoreLocationsDeleteMutationResponse,
  never,
  never
>;
type CoreLocationsDelete = {
  data: CoreLocationsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreLocationsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreLocationsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreLocationsDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreLocationsDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing location.
 * @link /core/locations/:id/
 */
export function useCoreLocationsDelete(
  id: CoreLocationsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreLocationsDelete["response"],
      CoreLocationsDelete["error"],
      CoreLocationsDelete["request"]
    >;
    client?: CoreLocationsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreLocationsDelete["data"],
        CoreLocationsDelete["error"],
        CoreLocationsDelete["request"]
      >({
        method: "delete",
        url: `/core/locations/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
