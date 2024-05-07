import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreListingsUpdateMutationRequest,
  CoreListingsUpdateMutationResponse,
  CoreListingsUpdatePathParams,
} from "../types/CoreListingsUpdate";

type CoreListingsUpdateClient = typeof client<
  CoreListingsUpdateMutationResponse,
  never,
  CoreListingsUpdateMutationRequest
>;
type CoreListingsUpdate = {
  data: CoreListingsUpdateMutationResponse;
  error: never;
  request: CoreListingsUpdateMutationRequest;
  pathParams: CoreListingsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreListingsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreListingsUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreListingsUpdateClient>>;
  };
};
/**
 * @link /core/listings/:id/
 */
export function useCoreListingsUpdate(
  id: CoreListingsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreListingsUpdate["response"],
      CoreListingsUpdate["error"],
      CoreListingsUpdate["request"]
    >;
    client?: CoreListingsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreListingsUpdate["data"],
        CoreListingsUpdate["error"],
        CoreListingsUpdate["request"]
      >({
        method: "put",
        url: `/core/listings/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
