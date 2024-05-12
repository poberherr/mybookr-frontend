import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  TouristActivitiesDeleteMutationResponse,
  TouristActivitiesDeletePathParams,
} from "../types/TouristActivitiesDelete";

type TouristActivitiesDeleteClient = typeof client<
  TouristActivitiesDeleteMutationResponse,
  never,
  never
>;
type TouristActivitiesDelete = {
  data: TouristActivitiesDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: TouristActivitiesDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: TouristActivitiesDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<TouristActivitiesDeleteClient>[0]>;
    return: Awaited<ReturnType<TouristActivitiesDeleteClient>>;
  };
};
/**
 * @link /tourist-activities/:id/
 */
export function useTouristActivitiesDelete(
  id: TouristActivitiesDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      TouristActivitiesDelete["response"],
      TouristActivitiesDelete["error"],
      TouristActivitiesDelete["request"]
    >;
    client?: TouristActivitiesDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        TouristActivitiesDelete["data"],
        TouristActivitiesDelete["error"],
        TouristActivitiesDelete["request"]
      >({
        method: "delete",
        url: `/tourist-activities/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
