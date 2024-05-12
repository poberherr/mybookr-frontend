import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  TouristActivitiesPartialUpdateMutationRequest,
  TouristActivitiesPartialUpdateMutationResponse,
  TouristActivitiesPartialUpdatePathParams,
} from "../types/TouristActivitiesPartialUpdate";

type TouristActivitiesPartialUpdateClient = typeof client<
  TouristActivitiesPartialUpdateMutationResponse,
  never,
  TouristActivitiesPartialUpdateMutationRequest
>;
type TouristActivitiesPartialUpdate = {
  data: TouristActivitiesPartialUpdateMutationResponse;
  error: never;
  request: TouristActivitiesPartialUpdateMutationRequest;
  pathParams: TouristActivitiesPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: TouristActivitiesPartialUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<TouristActivitiesPartialUpdateClient>[0]>;
    return: Awaited<ReturnType<TouristActivitiesPartialUpdateClient>>;
  };
};
/**
 * @link /tourist-activities/:id/
 */
export function useTouristActivitiesPartialUpdate(
  id: TouristActivitiesPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      TouristActivitiesPartialUpdate["response"],
      TouristActivitiesPartialUpdate["error"],
      TouristActivitiesPartialUpdate["request"]
    >;
    client?: TouristActivitiesPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        TouristActivitiesPartialUpdate["data"],
        TouristActivitiesPartialUpdate["error"],
        TouristActivitiesPartialUpdate["request"]
      >({
        method: "patch",
        url: `/tourist-activities/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
