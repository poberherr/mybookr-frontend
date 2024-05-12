import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  BookingsPartialUpdateMutationRequest,
  BookingsPartialUpdateMutationResponse,
  BookingsPartialUpdatePathParams,
} from "../types/BookingsPartialUpdate";

type BookingsPartialUpdateClient = typeof client<
  BookingsPartialUpdateMutationResponse,
  never,
  BookingsPartialUpdateMutationRequest
>;
type BookingsPartialUpdate = {
  data: BookingsPartialUpdateMutationResponse;
  error: never;
  request: BookingsPartialUpdateMutationRequest;
  pathParams: BookingsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: BookingsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<BookingsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<BookingsPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing bookings.
 * @link /bookings/:id/
 */
export function useBookingsPartialUpdate(
  id: BookingsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      BookingsPartialUpdate["response"],
      BookingsPartialUpdate["error"],
      BookingsPartialUpdate["request"]
    >;
    client?: BookingsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        BookingsPartialUpdate["data"],
        BookingsPartialUpdate["error"],
        BookingsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/bookings/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
