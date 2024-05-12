import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  ListingsAvailabilitiesCreateMutationRequest,
  ListingsAvailabilitiesCreateMutationResponse,
  ListingsAvailabilitiesCreatePathParams,
} from "../types/ListingsAvailabilitiesCreate";

type ListingsAvailabilitiesCreateClient = typeof client<
  ListingsAvailabilitiesCreateMutationResponse,
  never,
  ListingsAvailabilitiesCreateMutationRequest
>;
type ListingsAvailabilitiesCreate = {
  data: ListingsAvailabilitiesCreateMutationResponse;
  error: never;
  request: ListingsAvailabilitiesCreateMutationRequest;
  pathParams: ListingsAvailabilitiesCreatePathParams;
  queryParams: never;
  headerParams: never;
  response: ListingsAvailabilitiesCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<ListingsAvailabilitiesCreateClient>[0]>;
    return: Awaited<ReturnType<ListingsAvailabilitiesCreateClient>>;
  };
};
/**
 * @link /listings/:listing_pk/availabilities/
 */
export function useListingsAvailabilitiesCreate(
  listingPk: ListingsAvailabilitiesCreatePathParams["listing_pk"],
  options: {
    mutation?: UseMutationOptions<
      ListingsAvailabilitiesCreate["response"],
      ListingsAvailabilitiesCreate["error"],
      ListingsAvailabilitiesCreate["request"]
    >;
    client?: ListingsAvailabilitiesCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        ListingsAvailabilitiesCreate["data"],
        ListingsAvailabilitiesCreate["error"],
        ListingsAvailabilitiesCreate["request"]
      >({
        method: "post",
        url: `/listings/${listingPk}/availabilities/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
