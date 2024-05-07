import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreScheduleItemsCreateMutationRequest,
  CoreScheduleItemsCreateMutationResponse,
} from "../types/CoreScheduleItemsCreate";

type CoreScheduleItemsCreateClient = typeof client<
  CoreScheduleItemsCreateMutationResponse,
  never,
  CoreScheduleItemsCreateMutationRequest
>;
type CoreScheduleItemsCreate = {
  data: CoreScheduleItemsCreateMutationResponse;
  error: never;
  request: CoreScheduleItemsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreScheduleItemsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreScheduleItemsCreateClient>[0]>;
    return: Awaited<ReturnType<CoreScheduleItemsCreateClient>>;
  };
};
/**
 * @link /core/schedule-items/
 */
export function useCoreScheduleItemsCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreScheduleItemsCreate["response"],
      CoreScheduleItemsCreate["error"],
      CoreScheduleItemsCreate["request"]
    >;
    client?: CoreScheduleItemsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreScheduleItemsCreate["data"],
        CoreScheduleItemsCreate["error"],
        CoreScheduleItemsCreate["request"]
      >({
        method: "post",
        url: `/core/schedule-items/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
