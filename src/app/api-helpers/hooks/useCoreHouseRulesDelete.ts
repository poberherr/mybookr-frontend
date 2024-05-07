import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreHouseRulesDeleteMutationResponse,
  CoreHouseRulesDeletePathParams,
} from "../types/CoreHouseRulesDelete";

type CoreHouseRulesDeleteClient = typeof client<
  CoreHouseRulesDeleteMutationResponse,
  never,
  never
>;
type CoreHouseRulesDelete = {
  data: CoreHouseRulesDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreHouseRulesDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreHouseRulesDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreHouseRulesDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreHouseRulesDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing houseRules.
 * @link /core/house-rules/:id/
 */
export function useCoreHouseRulesDelete(
  id: CoreHouseRulesDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreHouseRulesDelete["response"],
      CoreHouseRulesDelete["error"],
      CoreHouseRulesDelete["request"]
    >;
    client?: CoreHouseRulesDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreHouseRulesDelete["data"],
        CoreHouseRulesDelete["error"],
        CoreHouseRulesDelete["request"]
      >({
        method: "delete",
        url: `/core/house-rules/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
