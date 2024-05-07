import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreTouristActivitiesUpdateMutationRequest,
  CoreTouristActivitiesUpdateMutationResponse,
  CoreTouristActivitiesUpdatePathParams,
} from "../types/CoreTouristActivitiesUpdate";

type CoreTouristActivitiesUpdateClient = typeof client<
  CoreTouristActivitiesUpdateMutationResponse,
  never,
  CoreTouristActivitiesUpdateMutationRequest
>;
type CoreTouristActivitiesUpdate = {
  data: CoreTouristActivitiesUpdateMutationResponse;
  error: never;
  request: CoreTouristActivitiesUpdateMutationRequest;
  pathParams: CoreTouristActivitiesUpdatePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreTouristActivitiesUpdateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreTouristActivitiesUpdateClient>[0]>;
    return: Awaited<ReturnType<CoreTouristActivitiesUpdateClient>>;
  };
};
/**
 * @link /core/tourist-activities/:id/
 */
export function useCoreTouristActivitiesUpdate(
  id: CoreTouristActivitiesUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreTouristActivitiesUpdate["response"],
      CoreTouristActivitiesUpdate["error"],
      CoreTouristActivitiesUpdate["request"]
    >;
    client?: CoreTouristActivitiesUpdate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreTouristActivitiesUpdate["data"],
        CoreTouristActivitiesUpdate["error"],
        CoreTouristActivitiesUpdate["request"]
      >({
        method: "put",
        url: `/core/tourist-activities/${id}/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
