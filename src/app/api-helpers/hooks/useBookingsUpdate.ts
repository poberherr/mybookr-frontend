import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  BookingsUpdateMutationRequest,
  BookingsUpdateMutationResponse,
  BookingsUpdatePathParams,
} from "../types/BookingsUpdate";

type BookingsUpdateClient = typeof client<
  BookingsUpdateMutationResponse,
  never,
  BookingsUpdateMutationRequest
>;
type BookingsUpdate = {
  data: BookingsUpdateMutationResponse;
  error: never;
  request: BookingsUpdateMutationRequest;
  pathParams: BookingsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: BookingsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<BookingsUpdateClient>[0]>;
    return: Awaited<ReturnType<BookingsUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing bookings.
 * @link /bookings/:id/
 */
export function useBookingsUpdate(
  id: BookingsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      BookingsUpdate["response"],
      BookingsUpdate["error"],
      BookingsUpdate["request"]
    >;
    client?: BookingsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        BookingsUpdate["data"],
        BookingsUpdate["error"],
        BookingsUpdate["request"]
      >({
        method: "put",
        url: `/bookings/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
