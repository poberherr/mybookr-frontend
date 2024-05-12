import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  ScheduleItemsDeleteMutationResponse,
  ScheduleItemsDeletePathParams,
} from "../types/ScheduleItemsDelete";

type ScheduleItemsDeleteClient = typeof client<
  ScheduleItemsDeleteMutationResponse,
  never,
  never
>;
type ScheduleItemsDelete = {
  data: ScheduleItemsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: ScheduleItemsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: ScheduleItemsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<ScheduleItemsDeleteClient>[0]>;
    return: Awaited<ReturnType<ScheduleItemsDeleteClient>>;
  };
};
/**
 * @link /schedule-items/:id/
 */
export function useScheduleItemsDelete(
  id: ScheduleItemsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ScheduleItemsDelete["response"],
      ScheduleItemsDelete["error"],
      ScheduleItemsDelete["request"]
    >;
    client?: ScheduleItemsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        ScheduleItemsDelete["data"],
        ScheduleItemsDelete["error"],
        ScheduleItemsDelete["request"]
      >({
        method: "delete",
        url: `/schedule-items/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
