import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  ListingsAvailabilitiesUpdateMutationRequest,
  ListingsAvailabilitiesUpdateMutationResponse,
  ListingsAvailabilitiesUpdatePathParams,
} from "../types/ListingsAvailabilitiesUpdate";

type ListingsAvailabilitiesUpdateClient = typeof client<
  ListingsAvailabilitiesUpdateMutationResponse,
  never,
  ListingsAvailabilitiesUpdateMutationRequest
>;
type ListingsAvailabilitiesUpdate = {
  data: ListingsAvailabilitiesUpdateMutationResponse;
  error: never;
  request: ListingsAvailabilitiesUpdateMutationRequest;
  pathParams: ListingsAvailabilitiesUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: ListingsAvailabilitiesUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<ListingsAvailabilitiesUpdateClient>[0]>;
    return: Awaited<ReturnType<ListingsAvailabilitiesUpdateClient>>;
  };
};
/**
 * @link /listings/:listing_pk/availabilities/:id/
 */
export function useListingsAvailabilitiesUpdate(
  listingPk: ListingsAvailabilitiesUpdatePathParams["listing_pk"],
  id: ListingsAvailabilitiesUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ListingsAvailabilitiesUpdate["response"],
      ListingsAvailabilitiesUpdate["error"],
      ListingsAvailabilitiesUpdate["request"]
    >;
    client?: ListingsAvailabilitiesUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        ListingsAvailabilitiesUpdate["data"],
        ListingsAvailabilitiesUpdate["error"],
        ListingsAvailabilitiesUpdate["request"]
      >({
        method: "put",
        url: `/listings/${listingPk}/availabilities/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
