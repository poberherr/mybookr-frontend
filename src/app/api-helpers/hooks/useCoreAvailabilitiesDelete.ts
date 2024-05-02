import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreAvailabilitiesDeleteMutationResponse,
  CoreAvailabilitiesDeletePathParams,
} from "../types/CoreAvailabilitiesDelete";

type CoreAvailabilitiesDeleteClient = typeof client<
  CoreAvailabilitiesDeleteMutationResponse,
  never,
  never
>;
type CoreAvailabilitiesDelete = {
  data: CoreAvailabilitiesDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreAvailabilitiesDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreAvailabilitiesDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreAvailabilitiesDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreAvailabilitiesDeleteClient>>;
  };
};
/**
 * @link /core/availabilities/:availability_id/
 */
export function useCoreAvailabilitiesDelete(
  availabilityId: CoreAvailabilitiesDeletePathParams["availability_id"],
  options: {
    mutation?: UseMutationOptions<
      CoreAvailabilitiesDelete["response"],
      CoreAvailabilitiesDelete["error"],
      CoreAvailabilitiesDelete["request"]
    >;
    client?: CoreAvailabilitiesDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreAvailabilitiesDelete["data"],
        CoreAvailabilitiesDelete["error"],
        CoreAvailabilitiesDelete["request"]
      >({
        method: "delete",
        url: `/core/availabilities/${availabilityId}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
