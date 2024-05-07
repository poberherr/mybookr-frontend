import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreBookingsCreateMutationRequest,
  CoreBookingsCreateMutationResponse,
} from "../types/CoreBookingsCreate";

type CoreBookingsCreateClient = typeof client<
  CoreBookingsCreateMutationResponse,
  never,
  CoreBookingsCreateMutationRequest
>;
type CoreBookingsCreate = {
  data: CoreBookingsCreateMutationResponse;
  error: never;
  request: CoreBookingsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreBookingsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreBookingsCreateClient>[0]>;
    return: Awaited<ReturnType<CoreBookingsCreateClient>>;
  };
};
/**
 * @description API endpoint for managing bookings.
 * @link /core/bookings/
 */
export function useCoreBookingsCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreBookingsCreate["response"],
      CoreBookingsCreate["error"],
      CoreBookingsCreate["request"]
    >;
    client?: CoreBookingsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreBookingsCreate["data"],
        CoreBookingsCreate["error"],
        CoreBookingsCreate["request"]
      >({
        method: "post",
        url: `/core/bookings/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
