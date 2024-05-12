import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CreatePaymentCreate400,
  CreatePaymentCreate500,
  CreatePaymentCreateMutationRequest,
  CreatePaymentCreateMutationResponse,
} from "../types/CreatePaymentCreate";

type CreatePaymentCreateClient = typeof client<
  CreatePaymentCreateMutationResponse,
  CreatePaymentCreate400 | CreatePaymentCreate500,
  CreatePaymentCreateMutationRequest
>;
type CreatePaymentCreate = {
  data: CreatePaymentCreateMutationResponse;
  error: CreatePaymentCreate400 | CreatePaymentCreate500;
  request: CreatePaymentCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CreatePaymentCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CreatePaymentCreateClient>[0]>;
    return: Awaited<ReturnType<CreatePaymentCreateClient>>;
  };
};
/**
 * @link /create-payment/
 */
export function useCreatePaymentCreate(
  options: {
    mutation?: UseMutationOptions<
      CreatePaymentCreate["response"],
      CreatePaymentCreate["error"],
      CreatePaymentCreate["request"]
    >;
    client?: CreatePaymentCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CreatePaymentCreate["data"],
        CreatePaymentCreate["error"],
        CreatePaymentCreate["request"]
      >({
        method: "post",
        url: `/create-payment/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
