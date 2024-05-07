import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreHouseRulesPartialUpdateMutationRequest,
  CoreHouseRulesPartialUpdateMutationResponse,
  CoreHouseRulesPartialUpdatePathParams,
} from "../types/CoreHouseRulesPartialUpdate";

type CoreHouseRulesPartialUpdateClient = typeof client<
  CoreHouseRulesPartialUpdateMutationResponse,
  never,
  CoreHouseRulesPartialUpdateMutationRequest
>;
type CoreHouseRulesPartialUpdate = {
  data: CoreHouseRulesPartialUpdateMutationResponse;
  error: never;
  request: CoreHouseRulesPartialUpdateMutationRequest;
  pathParams: CoreHouseRulesPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreHouseRulesPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreHouseRulesPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreHouseRulesPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing houseRules.
 * @link /core/house-rules/:id/
 */
export function useCoreHouseRulesPartialUpdate(
  id: CoreHouseRulesPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreHouseRulesPartialUpdate["response"],
      CoreHouseRulesPartialUpdate["error"],
      CoreHouseRulesPartialUpdate["request"]
    >;
    client?: CoreHouseRulesPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreHouseRulesPartialUpdate["data"],
        CoreHouseRulesPartialUpdate["error"],
        CoreHouseRulesPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/house-rules/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
