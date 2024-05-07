import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreTouristActivitiesPartialUpdateMutationRequest,
  CoreTouristActivitiesPartialUpdateMutationResponse,
  CoreTouristActivitiesPartialUpdatePathParams,
} from "../types/CoreTouristActivitiesPartialUpdate";

type CoreTouristActivitiesPartialUpdateClient = typeof client<
  CoreTouristActivitiesPartialUpdateMutationResponse,
  never,
  CoreTouristActivitiesPartialUpdateMutationRequest
>;
type CoreTouristActivitiesPartialUpdate = {
  data: CoreTouristActivitiesPartialUpdateMutationResponse;
  error: never;
  request: CoreTouristActivitiesPartialUpdateMutationRequest;
  pathParams: CoreTouristActivitiesPartialUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreTouristActivitiesPartialUpdateMutationResponse;
  client: {
    parameters: Partial<
      Parameters<CoreTouristActivitiesPartialUpdateClient>[0]
    >;
    return: Awaited<ReturnType<CoreTouristActivitiesPartialUpdateClient>>;
  };
};
/**
 * @link /core/tourist-activities/:id/
 */
export function useCoreTouristActivitiesPartialUpdate(
  id: CoreTouristActivitiesPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreTouristActivitiesPartialUpdate["response"],
      CoreTouristActivitiesPartialUpdate["error"],
      CoreTouristActivitiesPartialUpdate["request"]
    >;
    client?: CoreTouristActivitiesPartialUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreTouristActivitiesPartialUpdate["data"],
        CoreTouristActivitiesPartialUpdate["error"],
        CoreTouristActivitiesPartialUpdate["request"]
      >({
        method: "patch",
        url: `/core/tourist-activities/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
