import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreWorkshopsDeleteMutationResponse,
  CoreWorkshopsDeletePathParams,
} from "../types/CoreWorkshopsDelete";

type CoreWorkshopsDeleteClient = typeof client<
  CoreWorkshopsDeleteMutationResponse,
  never,
  never
>;
type CoreWorkshopsDelete = {
  data: CoreWorkshopsDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreWorkshopsDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreWorkshopsDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreWorkshopsDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreWorkshopsDeleteClient>>;
  };
};
/**
 * @link /core/workshops/:id/
 */
export function useCoreWorkshopsDelete(
  id: CoreWorkshopsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreWorkshopsDelete["response"],
      CoreWorkshopsDelete["error"],
      CoreWorkshopsDelete["request"]
    >;
    client?: CoreWorkshopsDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreWorkshopsDelete["data"],
        CoreWorkshopsDelete["error"],
        CoreWorkshopsDelete["request"]
      >({
        method: "delete",
        url: `/core/workshops/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
