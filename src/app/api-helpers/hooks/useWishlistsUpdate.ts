import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  WishlistsUpdateMutationRequest,
  WishlistsUpdateMutationResponse,
  WishlistsUpdatePathParams,
} from "../types/WishlistsUpdate";

type WishlistsUpdateClient = typeof client<
  WishlistsUpdateMutationResponse,
  never,
  WishlistsUpdateMutationRequest
>;
type WishlistsUpdate = {
  data: WishlistsUpdateMutationResponse;
  error: never;
  request: WishlistsUpdateMutationRequest;
  pathParams: WishlistsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: WishlistsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<WishlistsUpdateClient>[0]>;
    return: Awaited<ReturnType<WishlistsUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing wishlists.
 * @link /wishlists/:id/
 */
export function useWishlistsUpdate(
  id: WishlistsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      WishlistsUpdate["response"],
      WishlistsUpdate["error"],
      WishlistsUpdate["request"]
    >;
    client?: WishlistsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        WishlistsUpdate["data"],
        WishlistsUpdate["error"],
        WishlistsUpdate["request"]
      >({
        method: "put",
        url: `/wishlists/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
