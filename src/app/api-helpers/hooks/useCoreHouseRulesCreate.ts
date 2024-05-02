import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreHouseRulesCreateMutationRequest,
  CoreHouseRulesCreateMutationResponse,
} from "../types/CoreHouseRulesCreate";

type CoreHouseRulesCreateClient = typeof client<
  CoreHouseRulesCreateMutationResponse,
  never,
  CoreHouseRulesCreateMutationRequest
>;
type CoreHouseRulesCreate = {
  data: CoreHouseRulesCreateMutationResponse;
  error: never;
  request: CoreHouseRulesCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreHouseRulesCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreHouseRulesCreateClient>[0]>;
    return: Awaited<ReturnType<CoreHouseRulesCreateClient>>;
  };
};
/**
 * @description API endpoint for managing houseRules.
 * @link /core/house-rules/
 */
export function useCoreHouseRulesCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreHouseRulesCreate["response"],
      CoreHouseRulesCreate["error"],
      CoreHouseRulesCreate["request"]
    >;
    client?: CoreHouseRulesCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreHouseRulesCreate["data"],
        CoreHouseRulesCreate["error"],
        CoreHouseRulesCreate["request"]
      >({
        method: "post",
        url: `/core/house-rules/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
