import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  TouristActivitiesCreateMutationRequest,
  TouristActivitiesCreateMutationResponse,
} from "../types/TouristActivitiesCreate";

type TouristActivitiesCreateClient = typeof client<
  TouristActivitiesCreateMutationResponse,
  never,
  TouristActivitiesCreateMutationRequest
>;
type TouristActivitiesCreate = {
  data: TouristActivitiesCreateMutationResponse;
  error: never;
  request: TouristActivitiesCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: TouristActivitiesCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<TouristActivitiesCreateClient>[0]>;
    return: Awaited<ReturnType<TouristActivitiesCreateClient>>;
  };
};
/**
 * @link /tourist-activities/
 */
export function useTouristActivitiesCreate(
  options: {
    mutation?: UseMutationOptions<
      TouristActivitiesCreate["response"],
      TouristActivitiesCreate["error"],
      TouristActivitiesCreate["request"]
    >;
    client?: TouristActivitiesCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        TouristActivitiesCreate["data"],
        TouristActivitiesCreate["error"],
        TouristActivitiesCreate["request"]
      >({
        method: "post",
        url: `/tourist-activities/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
