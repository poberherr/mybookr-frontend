import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreWishlistsCreateMutationRequest,
  CoreWishlistsCreateMutationResponse,
} from "../types/CoreWishlistsCreate";

type CoreWishlistsCreateClient = typeof client<
  CoreWishlistsCreateMutationResponse,
  never,
  CoreWishlistsCreateMutationRequest
>;
type CoreWishlistsCreate = {
  data: CoreWishlistsCreateMutationResponse;
  error: never;
  request: CoreWishlistsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreWishlistsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreWishlistsCreateClient>[0]>;
    return: Awaited<ReturnType<CoreWishlistsCreateClient>>;
  };
};
/**
 * @description API endpoint for managing wishlists.
 * @link /core/wishlists/
 */
export function useCoreWishlistsCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreWishlistsCreate["response"],
      CoreWishlistsCreate["error"],
      CoreWishlistsCreate["request"]
    >;
    client?: CoreWishlistsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreWishlistsCreate["data"],
        CoreWishlistsCreate["error"],
        CoreWishlistsCreate["request"]
      >({
        method: "post",
        url: `/core/wishlists/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
