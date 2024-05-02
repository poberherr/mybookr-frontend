import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreRetreatsPartialUpdateMutationRequest,
  CoreRetreatsPartialUpdateMutationResponse,
  CoreRetreatsPartialUpdatePathParams,
} from "../types/CoreRetreatsPartialUpdate";

type CoreRetreatsPartialUpdateClient = typeof client<
  CoreRetreatsPartialUpdateMutationResponse,
  never,
  CoreRetreatsPartialUpdateMutationRequest
>;
type CoreRetreatsPartialUpdate = {
  data: CoreRetreatsPartialUpdateMutationResponse;
  error: never;
  request: CoreRetreatsPartialUpdateMutationRequest;
  pathParams: CoreRetreatsPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreRetreatsPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreRetreatsPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreRetreatsPartialUpdateClient>>;
  };
};
/**
 * @link /core/retreats/:id/
 */
export function useCoreRetreatsPartialUpdate(
  id: CoreRetreatsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreRetreatsPartialUpdate["response"],
      CoreRetreatsPartialUpdate["error"],
      CoreRetreatsPartialUpdate["request"]
    >;
    client?: CoreRetreatsPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreRetreatsPartialUpdate["data"],
        CoreRetreatsPartialUpdate["error"],
        CoreRetreatsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/retreats/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
