import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreWishlistsPartialUpdateMutationRequest,
  CoreWishlistsPartialUpdateMutationResponse,
  CoreWishlistsPartialUpdatePathParams,
} from "../types/CoreWishlistsPartialUpdate";

type CoreWishlistsPartialUpdateClient = typeof client<
  CoreWishlistsPartialUpdateMutationResponse,
  never,
  CoreWishlistsPartialUpdateMutationRequest
>;
type CoreWishlistsPartialUpdate = {
  data: CoreWishlistsPartialUpdateMutationResponse;
  error: never;
  request: CoreWishlistsPartialUpdateMutationRequest;
  pathParams: CoreWishlistsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreWishlistsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreWishlistsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreWishlistsPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing wishlists.
 * @link /core/wishlists/:id/
 */
export function useCoreWishlistsPartialUpdate(
  id: CoreWishlistsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreWishlistsPartialUpdate["response"],
      CoreWishlistsPartialUpdate["error"],
      CoreWishlistsPartialUpdate["request"]
    >;
    client?: CoreWishlistsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreWishlistsPartialUpdate["data"],
        CoreWishlistsPartialUpdate["error"],
        CoreWishlistsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/wishlists/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
