import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  WorkshopsCreateMutationRequest,
  WorkshopsCreateMutationResponse,
} from "../types/WorkshopsCreate";

type WorkshopsCreateClient = typeof client<
  WorkshopsCreateMutationResponse,
  never,
  WorkshopsCreateMutationRequest
>;
type WorkshopsCreate = {
  data: WorkshopsCreateMutationResponse;
  error: never;
  request: WorkshopsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: WorkshopsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<WorkshopsCreateClient>[0]>;
    return: Awaited<ReturnType<WorkshopsCreateClient>>;
  };
};
/**
 * @link /workshops/
 */
export function useWorkshopsCreate(
  options: {
    mutation?: UseMutationOptions<
      WorkshopsCreate["response"],
      WorkshopsCreate["error"],
      WorkshopsCreate["request"]
    >;
    client?: WorkshopsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        WorkshopsCreate["data"],
        WorkshopsCreate["error"],
        WorkshopsCreate["request"]
      >({
        method: "post",
        url: `/workshops/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
