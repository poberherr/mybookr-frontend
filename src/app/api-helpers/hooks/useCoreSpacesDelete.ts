import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreSpacesDeleteMutationResponse,
  CoreSpacesDeletePathParams,
} from "../types/CoreSpacesDelete";

type CoreSpacesDeleteClient = typeof client<
  CoreSpacesDeleteMutationResponse,
  never,
  never
>;
type CoreSpacesDelete = {
  data: CoreSpacesDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreSpacesDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreSpacesDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreSpacesDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreSpacesDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing spaces.
 * @link /core/spaces/:id/
 */
export function useCoreSpacesDelete(
  id: CoreSpacesDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreSpacesDelete["response"],
      CoreSpacesDelete["error"],
      CoreSpacesDelete["request"]
    >;
    client?: CoreSpacesDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreSpacesDelete["data"],
        CoreSpacesDelete["error"],
        CoreSpacesDelete["request"]
      >({
        method: "delete",
        url: `/core/spaces/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
