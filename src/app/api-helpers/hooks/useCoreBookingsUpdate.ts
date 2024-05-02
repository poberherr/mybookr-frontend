import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreBookingsUpdateMutationRequest,
  CoreBookingsUpdateMutationResponse,
  CoreBookingsUpdatePathParams,
} from "../types/CoreBookingsUpdate";

type CoreBookingsUpdateClient = typeof client<
  CoreBookingsUpdateMutationResponse,
  never,
  CoreBookingsUpdateMutationRequest
>;
type CoreBookingsUpdate = {
  data: CoreBookingsUpdateMutationResponse;
  error: never;
  request: CoreBookingsUpdateMutationRequest;
  pathParams: CoreBookingsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreBookingsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreBookingsUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreBookingsUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing bookings.
 * @link /core/bookings/:id/
 */
export function useCoreBookingsUpdate(
  id: CoreBookingsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreBookingsUpdate["response"],
      CoreBookingsUpdate["error"],
      CoreBookingsUpdate["request"]
    >;
    client?: CoreBookingsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreBookingsUpdate["data"],
        CoreBookingsUpdate["error"],
        CoreBookingsUpdate["request"]
      >({
        method: "put",
        url: `/core/bookings/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
