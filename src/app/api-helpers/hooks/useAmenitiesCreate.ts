import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  AmenitiesCreateMutationRequest,
  AmenitiesCreateMutationResponse,
} from "../types/AmenitiesCreate";

type AmenitiesCreateClient = typeof client<
  AmenitiesCreateMutationResponse,
  never,
  AmenitiesCreateMutationRequest
>;
type AmenitiesCreate = {
  data: AmenitiesCreateMutationResponse;
  error: never;
  request: AmenitiesCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: AmenitiesCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<AmenitiesCreateClient>[0]>;
    return: Awaited<ReturnType<AmenitiesCreateClient>>;
  };
};
/**
 * @description API endpoint for managing amenities.
 * @link /amenities/
 */
export function useAmenitiesCreate(
  options: {
    mutation?: UseMutationOptions<
      AmenitiesCreate["response"],
      AmenitiesCreate["error"],
      AmenitiesCreate["request"]
    >;
    client?: AmenitiesCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        AmenitiesCreate["data"],
        AmenitiesCreate["error"],
        AmenitiesCreate["request"]
      >({
        method: "post",
        url: `/amenities/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
