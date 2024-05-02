import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreCreatePaymentCreate400,
  CoreCreatePaymentCreate500,
  CoreCreatePaymentCreateMutationRequest,
  CoreCreatePaymentCreateMutationResponse,
} from "../types/CoreCreatePaymentCreate";

type CoreCreatePaymentCreateClient = typeof client<
  CoreCreatePaymentCreateMutationResponse,
  CoreCreatePaymentCreate400 | CoreCreatePaymentCreate500,
  CoreCreatePaymentCreateMutationRequest
>;
type CoreCreatePaymentCreate = {
  data: CoreCreatePaymentCreateMutationResponse;
  error: CoreCreatePaymentCreate400 | CoreCreatePaymentCreate500;
  request: CoreCreatePaymentCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreCreatePaymentCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreCreatePaymentCreateClient>[0]>;
    return: Awaited<ReturnType<CoreCreatePaymentCreateClient>>;
  };
};
/**
 * @link /core/create-payment/
 */
export function useCoreCreatePaymentCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreCreatePaymentCreate["response"],
      CoreCreatePaymentCreate["error"],
      CoreCreatePaymentCreate["request"]
    >;
    client?: CoreCreatePaymentCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreCreatePaymentCreate["data"],
        CoreCreatePaymentCreate["error"],
        CoreCreatePaymentCreate["request"]
      >({
        method: "post",
        url: `/core/create-payment/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
