import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  PaymentsCreateMutationRequest,
  PaymentsCreateMutationResponse,
} from "../types/PaymentsCreate";

type PaymentsCreateClient = typeof client<
  PaymentsCreateMutationResponse,
  never,
  PaymentsCreateMutationRequest
>;
type PaymentsCreate = {
  data: PaymentsCreateMutationResponse;
  error: never;
  request: PaymentsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: PaymentsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<PaymentsCreateClient>[0]>;
    return: Awaited<ReturnType<PaymentsCreateClient>>;
  };
};
/**
 * @description API endpoint for managing payments.
 * @link /payments/
 */
export function usePaymentsCreate(
  options: {
    mutation?: UseMutationOptions<
      PaymentsCreate["response"],
      PaymentsCreate["error"],
      PaymentsCreate["request"]
    >;
    client?: PaymentsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        PaymentsCreate["data"],
        PaymentsCreate["error"],
        PaymentsCreate["request"]
      >({
        method: "post",
        url: `/payments/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
