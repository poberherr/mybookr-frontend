import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  RetreatsUpdateMutationRequest,
  RetreatsUpdateMutationResponse,
  RetreatsUpdatePathParams,
} from "../types/RetreatsUpdate";

type RetreatsUpdateClient = typeof client<
  RetreatsUpdateMutationResponse,
  never,
  RetreatsUpdateMutationRequest
>;
type RetreatsUpdate = {
  data: RetreatsUpdateMutationResponse;
  error: never;
  request: RetreatsUpdateMutationRequest;
  pathParams: RetreatsUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: RetreatsUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<RetreatsUpdateClient>[0]>;
    return: Awaited<ReturnType<RetreatsUpdateClient>>;
  };
};
/**
 * @link /retreats/:id/
 */
export function useRetreatsUpdate(
  id: RetreatsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      RetreatsUpdate["response"],
      RetreatsUpdate["error"],
      RetreatsUpdate["request"]
    >;
    client?: RetreatsUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        RetreatsUpdate["data"],
        RetreatsUpdate["error"],
        RetreatsUpdate["request"]
      >({
        method: "put",
        url: `/retreats/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
