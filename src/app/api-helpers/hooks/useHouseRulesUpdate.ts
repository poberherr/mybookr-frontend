import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  HouseRulesUpdateMutationRequest,
  HouseRulesUpdateMutationResponse,
  HouseRulesUpdatePathParams,
} from "../types/HouseRulesUpdate";

type HouseRulesUpdateClient = typeof client<
  HouseRulesUpdateMutationResponse,
  never,
  HouseRulesUpdateMutationRequest
>;
type HouseRulesUpdate = {
  data: HouseRulesUpdateMutationResponse;
  error: never;
  request: HouseRulesUpdateMutationRequest;
  pathParams: HouseRulesUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: HouseRulesUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<HouseRulesUpdateClient>[0]>;
    return: Awaited<ReturnType<HouseRulesUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing houseRules.
 * @link /house-rules/:id/
 */
export function useHouseRulesUpdate(
  id: HouseRulesUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      HouseRulesUpdate["response"],
      HouseRulesUpdate["error"],
      HouseRulesUpdate["request"]
    >;
    client?: HouseRulesUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        HouseRulesUpdate["data"],
        HouseRulesUpdate["error"],
        HouseRulesUpdate["request"]
      >({
        method: "put",
        url: `/house-rules/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
