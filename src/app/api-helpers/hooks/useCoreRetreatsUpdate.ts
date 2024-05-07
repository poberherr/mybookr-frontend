import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreRetreatsUpdateMutationRequest,
  CoreRetreatsUpdateMutationResponse,
  CoreRetreatsUpdatePathParams,
} from "../types/CoreRetreatsUpdate";

type CoreRetreatsUpdateClient = typeof client<
  CoreRetreatsUpdateMutationResponse,
  never,
  CoreRetreatsUpdateMutationRequest
>;
type CoreRetreatsUpdate = {
  data: CoreRetreatsUpdateMutationResponse;
  error: never;
  request: CoreRetreatsUpdateMutationRequest;
  pathParams: CoreRetreatsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreRetreatsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreRetreatsUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreRetreatsUpdateClient>>;
  };
};
/**
 * @link /core/retreats/:id/
 */
export function useCoreRetreatsUpdate(
  id: CoreRetreatsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreRetreatsUpdate["response"],
      CoreRetreatsUpdate["error"],
      CoreRetreatsUpdate["request"]
    >;
    client?: CoreRetreatsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreRetreatsUpdate["data"],
        CoreRetreatsUpdate["error"],
        CoreRetreatsUpdate["request"]
      >({
        method: "put",
        url: `/core/retreats/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
