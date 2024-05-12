import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  RetreatsDeleteMutationResponse,
  RetreatsDeletePathParams,
} from "../types/RetreatsDelete";

type RetreatsDeleteClient = typeof client<
  RetreatsDeleteMutationResponse,
  never,
  never
>;
type RetreatsDelete = {
  data: RetreatsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: RetreatsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: RetreatsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<RetreatsDeleteClient>[0]>;
    return: Awaited<ReturnType<RetreatsDeleteClient>>;
  };
};
/**
 * @link /retreats/:id/
 */
export function useRetreatsDelete(
  id: RetreatsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      RetreatsDelete["response"],
      RetreatsDelete["error"],
      RetreatsDelete["request"]
    >;
    client?: RetreatsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        RetreatsDelete["data"],
        RetreatsDelete["error"],
        RetreatsDelete["request"]
      >({
        method: "delete",
        url: `/retreats/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
