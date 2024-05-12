import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  WorkshopsUpdateMutationRequest,
  WorkshopsUpdateMutationResponse,
  WorkshopsUpdatePathParams,
} from "../types/WorkshopsUpdate";

type WorkshopsUpdateClient = typeof client<
  WorkshopsUpdateMutationResponse,
  never,
  WorkshopsUpdateMutationRequest
>;
type WorkshopsUpdate = {
  data: WorkshopsUpdateMutationResponse;
  error: never;
  request: WorkshopsUpdateMutationRequest;
  pathParams: WorkshopsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: WorkshopsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<WorkshopsUpdateClient>[0]>;
    return: Awaited<ReturnType<WorkshopsUpdateClient>>;
  };
};
/**
 * @link /workshops/:id/
 */
export function useWorkshopsUpdate(
  id: WorkshopsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      WorkshopsUpdate["response"],
      WorkshopsUpdate["error"],
      WorkshopsUpdate["request"]
    >;
    client?: WorkshopsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        WorkshopsUpdate["data"],
        WorkshopsUpdate["error"],
        WorkshopsUpdate["request"]
      >({
        method: "put",
        url: `/workshops/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
