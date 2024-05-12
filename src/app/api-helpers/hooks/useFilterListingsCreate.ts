import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type { FilterListingsCreateMutationResponse } from "../types/FilterListingsCreate";

type FilterListingsCreateClient = typeof client<
  FilterListingsCreateMutationResponse,
  never,
  never
>;
type FilterListingsCreate = {
  data: FilterListingsCreateMutationResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: FilterListingsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<FilterListingsCreateClient>[0]>;
    return: Awaited<ReturnType<FilterListingsCreateClient>>;
  };
};
/**
 * @link /filter-listings/
 */
export function useFilterListingsCreate(
  options: {
    mutation?: UseMutationOptions<
      FilterListingsCreate["response"],
      FilterListingsCreate["error"],
      FilterListingsCreate["request"]
    >;
    client?: FilterListingsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        FilterListingsCreate["data"],
        FilterListingsCreate["error"],
        FilterListingsCreate["request"]
      >({
        method: "post",
        url: `/filter-listings/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
