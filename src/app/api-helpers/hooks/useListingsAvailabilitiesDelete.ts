import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  ListingsAvailabilitiesDeleteMutationResponse,
  ListingsAvailabilitiesDeletePathParams,
} from "../types/ListingsAvailabilitiesDelete";

type ListingsAvailabilitiesDeleteClient = typeof client<
  ListingsAvailabilitiesDeleteMutationResponse,
  never,
  never
>;
type ListingsAvailabilitiesDelete = {
  data: ListingsAvailabilitiesDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: ListingsAvailabilitiesDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: ListingsAvailabilitiesDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<ListingsAvailabilitiesDeleteClient>[0]>;
    return: Awaited<ReturnType<ListingsAvailabilitiesDeleteClient>>;
  };
};
/**
 * @link /listings/:listing_pk/availabilities/:id/
 */
export function useListingsAvailabilitiesDelete(
  listingPk: ListingsAvailabilitiesDeletePathParams["listing_pk"],
  id: ListingsAvailabilitiesDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ListingsAvailabilitiesDelete["response"],
      ListingsAvailabilitiesDelete["error"],
      ListingsAvailabilitiesDelete["request"]
    >;
    client?: ListingsAvailabilitiesDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        ListingsAvailabilitiesDelete["data"],
        ListingsAvailabilitiesDelete["error"],
        ListingsAvailabilitiesDelete["request"]
      >({
        method: "delete",
        url: `/listings/${listingPk}/availabilities/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
