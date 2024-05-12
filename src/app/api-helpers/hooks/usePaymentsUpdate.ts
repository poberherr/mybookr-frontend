import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  PaymentsUpdateMutationRequest,
  PaymentsUpdateMutationResponse,
  PaymentsUpdatePathParams,
} from "../types/PaymentsUpdate";

type PaymentsUpdateClient = typeof client<
  PaymentsUpdateMutationResponse,
  never,
  PaymentsUpdateMutationRequest
>;
type PaymentsUpdate = {
  data: PaymentsUpdateMutationResponse;
  error: never;
  request: PaymentsUpdateMutationRequest;
  pathParams: PaymentsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: PaymentsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<PaymentsUpdateClient>[0]>;
    return: Awaited<ReturnType<PaymentsUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing payments.
 * @link /payments/:id/
 */
export function usePaymentsUpdate(
  id: PaymentsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      PaymentsUpdate["response"],
      PaymentsUpdate["error"],
      PaymentsUpdate["request"]
    >;
    client?: PaymentsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        PaymentsUpdate["data"],
        PaymentsUpdate["error"],
        PaymentsUpdate["request"]
      >({
        method: "put",
        url: `/payments/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
