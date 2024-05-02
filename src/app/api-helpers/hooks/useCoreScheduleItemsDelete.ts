import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreScheduleItemsDeleteMutationResponse,
  CoreScheduleItemsDeletePathParams,
} from "../types/CoreScheduleItemsDelete";

type CoreScheduleItemsDeleteClient = typeof client<
  CoreScheduleItemsDeleteMutationResponse,
  never,
  never
>;
type CoreScheduleItemsDelete = {
  data: CoreScheduleItemsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreScheduleItemsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreScheduleItemsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreScheduleItemsDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreScheduleItemsDeleteClient>>;
  };
};
/**
 * @link /core/schedule-items/:id/
 */
export function useCoreScheduleItemsDelete(
  id: CoreScheduleItemsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreScheduleItemsDelete["response"],
      CoreScheduleItemsDelete["error"],
      CoreScheduleItemsDelete["request"]
    >;
    client?: CoreScheduleItemsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreScheduleItemsDelete["data"],
        CoreScheduleItemsDelete["error"],
        CoreScheduleItemsDelete["request"]
      >({
        method: "delete",
        url: `/core/schedule-items/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
