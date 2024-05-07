import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreRetreatsCreateMutationRequest,
  CoreRetreatsCreateMutationResponse,
} from "../types/CoreRetreatsCreate";

type CoreRetreatsCreateClient = typeof client<
  CoreRetreatsCreateMutationResponse,
  never,
  CoreRetreatsCreateMutationRequest
>;
type CoreRetreatsCreate = {
  data: CoreRetreatsCreateMutationResponse;
  error: never;
  request: CoreRetreatsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreRetreatsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreRetreatsCreateClient>[0]>;
    return: Awaited<ReturnType<CoreRetreatsCreateClient>>;
  };
};
/**
 * @link /core/retreats/
 */
export function useCoreRetreatsCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreRetreatsCreate["response"],
      CoreRetreatsCreate["error"],
      CoreRetreatsCreate["request"]
    >;
    client?: CoreRetreatsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreRetreatsCreate["data"],
        CoreRetreatsCreate["error"],
        CoreRetreatsCreate["request"]
      >({
        method: "post",
        url: `/core/retreats/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
