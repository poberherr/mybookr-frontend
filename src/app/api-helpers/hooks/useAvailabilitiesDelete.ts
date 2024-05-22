import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  AvailabilitiesDeleteMutationResponse,
  AvailabilitiesDeletePathParams,
} from "../types/AvailabilitiesDelete";

type AvailabilitiesDeleteClient = typeof client<
  AvailabilitiesDeleteMutationResponse,
  never,
  never
>;
type AvailabilitiesDelete = {
  data: AvailabilitiesDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: AvailabilitiesDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: AvailabilitiesDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<AvailabilitiesDeleteClient>[0]>;
    return: Awaited<ReturnType<AvailabilitiesDeleteClient>>;
  };
};
/**
 * @link /availabilities/:id/
 */
export function useAvailabilitiesDelete(
  id: AvailabilitiesDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      AvailabilitiesDelete["response"],
      AvailabilitiesDelete["error"],
      AvailabilitiesDelete["request"]
    >;
    client?: AvailabilitiesDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        AvailabilitiesDelete["data"],
        AvailabilitiesDelete["error"],
        AvailabilitiesDelete["request"]
      >({
        method: "delete",
        url: `/availabilities/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
