import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreScheduleItemsPartialUpdateMutationRequest,
  CoreScheduleItemsPartialUpdateMutationResponse,
  CoreScheduleItemsPartialUpdatePathParams,
} from "../types/CoreScheduleItemsPartialUpdate";

type CoreScheduleItemsPartialUpdateClient = typeof client<
  CoreScheduleItemsPartialUpdateMutationResponse,
  never,
  CoreScheduleItemsPartialUpdateMutationRequest
>;
type CoreScheduleItemsPartialUpdate = {
  data: CoreScheduleItemsPartialUpdateMutationResponse;
  error: never;
  request: CoreScheduleItemsPartialUpdateMutationRequest;
  pathParams: CoreScheduleItemsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreScheduleItemsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreScheduleItemsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreScheduleItemsPartialUpdateClient>>;
  };
};
/**
 * @link /core/schedule-items/:id/
 */
export function useCoreScheduleItemsPartialUpdate(
  id: CoreScheduleItemsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreScheduleItemsPartialUpdate["response"],
      CoreScheduleItemsPartialUpdate["error"],
      CoreScheduleItemsPartialUpdate["request"]
    >;
    client?: CoreScheduleItemsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreScheduleItemsPartialUpdate["data"],
        CoreScheduleItemsPartialUpdate["error"],
        CoreScheduleItemsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/schedule-items/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
