import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreWorkshopsPartialUpdateMutationRequest,
  CoreWorkshopsPartialUpdateMutationResponse,
  CoreWorkshopsPartialUpdatePathParams,
} from "../types/CoreWorkshopsPartialUpdate";

type CoreWorkshopsPartialUpdateClient = typeof client<
  CoreWorkshopsPartialUpdateMutationResponse,
  never,
  CoreWorkshopsPartialUpdateMutationRequest
>;
type CoreWorkshopsPartialUpdate = {
  data: CoreWorkshopsPartialUpdateMutationResponse;
  error: never;
  request: CoreWorkshopsPartialUpdateMutationRequest;
  pathParams: CoreWorkshopsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreWorkshopsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreWorkshopsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreWorkshopsPartialUpdateClient>>;
  };
};
/**
 * @link /core/workshops/:id/
 */
export function useCoreWorkshopsPartialUpdate(
  id: CoreWorkshopsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreWorkshopsPartialUpdate["response"],
      CoreWorkshopsPartialUpdate["error"],
      CoreWorkshopsPartialUpdate["request"]
    >;
    client?: CoreWorkshopsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreWorkshopsPartialUpdate["data"],
        CoreWorkshopsPartialUpdate["error"],
        CoreWorkshopsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/workshops/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
