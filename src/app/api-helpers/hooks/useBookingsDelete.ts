import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  BookingsDeleteMutationResponse,
  BookingsDeletePathParams,
} from "../types/BookingsDelete";

type BookingsDeleteClient = typeof client<
  BookingsDeleteMutationResponse,
  never,
  never
>;
type BookingsDelete = {
  data: BookingsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: BookingsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: BookingsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<BookingsDeleteClient>[0]>;
    return: Awaited<ReturnType<BookingsDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing bookings.
 * @link /bookings/:id/
 */
export function useBookingsDelete(
  id: BookingsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      BookingsDelete["response"],
      BookingsDelete["error"],
      BookingsDelete["request"]
    >;
    client?: BookingsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        BookingsDelete["data"],
        BookingsDelete["error"],
        BookingsDelete["request"]
      >({
        method: "delete",
        url: `/bookings/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
