import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  WorkshopsDeleteMutationResponse,
  WorkshopsDeletePathParams,
} from "../types/WorkshopsDelete";

type WorkshopsDeleteClient = typeof client<
  WorkshopsDeleteMutationResponse,
  never,
  never
>;
type WorkshopsDelete = {
  data: WorkshopsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: WorkshopsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: WorkshopsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<WorkshopsDeleteClient>[0]>;
    return: Awaited<ReturnType<WorkshopsDeleteClient>>;
  };
};
/**
 * @link /workshops/:id/
 */
export function useWorkshopsDelete(
  id: WorkshopsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      WorkshopsDelete["response"],
      WorkshopsDelete["error"],
      WorkshopsDelete["request"]
    >;
    client?: WorkshopsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        WorkshopsDelete["data"],
        WorkshopsDelete["error"],
        WorkshopsDelete["request"]
      >({
        method: "delete",
        url: `/workshops/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
