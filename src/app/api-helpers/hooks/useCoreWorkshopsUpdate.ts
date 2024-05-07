import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreWorkshopsUpdateMutationRequest,
  CoreWorkshopsUpdateMutationResponse,
  CoreWorkshopsUpdatePathParams,
} from "../types/CoreWorkshopsUpdate";

type CoreWorkshopsUpdateClient = typeof client<
  CoreWorkshopsUpdateMutationResponse,
  never,
  CoreWorkshopsUpdateMutationRequest
>;
type CoreWorkshopsUpdate = {
  data: CoreWorkshopsUpdateMutationResponse;
  error: never;
  request: CoreWorkshopsUpdateMutationRequest;
  pathParams: CoreWorkshopsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreWorkshopsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreWorkshopsUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreWorkshopsUpdateClient>>;
  };
};
/**
 * @link /core/workshops/:id/
 */
export function useCoreWorkshopsUpdate(
  id: CoreWorkshopsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreWorkshopsUpdate["response"],
      CoreWorkshopsUpdate["error"],
      CoreWorkshopsUpdate["request"]
    >;
    client?: CoreWorkshopsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreWorkshopsUpdate["data"],
        CoreWorkshopsUpdate["error"],
        CoreWorkshopsUpdate["request"]
      >({
        method: "put",
        url: `/core/workshops/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
