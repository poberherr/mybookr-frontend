import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  PaymentsDeleteMutationResponse,
  PaymentsDeletePathParams,
} from "../types/PaymentsDelete";

type PaymentsDeleteClient = typeof client<
  PaymentsDeleteMutationResponse,
  never,
  never
>;
type PaymentsDelete = {
  data: PaymentsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: PaymentsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: PaymentsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<PaymentsDeleteClient>[0]>;
    return: Awaited<ReturnType<PaymentsDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing payments.
 * @link /payments/:id/
 */
export function usePaymentsDelete(
  id: PaymentsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      PaymentsDelete["response"],
      PaymentsDelete["error"],
      PaymentsDelete["request"]
    >;
    client?: PaymentsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        PaymentsDelete["data"],
        PaymentsDelete["error"],
        PaymentsDelete["request"]
      >({
        method: "delete",
        url: `/payments/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
