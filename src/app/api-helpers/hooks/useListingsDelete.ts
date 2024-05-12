import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  ListingsDeleteMutationResponse,
  ListingsDeletePathParams,
} from "../types/ListingsDelete";

type ListingsDeleteClient = typeof client<
  ListingsDeleteMutationResponse,
  never,
  never
>;
type ListingsDelete = {
  data: ListingsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: ListingsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: ListingsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<ListingsDeleteClient>[0]>;
    return: Awaited<ReturnType<ListingsDeleteClient>>;
  };
};
/**
 * @link /listings/:id/
 */
export function useListingsDelete(
  id: ListingsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ListingsDelete["response"],
      ListingsDelete["error"],
      ListingsDelete["request"]
    >;
    client?: ListingsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        ListingsDelete["data"],
        ListingsDelete["error"],
        ListingsDelete["request"]
      >({
        method: "delete",
        url: `/listings/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
