import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../../client";
import type {
  CoreTouristActivitiesDeleteMutationResponse,
  CoreTouristActivitiesDeletePathParams,
} from "../types/CoreTouristActivitiesDelete";

type CoreTouristActivitiesDeleteClient = typeof client<
  CoreTouristActivitiesDeleteMutationResponse,
  never,
  never
>;
type CoreTouristActivitiesDelete = {
  data: CoreTouristActivitiesDeleteMutationResponse;
  error: never;
  request: never;
  pathParams: CoreTouristActivitiesDeletePathParams;
  queryParams: never;
  headerParams: never;
  response: CoreTouristActivitiesDeleteMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreTouristActivitiesDeleteClient>[0]>;
    return: Awaited<ReturnType<CoreTouristActivitiesDeleteClient>>;
  };
};
/**
 * @link /core/tourist-activities/:id/
 */
export function useCoreTouristActivitiesDelete(
  id: CoreTouristActivitiesDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      CoreTouristActivitiesDelete["response"],
      CoreTouristActivitiesDelete["error"],
      CoreTouristActivitiesDelete["request"]
    >;
    client?: CoreTouristActivitiesDelete["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async () => {
      const res = await client<
        CoreTouristActivitiesDelete["data"],
        CoreTouristActivitiesDelete["error"],
        CoreTouristActivitiesDelete["request"]
      >({
        method: "delete",
        url: `/core/tourist-activities/${id}/`,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
