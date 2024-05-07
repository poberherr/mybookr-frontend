import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreSpacesPartialUpdateMutationRequest,
  CoreSpacesPartialUpdateMutationResponse,
  CoreSpacesPartialUpdatePathParams,
} from "../types/CoreSpacesPartialUpdate";

type CoreSpacesPartialUpdateClient = typeof client<
  CoreSpacesPartialUpdateMutationResponse,
  never,
  CoreSpacesPartialUpdateMutationRequest
>;
type CoreSpacesPartialUpdate = {
  data: CoreSpacesPartialUpdateMutationResponse;
  error: never;
  request: CoreSpacesPartialUpdateMutationRequest;
  pathParams: CoreSpacesPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreSpacesPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreSpacesPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreSpacesPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing spaces.
 * @link /core/spaces/:id/
 */
export function useCoreSpacesPartialUpdate(
  id: CoreSpacesPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreSpacesPartialUpdate["response"],
      CoreSpacesPartialUpdate["error"],
      CoreSpacesPartialUpdate["request"]
    >;
    client?: CoreSpacesPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreSpacesPartialUpdate["data"],
        CoreSpacesPartialUpdate["error"],
        CoreSpacesPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/spaces/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
