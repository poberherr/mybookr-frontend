import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";

import client from "../../client";
import type {
  CoreWorkshopsCreateMutationRequest,
  CoreWorkshopsCreateMutationResponse,
} from "../types/CoreWorkshopsCreate";

type CoreWorkshopsCreateClient = typeof client<
  CoreWorkshopsCreateMutationResponse,
  never,
  CoreWorkshopsCreateMutationRequest
>;
type CoreWorkshopsCreate = {
  data: CoreWorkshopsCreateMutationResponse;
  error: never;
  request: CoreWorkshopsCreateMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CoreWorkshopsCreateMutationResponse;
  client: {
    parameters: Partial<Parameters<CoreWorkshopsCreateClient>[0]>;
    return: Awaited<ReturnType<CoreWorkshopsCreateClient>>;
  };
};
/**
 * @link /core/workshops/
 */
export function useCoreWorkshopsCreate(
  options: {
    mutation?: UseMutationOptions<
      CoreWorkshopsCreate["response"],
      CoreWorkshopsCreate["error"],
      CoreWorkshopsCreate["request"]
    >;
    client?: CoreWorkshopsCreate["client"]["parameters"];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } =
    options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        CoreWorkshopsCreate["data"],
        CoreWorkshopsCreate["error"],
        CoreWorkshopsCreate["request"]
      >({
        method: "post",
        url: `/core/workshops/`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}
