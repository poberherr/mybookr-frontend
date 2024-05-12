import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  WorkshopsPartialUpdateMutationRequest,
  WorkshopsPartialUpdateMutationResponse,
  WorkshopsPartialUpdatePathParams,
} from "../types/WorkshopsPartialUpdate";

type WorkshopsPartialUpdateClient = typeof client<
  WorkshopsPartialUpdateMutationResponse,
  never,
  WorkshopsPartialUpdateMutationRequest
>;
type WorkshopsPartialUpdate = {
  data: WorkshopsPartialUpdateMutationResponse;
  error: never;
  request: WorkshopsPartialUpdateMutationRequest;
  pathParams: WorkshopsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: WorkshopsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<WorkshopsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<WorkshopsPartialUpdateClient>>;
  };
};
/**
 * @link /workshops/:id/
 */
export function useWorkshopsPartialUpdate(
  id: WorkshopsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      WorkshopsPartialUpdate["response"],
      WorkshopsPartialUpdate["error"],
      WorkshopsPartialUpdate["request"]
    >;
    client?: WorkshopsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        WorkshopsPartialUpdate["data"],
        WorkshopsPartialUpdate["error"],
        WorkshopsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/workshops/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
