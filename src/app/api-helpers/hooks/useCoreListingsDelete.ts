import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreListingsDeleteMutationResponse,
  CoreListingsDeletePathParams,
} from "../types/CoreListingsDelete";

type CoreListingsDeleteClient = typeof client<
  CoreListingsDeleteMutationResponse,
  never,
  never
>;
type CoreListingsDelete = {
  data: CoreListingsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreListingsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreListingsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreListingsDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreListingsDeleteClient>>;
  };
};
/**
 * @link /core/listings/:id/
 */
export function useCoreListingsDelete(
  id: CoreListingsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreListingsDelete["response"],
      CoreListingsDelete["error"],
      CoreListingsDelete["request"]
    >;
    client?: CoreListingsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreListingsDelete["data"],
        CoreListingsDelete["error"],
        CoreListingsDelete["request"]
      >({
        method: "delete",
        url: `/core/listings/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
