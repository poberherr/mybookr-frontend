import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CorePaymentsUpdateMutationRequest,
  CorePaymentsUpdateMutationResponse,
  CorePaymentsUpdatePathParams,
} from "../types/CorePaymentsUpdate";

type CorePaymentsUpdateClient = typeof client<
  CorePaymentsUpdateMutationResponse,
  never,
  CorePaymentsUpdateMutationRequest
>;
type CorePaymentsUpdate = {
  data: CorePaymentsUpdateMutationResponse;
  error: never;
  request: CorePaymentsUpdateMutationRequest;
  pathParams: CorePaymentsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CorePaymentsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CorePaymentsUpdateClient>[0]>;
    return: Awaited<ReturnType<CorePaymentsUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing payments.
 * @link /core/payments/:id/
 */
export function useCorePaymentsUpdate(
  id: CorePaymentsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CorePaymentsUpdate["response"],
      CorePaymentsUpdate["error"],
      CorePaymentsUpdate["request"]
    >;
    client?: CorePaymentsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CorePaymentsUpdate["data"],
        CorePaymentsUpdate["error"],
        CorePaymentsUpdate["request"]
      >({
        method: "put",
        url: `/core/payments/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
