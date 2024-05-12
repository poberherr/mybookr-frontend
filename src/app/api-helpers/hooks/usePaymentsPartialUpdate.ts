import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  PaymentsPartialUpdateMutationRequest,
  PaymentsPartialUpdateMutationResponse,
  PaymentsPartialUpdatePathParams,
} from "../types/PaymentsPartialUpdate";

type PaymentsPartialUpdateClient = typeof client<
  PaymentsPartialUpdateMutationResponse,
  never,
  PaymentsPartialUpdateMutationRequest
>;
type PaymentsPartialUpdate = {
  data: PaymentsPartialUpdateMutationResponse;
  error: never;
  request: PaymentsPartialUpdateMutationRequest;
  pathParams: PaymentsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: PaymentsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<PaymentsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<PaymentsPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing payments.
 * @link /payments/:id/
 */
export function usePaymentsPartialUpdate(
  id: PaymentsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      PaymentsPartialUpdate["response"],
      PaymentsPartialUpdate["error"],
      PaymentsPartialUpdate["request"]
    >;
    client?: PaymentsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        PaymentsPartialUpdate["data"],
        PaymentsPartialUpdate["error"],
        PaymentsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/payments/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
