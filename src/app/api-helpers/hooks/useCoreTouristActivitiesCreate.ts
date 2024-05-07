import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreTouristActivitiesCreateMutationRequest,
  CoreTouristActivitiesCreateMutationResponse,
} from "../types/CoreTouristActivitiesCreate";

type CoreTouristActivitiesCreateClient = typeof client<
  CoreTouristActivitiesCreateMutationResponse,
  never,
  CoreTouristActivitiesCreateMutationRequest
>;
type CoreTouristActivitiesCreate = {
  data: CoreTouristActivitiesCreateMutationResponse;
  error: never;
  request: CoreTouristActivitiesCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreTouristActivitiesCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreTouristActivitiesCreateClient>[0]>;
    return: Awaited<ReturnType<CoreTouristActivitiesCreateClient>>;
  };
};
/**
 * @link /core/tourist-activities/
 */
export function useCoreTouristActivitiesCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreTouristActivitiesCreate["response"],
      CoreTouristActivitiesCreate["error"],
      CoreTouristActivitiesCreate["request"]
    >;
    client?: CoreTouristActivitiesCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreTouristActivitiesCreate["data"],
        CoreTouristActivitiesCreate["error"],
        CoreTouristActivitiesCreate["request"]
      >({
        method: "post",
        url: `/core/tourist-activities/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
