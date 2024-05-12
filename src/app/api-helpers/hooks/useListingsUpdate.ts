import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  ListingsUpdateMutationRequest,
  ListingsUpdateMutationResponse,
  ListingsUpdatePathParams,
} from "../types/ListingsUpdate";

type ListingsUpdateClient = typeof client<
  ListingsUpdateMutationResponse,
  never,
  ListingsUpdateMutationRequest
>;
type ListingsUpdate = {
  data: ListingsUpdateMutationResponse;
  error: never;
  request: ListingsUpdateMutationRequest;
  pathParams: ListingsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: ListingsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<ListingsUpdateClient>[0]>;
    return: Awaited<ReturnType<ListingsUpdateClient>>;
  };
};
/**
 * @link /listings/:id/
 */
export function useListingsUpdate(
  id: ListingsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ListingsUpdate["response"],
      ListingsUpdate["error"],
      ListingsUpdate["request"]
    >;
    client?: ListingsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        ListingsUpdate["data"],
        ListingsUpdate["error"],
        ListingsUpdate["request"]
      >({
        method: "put",
        url: `/listings/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
