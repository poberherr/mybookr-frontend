import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  AmenitiesUpdateMutationRequest,
  AmenitiesUpdateMutationResponse,
  AmenitiesUpdatePathParams,
} from "../types/AmenitiesUpdate";

type AmenitiesUpdateClient = typeof client<
  AmenitiesUpdateMutationResponse,
  never,
  AmenitiesUpdateMutationRequest
>;
type AmenitiesUpdate = {
  data: AmenitiesUpdateMutationResponse;
  error: never;
  request: AmenitiesUpdateMutationRequest;
  pathParams: AmenitiesUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: AmenitiesUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<AmenitiesUpdateClient>[0]>;
    return: Awaited<ReturnType<AmenitiesUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing amenities.
 * @link /amenities/:id/
 */
export function useAmenitiesUpdate(
  id: AmenitiesUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      AmenitiesUpdate["response"],
      AmenitiesUpdate["error"],
      AmenitiesUpdate["request"]
    >;
    client?: AmenitiesUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        AmenitiesUpdate["data"],
        AmenitiesUpdate["error"],
        AmenitiesUpdate["request"]
      >({
        method: "put",
        url: `/amenities/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
