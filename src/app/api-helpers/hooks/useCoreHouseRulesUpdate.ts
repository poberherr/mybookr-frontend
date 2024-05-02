import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreHouseRulesUpdateMutationRequest,
  CoreHouseRulesUpdateMutationResponse,
  CoreHouseRulesUpdatePathParams,
} from "../types/CoreHouseRulesUpdate";

type CoreHouseRulesUpdateClient = typeof client<
  CoreHouseRulesUpdateMutationResponse,
  never,
  CoreHouseRulesUpdateMutationRequest
>;
type CoreHouseRulesUpdate = {
  data: CoreHouseRulesUpdateMutationResponse;
  error: never;
  request: CoreHouseRulesUpdateMutationRequest;
  pathParams: CoreHouseRulesUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreHouseRulesUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreHouseRulesUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreHouseRulesUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing houseRules.
 * @link /core/house-rules/:id/
 */
export function useCoreHouseRulesUpdate(
  id: CoreHouseRulesUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreHouseRulesUpdate["response"],
      CoreHouseRulesUpdate["error"],
      CoreHouseRulesUpdate["request"]
    >;
    client?: CoreHouseRulesUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreHouseRulesUpdate["data"],
        CoreHouseRulesUpdate["error"],
        CoreHouseRulesUpdate["request"]
      >({
        method: "put",
        url: `/core/house-rules/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
