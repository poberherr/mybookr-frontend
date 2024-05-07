import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreScheduleItemsUpdateMutationRequest,
  CoreScheduleItemsUpdateMutationResponse,
  CoreScheduleItemsUpdatePathParams,
} from "../types/CoreScheduleItemsUpdate";

type CoreScheduleItemsUpdateClient = typeof client<
  CoreScheduleItemsUpdateMutationResponse,
  never,
  CoreScheduleItemsUpdateMutationRequest
>;
type CoreScheduleItemsUpdate = {
  data: CoreScheduleItemsUpdateMutationResponse;
  error: never;
  request: CoreScheduleItemsUpdateMutationRequest;
  pathParams: CoreScheduleItemsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreScheduleItemsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreScheduleItemsUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreScheduleItemsUpdateClient>>;
  };
};
/**
 * @link /core/schedule-items/:id/
 */
export function useCoreScheduleItemsUpdate(
  id: CoreScheduleItemsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreScheduleItemsUpdate["response"],
      CoreScheduleItemsUpdate["error"],
      CoreScheduleItemsUpdate["request"]
    >;
    client?: CoreScheduleItemsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreScheduleItemsUpdate["data"],
        CoreScheduleItemsUpdate["error"],
        CoreScheduleItemsUpdate["request"]
      >({
        method: "put",
        url: `/core/schedule-items/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
