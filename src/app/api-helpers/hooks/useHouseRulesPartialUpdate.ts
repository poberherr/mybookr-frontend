import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  HouseRulesPartialUpdateMutationRequest,
  HouseRulesPartialUpdateMutationResponse,
  HouseRulesPartialUpdatePathParams,
} from "../types/HouseRulesPartialUpdate";

type HouseRulesPartialUpdateClient = typeof client<
  HouseRulesPartialUpdateMutationResponse,
  never,
  HouseRulesPartialUpdateMutationRequest
>;
type HouseRulesPartialUpdate = {
  data: HouseRulesPartialUpdateMutationResponse;
  error: never;
  request: HouseRulesPartialUpdateMutationRequest;
  pathParams: HouseRulesPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: HouseRulesPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<HouseRulesPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<HouseRulesPartialUpdateClient>>;
  };
};
/**
 * @description API endpoint for managing houseRules.
 * @link /house-rules/:id/
 */
export function useHouseRulesPartialUpdate(
  id: HouseRulesPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      HouseRulesPartialUpdate["response"],
      HouseRulesPartialUpdate["error"],
      HouseRulesPartialUpdate["request"]
    >;
    client?: HouseRulesPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        HouseRulesPartialUpdate["data"],
        HouseRulesPartialUpdate["error"],
        HouseRulesPartialUpdate["request"]
      >({
        method: "patch",
        url: `/house-rules/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
