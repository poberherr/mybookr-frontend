import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  WishlistsDeleteMutationResponse,
  WishlistsDeletePathParams,
} from "../types/WishlistsDelete";

type WishlistsDeleteClient = typeof client<
  WishlistsDeleteMutationResponse,
  never,
  never
>;
type WishlistsDelete = {
  data: WishlistsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: WishlistsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: WishlistsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<WishlistsDeleteClient>[0]>;
    return: Awaited<ReturnType<WishlistsDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing wishlists.
 * @link /wishlists/:id/
 */
export function useWishlistsDelete(
  id: WishlistsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      WishlistsDelete["response"],
      WishlistsDelete["error"],
      WishlistsDelete["request"]
    >;
    client?: WishlistsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        WishlistsDelete["data"],
        WishlistsDelete["error"],
        WishlistsDelete["request"]
      >({
        method: "delete",
        url: `/wishlists/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
