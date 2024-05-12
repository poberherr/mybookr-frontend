import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type { CoreUserQuickCreateCreateMutationResponse } from "../types/CoreUserQuickCreateCreate";

type CoreUserQuickCreateCreateClient = typeof client<
  CoreUserQuickCreateCreateMutationResponse,
  never,
  never
>;
type CoreUserQuickCreateCreate = {
  data: CoreUserQuickCreateCreateMutationResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreUserQuickCreateCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreUserQuickCreateCreateClient>[0]>;
    return: Awaited<ReturnType<CoreUserQuickCreateCreateClient>>;
  };
};
/**
 * @link /core/user/quick-create
 */
export function useCoreUserQuickCreateCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreUserQuickCreateCreate["response"],
      CoreUserQuickCreateCreate["error"],
      CoreUserQuickCreateCreate["request"]
    >;
    client?: CoreUserQuickCreateCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreUserQuickCreateCreate["data"],
        CoreUserQuickCreateCreate["error"],
        CoreUserQuickCreateCreate["request"]
      >({
        method: "post",
        url: `/core/user/quick-create`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
