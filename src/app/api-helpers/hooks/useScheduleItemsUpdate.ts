import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  ScheduleItemsUpdateMutationRequest,
  ScheduleItemsUpdateMutationResponse,
  ScheduleItemsUpdatePathParams,
} from "../types/ScheduleItemsUpdate";

type ScheduleItemsUpdateClient = typeof client<
  ScheduleItemsUpdateMutationResponse,
  never,
  ScheduleItemsUpdateMutationRequest
>;
type ScheduleItemsUpdate = {
  data: ScheduleItemsUpdateMutationResponse;
  error: never;
  request: ScheduleItemsUpdateMutationRequest;
  pathParams: ScheduleItemsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: ScheduleItemsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<ScheduleItemsUpdateClient>[0]>;
    return: Awaited<ReturnType<ScheduleItemsUpdateClient>>;
  };
};
/**
 * @link /schedule-items/:id/
 */
export function useScheduleItemsUpdate(
  id: ScheduleItemsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ScheduleItemsUpdate["response"],
      ScheduleItemsUpdate["error"],
      ScheduleItemsUpdate["request"]
    >;
    client?: ScheduleItemsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        ScheduleItemsUpdate["data"],
        ScheduleItemsUpdate["error"],
        ScheduleItemsUpdate["request"]
      >({
        method: "put",
        url: `/schedule-items/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
