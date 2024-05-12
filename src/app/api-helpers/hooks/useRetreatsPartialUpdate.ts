import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  RetreatsPartialUpdateMutationRequest,
  RetreatsPartialUpdateMutationResponse,
  RetreatsPartialUpdatePathParams,
} from "../types/RetreatsPartialUpdate";

type RetreatsPartialUpdateClient = typeof client<
  RetreatsPartialUpdateMutationResponse,
  never,
  RetreatsPartialUpdateMutationRequest
>;
type RetreatsPartialUpdate = {
  data: RetreatsPartialUpdateMutationResponse;
  error: never;
  request: RetreatsPartialUpdateMutationRequest;
  pathParams: RetreatsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: RetreatsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<RetreatsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<RetreatsPartialUpdateClient>>;
  };
};
/**
 * @link /retreats/:id/
 */
export function useRetreatsPartialUpdate(
  id: RetreatsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      RetreatsPartialUpdate["response"],
      RetreatsPartialUpdate["error"],
      RetreatsPartialUpdate["request"]
    >;
    client?: RetreatsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        RetreatsPartialUpdate["data"],
        RetreatsPartialUpdate["error"],
        RetreatsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/retreats/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
