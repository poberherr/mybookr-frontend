import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreListingsPartialUpdateMutationRequest,
  CoreListingsPartialUpdateMutationResponse,
  CoreListingsPartialUpdatePathParams,
} from "../types/CoreListingsPartialUpdate";

type CoreListingsPartialUpdateClient = typeof client<
  CoreListingsPartialUpdateMutationResponse,
  never,
  CoreListingsPartialUpdateMutationRequest
>;
type CoreListingsPartialUpdate = {
  data: CoreListingsPartialUpdateMutationResponse;
  error: never;
  request: CoreListingsPartialUpdateMutationRequest;
  pathParams: CoreListingsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreListingsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreListingsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreListingsPartialUpdateClient>>;
  };
};
/**
 * @link /core/listings/:id/
 */
export function useCoreListingsPartialUpdate(
  id: CoreListingsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreListingsPartialUpdate["response"],
      CoreListingsPartialUpdate["error"],
      CoreListingsPartialUpdate["request"]
    >;
    client?: CoreListingsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreListingsPartialUpdate["data"],
        CoreListingsPartialUpdate["error"],
        CoreListingsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/listings/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
