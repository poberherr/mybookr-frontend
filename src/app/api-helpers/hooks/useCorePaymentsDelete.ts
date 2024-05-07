import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CorePaymentsDeleteMutationResponse,
  CorePaymentsDeletePathParams,
} from "../types/CorePaymentsDelete";

type CorePaymentsDeleteClient = typeof client<
  CorePaymentsDeleteMutationResponse,
  never,
  never
>;
type CorePaymentsDelete = {
  data: CorePaymentsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CorePaymentsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CorePaymentsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CorePaymentsDeleteClient>[0]>;
    return: Awaited<ReturnType<CorePaymentsDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing payments.
 * @link /core/payments/:id/
 */
export function useCorePaymentsDelete(
  id: CorePaymentsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CorePaymentsDelete["response"],
      CorePaymentsDelete["error"],
      CorePaymentsDelete["request"]
    >;
    client?: CorePaymentsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CorePaymentsDelete["data"],
        CorePaymentsDelete["error"],
        CorePaymentsDelete["request"]
      >({
        method: "delete",
        url: `/core/payments/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
