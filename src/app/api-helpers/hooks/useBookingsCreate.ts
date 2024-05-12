import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  BookingsCreateMutationRequest,
  BookingsCreateMutationResponse,
} from "../types/BookingsCreate";

type BookingsCreateClient = typeof client<
  BookingsCreateMutationResponse,
  never,
  BookingsCreateMutationRequest
>;
type BookingsCreate = {
  data: BookingsCreateMutationResponse;
  error: never;
  request: BookingsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: BookingsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<BookingsCreateClient>[0]>;
    return: Awaited<ReturnType<BookingsCreateClient>>;
  };
};
/**
 * @description API endpoint for managing bookings.
 * @link /bookings/
 */
export function useBookingsCreate(
  options: {
    mutation?: UseMutationOptions<
      BookingsCreate["response"],
      BookingsCreate["error"],
      BookingsCreate["request"]
    >;
    client?: BookingsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        BookingsCreate["data"],
        BookingsCreate["error"],
        BookingsCreate["request"]
      >({
        method: "post",
        url: `/bookings/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
