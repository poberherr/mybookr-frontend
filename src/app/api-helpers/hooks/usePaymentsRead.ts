import {
  queryOptions,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";
import type {
  QueryKey,
  QueryObserverOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import client from "../../../client";
import type {
  PaymentsReadPathParams,
  PaymentsReadQueryResponse,
} from "../types/PaymentsRead";

type PaymentsReadClient = typeof client<
  PaymentsReadQueryResponse,
  never,
  never
>;
type PaymentsRead = {
  data: PaymentsReadQueryResponse;
  error: never;
  request: never;
  pathParams: PaymentsReadPathParams;
  queryParams: never;
  headerParams: never;
  response: PaymentsReadQueryResponse;
  client: {
    parameters: Partial<Parameters<PaymentsReadClient>[0]>;
    return: Awaited<ReturnType<PaymentsReadClient>>;
  };
};
export const paymentsReadQueryKey = (id: PaymentsReadPathParams["id"]) =>
  [{ url: "/payments/:id/", params: { id: id } }] as const;
export type PaymentsReadQueryKey = ReturnType<typeof paymentsReadQueryKey>;
export function paymentsReadQueryOptions(
  id: PaymentsReadPathParams["id"],
  options: PaymentsRead["client"]["parameters"] = {},
) {
  const queryKey = paymentsReadQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<PaymentsRead["data"], PaymentsRead["error"]>({
        method: "get",
        url: `/payments/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing payments.
 * @link /payments/:id/
 */
export function usePaymentsRead<
  TData = PaymentsRead["response"],
  TQueryData = PaymentsRead["response"],
  TQueryKey extends QueryKey = PaymentsReadQueryKey,
>(
  id: PaymentsReadPathParams["id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        PaymentsRead["response"],
        PaymentsRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: PaymentsRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, PaymentsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? paymentsReadQueryKey(id);
  const query = useQuery({
    ...(paymentsReadQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, PaymentsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const paymentsReadSuspenseQueryKey = (
  id: PaymentsReadPathParams["id"],
) => [{ url: "/payments/:id/", params: { id: id } }] as const;
export type PaymentsReadSuspenseQueryKey = ReturnType<
  typeof paymentsReadSuspenseQueryKey
>;
export function paymentsReadSuspenseQueryOptions(
  id: PaymentsReadPathParams["id"],
  options: PaymentsRead["client"]["parameters"] = {},
) {
  const queryKey = paymentsReadSuspenseQueryKey(id);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<PaymentsRead["data"], PaymentsRead["error"]>({
        method: "get",
        url: `/payments/${id}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing payments.
 * @link /payments/:id/
 */
export function usePaymentsReadSuspense<
  TData = PaymentsRead["response"],
  TQueryKey extends QueryKey = PaymentsReadSuspenseQueryKey,
>(
  id: PaymentsReadPathParams["id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        PaymentsRead["response"],
        PaymentsRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: PaymentsRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, PaymentsRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? paymentsReadSuspenseQueryKey(id);
  const query = useSuspenseQuery({
    ...(paymentsReadSuspenseQueryOptions(
      id,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, PaymentsRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
