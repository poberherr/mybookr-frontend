import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  TouristActivitiesUpdateMutationRequest,
  TouristActivitiesUpdateMutationResponse,
  TouristActivitiesUpdatePathParams,
} from "../types/TouristActivitiesUpdate";

type TouristActivitiesUpdateClient = typeof client<
  TouristActivitiesUpdateMutationResponse,
  never,
  TouristActivitiesUpdateMutationRequest
>;
type TouristActivitiesUpdate = {
  data: TouristActivitiesUpdateMutationResponse;
  error: never;
  request: TouristActivitiesUpdateMutationRequest;
  pathParams: TouristActivitiesUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: TouristActivitiesUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<TouristActivitiesUpdateClient>[0]>;
    return: Awaited<ReturnType<TouristActivitiesUpdateClient>>;
  };
};
/**
 * @link /tourist-activities/:id/
 */
export function useTouristActivitiesUpdate(
  id: TouristActivitiesUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      TouristActivitiesUpdate["response"],
      TouristActivitiesUpdate["error"],
      TouristActivitiesUpdate["request"]
    >;
    client?: TouristActivitiesUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        TouristActivitiesUpdate["data"],
        TouristActivitiesUpdate["error"],
        TouristActivitiesUpdate["request"]
      >({
        method: "put",
        url: `/tourist-activities/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
