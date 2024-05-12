import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  AmenitiesDeleteMutationResponse,
  AmenitiesDeletePathParams,
} from "../types/AmenitiesDelete";

type AmenitiesDeleteClient = typeof client<
  AmenitiesDeleteMutationResponse,
  never,
  never
>;
type AmenitiesDelete = {
  data: AmenitiesDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: AmenitiesDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: AmenitiesDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<AmenitiesDeleteClient>[0]>;
    return: Awaited<ReturnType<AmenitiesDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing amenities.
 * @link /amenities/:id/
 */
export function useAmenitiesDelete(
  id: AmenitiesDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      AmenitiesDelete["response"],
      AmenitiesDelete["error"],
      AmenitiesDelete["request"]
    >;
    client?: AmenitiesDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        AmenitiesDelete["data"],
        AmenitiesDelete["error"],
        AmenitiesDelete["request"]
      >({
        method: "delete",
        url: `/amenities/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
