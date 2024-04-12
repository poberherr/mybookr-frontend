import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreWishlistsUpdateMutationRequest,
  CoreWishlistsUpdateMutationResponse,
  CoreWishlistsUpdatePathParams,
} from "../types/CoreWishlistsUpdate";

type CoreWishlistsUpdateClient = typeof client<
  CoreWishlistsUpdateMutationResponse,
  never,
  CoreWishlistsUpdateMutationRequest
>;
type CoreWishlistsUpdate = {
  data: CoreWishlistsUpdateMutationResponse;
  error: never;
  request: CoreWishlistsUpdateMutationRequest;
  pathParams: CoreWishlistsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreWishlistsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreWishlistsUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreWishlistsUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing wishlists.
 * @link /core/wishlists/:id/
 */
export function useCoreWishlistsUpdate(
  id: CoreWishlistsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreWishlistsUpdate["response"],
      CoreWishlistsUpdate["error"],
      CoreWishlistsUpdate["request"]
    >;
    client?: CoreWishlistsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreWishlistsUpdate["data"],
        CoreWishlistsUpdate["error"],
        CoreWishlistsUpdate["request"]
      >({
        method: "put",
        url: `/core/wishlists/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
