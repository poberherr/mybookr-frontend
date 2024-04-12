import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreAmenitiesPartialUpdateMutationRequest,
  CoreAmenitiesPartialUpdateMutationResponse,
  CoreAmenitiesPartialUpdatePathParams,
} from "../types/CoreAmenitiesPartialUpdate";

type CoreAmenitiesPartialUpdateClient = typeof client<
  CoreAmenitiesPartialUpdateMutationResponse,
  never,
  CoreAmenitiesPartialUpdateMutationRequest
>;
type CoreAmenitiesPartialUpdate = {
  data: CoreAmenitiesPartialUpdateMutationResponse;
  error: never;
  request: CoreAmenitiesPartialUpdateMutationRequest;
  pathParams: CoreAmenitiesPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreAmenitiesPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreAmenitiesPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreAmenitiesPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing amenities.
 * @link /core/amenities/:id/
 */
export function useCoreAmenitiesPartialUpdate(
  id: CoreAmenitiesPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreAmenitiesPartialUpdate["response"],
      CoreAmenitiesPartialUpdate["error"],
      CoreAmenitiesPartialUpdate["request"]
    >;
    client?: CoreAmenitiesPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreAmenitiesPartialUpdate["data"],
        CoreAmenitiesPartialUpdate["error"],
        CoreAmenitiesPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/amenities/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
