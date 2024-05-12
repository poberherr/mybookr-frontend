import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  ListingsCreateMutationRequest,
  ListingsCreateMutationResponse,
} from "../types/ListingsCreate";

type ListingsCreateClient = typeof client<
  ListingsCreateMutationResponse,
  never,
  ListingsCreateMutationRequest
>;
type ListingsCreate = {
  data: ListingsCreateMutationResponse;
  error: never;
  request: ListingsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: ListingsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<ListingsCreateClient>[0]>;
    return: Awaited<ReturnType<ListingsCreateClient>>;
  };
};
/**
 * @link /listings/
 */
export function useListingsCreate(
  options: {
    mutation?: UseMutationOptions<
      ListingsCreate["response"],
      ListingsCreate["error"],
      ListingsCreate["request"]
    >;
    client?: ListingsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        ListingsCreate["data"],
        ListingsCreate["error"],
        ListingsCreate["request"]
      >({
        method: "post",
        url: `/listings/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
