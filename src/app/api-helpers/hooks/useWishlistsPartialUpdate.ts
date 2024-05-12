import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  WishlistsPartialUpdateMutationRequest,
  WishlistsPartialUpdateMutationResponse,
  WishlistsPartialUpdatePathParams,
} from "../types/WishlistsPartialUpdate";

type WishlistsPartialUpdateClient = typeof client<
  WishlistsPartialUpdateMutationResponse,
  never,
  WishlistsPartialUpdateMutationRequest
>;
type WishlistsPartialUpdate = {
  data: WishlistsPartialUpdateMutationResponse;
  error: never;
  request: WishlistsPartialUpdateMutationRequest;
  pathParams: WishlistsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: WishlistsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<WishlistsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<WishlistsPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing wishlists.
 * @link /wishlists/:id/
 */
export function useWishlistsPartialUpdate(
  id: WishlistsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      WishlistsPartialUpdate["response"],
      WishlistsPartialUpdate["error"],
      WishlistsPartialUpdate["request"]
    >;
    client?: WishlistsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        WishlistsPartialUpdate["data"],
        WishlistsPartialUpdate["error"],
        WishlistsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/wishlists/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
