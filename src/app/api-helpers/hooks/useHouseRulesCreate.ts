import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  HouseRulesCreateMutationRequest,
  HouseRulesCreateMutationResponse,
} from "../types/HouseRulesCreate";

type HouseRulesCreateClient = typeof client<
  HouseRulesCreateMutationResponse,
  never,
  HouseRulesCreateMutationRequest
>;
type HouseRulesCreate = {
  data: HouseRulesCreateMutationResponse;
  error: never;
  request: HouseRulesCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: HouseRulesCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<HouseRulesCreateClient>[0]>;
    return: Awaited<ReturnType<HouseRulesCreateClient>>;
  };
};
/**
 * @description API endpoint for managing houseRules.
 * @link /house-rules/
 */
export function useHouseRulesCreate(
  options: {
    mutation?: UseMutationOptions<
      HouseRulesCreate["response"],
      HouseRulesCreate["error"],
      HouseRulesCreate["request"]
    >;
    client?: HouseRulesCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        HouseRulesCreate["data"],
        HouseRulesCreate["error"],
        HouseRulesCreate["request"]
      >({
        method: "post",
        url: `/house-rules/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
