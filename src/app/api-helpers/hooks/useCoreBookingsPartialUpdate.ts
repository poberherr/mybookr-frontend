import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreBookingsPartialUpdateMutationRequest,
  CoreBookingsPartialUpdateMutationResponse,
  CoreBookingsPartialUpdatePathParams,
} from "../types/CoreBookingsPartialUpdate";

type CoreBookingsPartialUpdateClient = typeof client<
  CoreBookingsPartialUpdateMutationResponse,
  never,
  CoreBookingsPartialUpdateMutationRequest
>;
type CoreBookingsPartialUpdate = {
  data: CoreBookingsPartialUpdateMutationResponse;
  error: never;
  request: CoreBookingsPartialUpdateMutationRequest;
  pathParams: CoreBookingsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreBookingsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreBookingsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreBookingsPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing bookings.
 * @link /core/bookings/:id/
 */
export function useCoreBookingsPartialUpdate(
  id: CoreBookingsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreBookingsPartialUpdate["response"],
      CoreBookingsPartialUpdate["error"],
      CoreBookingsPartialUpdate["request"]
    >;
    client?: CoreBookingsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreBookingsPartialUpdate["data"],
        CoreBookingsPartialUpdate["error"],
        CoreBookingsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/bookings/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
