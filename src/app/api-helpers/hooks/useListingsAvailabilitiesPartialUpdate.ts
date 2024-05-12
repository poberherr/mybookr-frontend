import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  ListingsAvailabilitiesPartialUpdateMutationRequest,
  ListingsAvailabilitiesPartialUpdateMutationResponse,
  ListingsAvailabilitiesPartialUpdatePathParams,
} from "../types/ListingsAvailabilitiesPartialUpdate";

type ListingsAvailabilitiesPartialUpdateClient = typeof client<
  ListingsAvailabilitiesPartialUpdateMutationResponse,
  never,
  ListingsAvailabilitiesPartialUpdateMutationRequest
>;
type ListingsAvailabilitiesPartialUpdate = {
  data: ListingsAvailabilitiesPartialUpdateMutationResponse;
  error: never;
  request: ListingsAvailabilitiesPartialUpdateMutationRequest;
  pathParams: ListingsAvailabilitiesPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: ListingsAvailabilitiesPartialUpdateMutationResponse;
  client: {
    parameters: Partial<
      Parameters<ListingsAvailabilitiesPartialUpdateClient>[0]
    >;
    return: Awaited<ReturnType<ListingsAvailabilitiesPartialUpdateClient>>;
  };
};
/**
 * @link /listings/:listing_pk/availabilities/:id/
 */
export function useListingsAvailabilitiesPartialUpdate(
  listingPk: ListingsAvailabilitiesPartialUpdatePathParams["listing_pk"],
  id: ListingsAvailabilitiesPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ListingsAvailabilitiesPartialUpdate["response"],
      ListingsAvailabilitiesPartialUpdate["error"],
      ListingsAvailabilitiesPartialUpdate["request"]
    >;
    client?: ListingsAvailabilitiesPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        ListingsAvailabilitiesPartialUpdate["data"],
        ListingsAvailabilitiesPartialUpdate["error"],
        ListingsAvailabilitiesPartialUpdate["request"]
      >({
        method: "patch",
        url: `/listings/${listingPk}/availabilities/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
