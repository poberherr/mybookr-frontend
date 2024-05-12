import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  HouseRulesDeleteMutationResponse,
  HouseRulesDeletePathParams,
} from "../types/HouseRulesDelete";

type HouseRulesDeleteClient = typeof client<
  HouseRulesDeleteMutationResponse,
  never,
  never
>;
type HouseRulesDelete = {
  data: HouseRulesDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: HouseRulesDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: HouseRulesDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<HouseRulesDeleteClient>[0]>;
    return: Awaited<ReturnType<HouseRulesDeleteClient>>;
  };
};
/**
 * @description API endpoint for managing houseRules.
 * @link /house-rules/:id/
 */
export function useHouseRulesDelete(
  id: HouseRulesDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      HouseRulesDelete["response"],
      HouseRulesDelete["error"],
      HouseRulesDelete["request"]
    >;
    client?: HouseRulesDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        HouseRulesDelete["data"],
        HouseRulesDelete["error"],
        HouseRulesDelete["request"]
      >({
        method: "delete",
        url: `/house-rules/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
