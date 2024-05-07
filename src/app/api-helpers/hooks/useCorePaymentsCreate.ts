import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CorePaymentsCreateMutationRequest,
  CorePaymentsCreateMutationResponse,
} from "../types/CorePaymentsCreate";

type CorePaymentsCreateClient = typeof client<
  CorePaymentsCreateMutationResponse,
  never,
  CorePaymentsCreateMutationRequest
>;
type CorePaymentsCreate = {
  data: CorePaymentsCreateMutationResponse;
  error: never;
  request: CorePaymentsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CorePaymentsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CorePaymentsCreateClient>[0]>;
    return: Awaited<ReturnType<CorePaymentsCreateClient>>;
  };
};
/**
 * @description API endpoint for managing payments.
 * @link /core/payments/
 */
export function useCorePaymentsCreate(
  options: {
    mutation?: UseMutationOptions<
      CorePaymentsCreate["response"],
      CorePaymentsCreate["error"],
      CorePaymentsCreate["request"]
    >;
    client?: CorePaymentsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CorePaymentsCreate["data"],
        CorePaymentsCreate["error"],
        CorePaymentsCreate["request"]
      >({
        method: "post",
        url: `/core/payments/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
