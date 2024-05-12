import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  AmenitiesPartialUpdateMutationRequest,
  AmenitiesPartialUpdateMutationResponse,
  AmenitiesPartialUpdatePathParams,
} from "../types/AmenitiesPartialUpdate";

type AmenitiesPartialUpdateClient = typeof client<
  AmenitiesPartialUpdateMutationResponse,
  never,
  AmenitiesPartialUpdateMutationRequest
>;
type AmenitiesPartialUpdate = {
  data: AmenitiesPartialUpdateMutationResponse;
  error: never;
  request: AmenitiesPartialUpdateMutationRequest;
  pathParams: AmenitiesPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: AmenitiesPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<AmenitiesPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<AmenitiesPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing amenities.
 * @link /amenities/:id/
 */
export function useAmenitiesPartialUpdate(
  id: AmenitiesPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      AmenitiesPartialUpdate["response"],
      AmenitiesPartialUpdate["error"],
      AmenitiesPartialUpdate["request"]
    >;
    client?: AmenitiesPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        AmenitiesPartialUpdate["data"],
        AmenitiesPartialUpdate["error"],
        AmenitiesPartialUpdate["request"]
      >({
        method: "patch",
        url: `/amenities/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
