import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  WishlistsCreateMutationRequest,
  WishlistsCreateMutationResponse,
} from "../types/WishlistsCreate";

type WishlistsCreateClient = typeof client<
  WishlistsCreateMutationResponse,
  never,
  WishlistsCreateMutationRequest
>;
type WishlistsCreate = {
  data: WishlistsCreateMutationResponse;
  error: never;
  request: WishlistsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: WishlistsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<WishlistsCreateClient>[0]>;
    return: Awaited<ReturnType<WishlistsCreateClient>>;
  };
};
/**
 * @description API endpoint for managing wishlists.
 * @link /wishlists/
 */
export function useWishlistsCreate(
  options: {
    mutation?: UseMutationOptions<
      WishlistsCreate["response"],
      WishlistsCreate["error"],
      WishlistsCreate["request"]
    >;
    client?: WishlistsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        WishlistsCreate["data"],
        WishlistsCreate["error"],
        WishlistsCreate["request"]
      >({
        method: "post",
        url: `/wishlists/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
