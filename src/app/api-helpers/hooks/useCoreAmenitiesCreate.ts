import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreAmenitiesCreateMutationRequest,
  CoreAmenitiesCreateMutationResponse,
} from "../types/CoreAmenitiesCreate";

type CoreAmenitiesCreateClient = typeof client<
  CoreAmenitiesCreateMutationResponse,
  never,
  CoreAmenitiesCreateMutationRequest
>;
type CoreAmenitiesCreate = {
  data: CoreAmenitiesCreateMutationResponse;
  error: never;
  request: CoreAmenitiesCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreAmenitiesCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreAmenitiesCreateClient>[0]>;
    return: Awaited<ReturnType<CoreAmenitiesCreateClient>>;
  };
};
/**
 * @description API endpoint for managing amenities.
 * @link /core/amenities/
 */
export function useCoreAmenitiesCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreAmenitiesCreate["response"],
      CoreAmenitiesCreate["error"],
      CoreAmenitiesCreate["request"]
    >;
    client?: CoreAmenitiesCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreAmenitiesCreate["data"],
        CoreAmenitiesCreate["error"],
        CoreAmenitiesCreate["request"]
      >({
        method: "post",
        url: `/core/amenities/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
