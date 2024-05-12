import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  ScheduleItemsPartialUpdateMutationRequest,
  ScheduleItemsPartialUpdateMutationResponse,
  ScheduleItemsPartialUpdatePathParams,
} from "../types/ScheduleItemsPartialUpdate";

type ScheduleItemsPartialUpdateClient = typeof client<
  ScheduleItemsPartialUpdateMutationResponse,
  never,
  ScheduleItemsPartialUpdateMutationRequest
>;
type ScheduleItemsPartialUpdate = {
  data: ScheduleItemsPartialUpdateMutationResponse;
  error: never;
  request: ScheduleItemsPartialUpdateMutationRequest;
  pathParams: ScheduleItemsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: ScheduleItemsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<ScheduleItemsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<ScheduleItemsPartialUpdateClient>>;
  };
};
/**
 * @link /schedule-items/:id/
 */
export function useScheduleItemsPartialUpdate(
  id: ScheduleItemsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ScheduleItemsPartialUpdate["response"],
      ScheduleItemsPartialUpdate["error"],
      ScheduleItemsPartialUpdate["request"]
    >;
    client?: ScheduleItemsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        ScheduleItemsPartialUpdate["data"],
        ScheduleItemsPartialUpdate["error"],
        ScheduleItemsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/schedule-items/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
