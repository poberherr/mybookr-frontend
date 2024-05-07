import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CorePaymentsPartialUpdateMutationRequest,
  CorePaymentsPartialUpdateMutationResponse,
  CorePaymentsPartialUpdatePathParams,
} from "../types/CorePaymentsPartialUpdate";

type CorePaymentsPartialUpdateClient = typeof client<
  CorePaymentsPartialUpdateMutationResponse,
  never,
  CorePaymentsPartialUpdateMutationRequest
>;
type CorePaymentsPartialUpdate = {
  data: CorePaymentsPartialUpdateMutationResponse;
  error: never;
  request: CorePaymentsPartialUpdateMutationRequest;
  pathParams: CorePaymentsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CorePaymentsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CorePaymentsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CorePaymentsPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing payments.
 * @link /core/payments/:id/
 */
export function useCorePaymentsPartialUpdate(
  id: CorePaymentsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CorePaymentsPartialUpdate["response"],
      CorePaymentsPartialUpdate["error"],
      CorePaymentsPartialUpdate["request"]
    >;
    client?: CorePaymentsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CorePaymentsPartialUpdate["data"],
        CorePaymentsPartialUpdate["error"],
        CorePaymentsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/payments/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
