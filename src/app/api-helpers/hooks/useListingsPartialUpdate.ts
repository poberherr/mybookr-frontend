import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  ListingsPartialUpdateMutationRequest,
  ListingsPartialUpdateMutationResponse,
  ListingsPartialUpdatePathParams,
} from "../types/ListingsPartialUpdate";

type ListingsPartialUpdateClient = typeof client<
  ListingsPartialUpdateMutationResponse,
  never,
  ListingsPartialUpdateMutationRequest
>;
type ListingsPartialUpdate = {
  data: ListingsPartialUpdateMutationResponse;
  error: never;
  request: ListingsPartialUpdateMutationRequest;
  pathParams: ListingsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: ListingsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<ListingsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<ListingsPartialUpdateClient>>;
  };
};
/**
 * @link /listings/:id/
 */
export function useListingsPartialUpdate(
  id: ListingsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ListingsPartialUpdate["response"],
      ListingsPartialUpdate["error"],
      ListingsPartialUpdate["request"]
    >;
    client?: ListingsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        ListingsPartialUpdate["data"],
        ListingsPartialUpdate["error"],
        ListingsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/listings/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
