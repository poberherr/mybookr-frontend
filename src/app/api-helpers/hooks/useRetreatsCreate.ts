import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  RetreatsCreateMutationRequest,
  RetreatsCreateMutationResponse,
} from "../types/RetreatsCreate";

type RetreatsCreateClient = typeof client<
  RetreatsCreateMutationResponse,
  never,
  RetreatsCreateMutationRequest
>;
type RetreatsCreate = {
  data: RetreatsCreateMutationResponse;
  error: never;
  request: RetreatsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: RetreatsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<RetreatsCreateClient>[0]>;
    return: Awaited<ReturnType<RetreatsCreateClient>>;
  };
};
/**
 * @link /retreats/
 */
export function useRetreatsCreate(
  options: {
    mutation?: UseMutationOptions<
      RetreatsCreate["response"],
      RetreatsCreate["error"],
      RetreatsCreate["request"]
    >;
    client?: RetreatsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        RetreatsCreate["data"],
        RetreatsCreate["error"],
        RetreatsCreate["request"]
      >({
        method: "post",
        url: `/retreats/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
