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

import client from "../../client";
import type { CorePaymentsListQueryResponse } from "../types/CorePaymentsList";

type CorePaymentsListClient = typeof client<
  CorePaymentsListQueryResponse,
  never,
  never
>;
type CorePaymentsList = {
  data: CorePaymentsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: CorePaymentsListQueryResponse;
  client: {
    parameters: Partial<Parameters<CorePaymentsListClient>[0]>;
    return: Awaited<ReturnType<CorePaymentsListClient>>;
  };
};
export const corePaymentsListQueryKey = () =>
  [{ url: "/core/payments/" }] as const;
export type CorePaymentsListQueryKey = ReturnType<
  typeof corePaymentsListQueryKey
>;
export function corePaymentsListQueryOptions(
  options: CorePaymentsList["client"]["parameters"] = {},
) {
  const queryKey = corePaymentsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CorePaymentsList["data"],
        CorePaymentsList["error"]
      >({
        method: "get",
        url: `/core/payments/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing payments.
 * @link /core/payments/
 */
export function useCorePaymentsList<
  TData = CorePaymentsList["response"],
  TQueryData = CorePaymentsList["response"],
  TQueryKey extends QueryKey = CorePaymentsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        CorePaymentsList["response"],
        CorePaymentsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CorePaymentsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CorePaymentsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? corePaymentsListQueryKey();
  const query = useQuery({
    ...(corePaymentsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CorePaymentsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const corePaymentsListSuspenseQueryKey = () =>
  [{ url: "/core/payments/" }] as const;
export type CorePaymentsListSuspenseQueryKey = ReturnType<
  typeof corePaymentsListSuspenseQueryKey
>;
export function corePaymentsListSuspenseQueryOptions(
  options: CorePaymentsList["client"]["parameters"] = {},
) {
  const queryKey = corePaymentsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CorePaymentsList["data"],
        CorePaymentsList["error"]
      >({
        method: "get",
        url: `/core/payments/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing payments.
 * @link /core/payments/
 */
export function useCorePaymentsListSuspense<
  TData = CorePaymentsList["response"],
  TQueryKey extends QueryKey = CorePaymentsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CorePaymentsList["response"],
        CorePaymentsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CorePaymentsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CorePaymentsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? corePaymentsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(corePaymentsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CorePaymentsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
