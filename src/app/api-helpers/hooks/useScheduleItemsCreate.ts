import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  ScheduleItemsCreateMutationRequest,
  ScheduleItemsCreateMutationResponse,
} from "../types/ScheduleItemsCreate";

type ScheduleItemsCreateClient = typeof client<
  ScheduleItemsCreateMutationResponse,
  never,
  ScheduleItemsCreateMutationRequest
>;
type ScheduleItemsCreate = {
  data: ScheduleItemsCreateMutationResponse;
  error: never;
  request: ScheduleItemsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: ScheduleItemsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<ScheduleItemsCreateClient>[0]>;
    return: Awaited<ReturnType<ScheduleItemsCreateClient>>;
  };
};
/**
 * @link /schedule-items/
 */
export function useScheduleItemsCreate(
  options: {
    mutation?: UseMutationOptions<
      ScheduleItemsCreate["response"],
      ScheduleItemsCreate["error"],
      ScheduleItemsCreate["request"]
    >;
    client?: ScheduleItemsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        ScheduleItemsCreate["data"],
        ScheduleItemsCreate["error"],
        ScheduleItemsCreate["request"]
      >({
        method: "post",
        url: `/schedule-items/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
