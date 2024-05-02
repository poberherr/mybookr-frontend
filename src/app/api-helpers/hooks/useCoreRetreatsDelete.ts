import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreRetreatsDeleteMutationResponse,
  CoreRetreatsDeletePathParams,
} from "../types/CoreRetreatsDelete";

type CoreRetreatsDeleteClient = typeof client<
  CoreRetreatsDeleteMutationResponse,
  never,
  never
>;
type CoreRetreatsDelete = {
  data: CoreRetreatsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreRetreatsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreRetreatsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreRetreatsDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreRetreatsDeleteClient>>;
  };
};
/**
 * @link /core/retreats/:id/
 */
export function useCoreRetreatsDelete(
  id: CoreRetreatsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreRetreatsDelete["response"],
      CoreRetreatsDelete["error"],
      CoreRetreatsDelete["request"]
    >;
    client?: CoreRetreatsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreRetreatsDelete["data"],
        CoreRetreatsDelete["error"],
        CoreRetreatsDelete["request"]
      >({
        method: "delete",
        url: `/core/retreats/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
