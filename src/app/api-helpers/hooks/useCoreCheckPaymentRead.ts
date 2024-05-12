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
  CoreCheckPaymentReadPathParams,
  CoreCheckPaymentReadQueryResponse,
} from "../types/CoreCheckPaymentRead";

type CoreCheckPaymentReadClient = typeof client<
  CoreCheckPaymentReadQueryResponse,
  never,
  never
>;
type CoreCheckPaymentRead = {
  data: CoreCheckPaymentReadQueryResponse;
  error: never;
  request: never;
  pathParams: CoreCheckPaymentReadPathParams;
  queryParams: never;
  headerParams: never;
  response: CoreCheckPaymentReadQueryResponse;
  client: {
    parameters: Partial<Parameters<CoreCheckPaymentReadClient>[0]>;
    return: Awaited<ReturnType<CoreCheckPaymentReadClient>>;
  };
};
export const coreCheckPaymentReadQueryKey = (
  paymentIntentId: CoreCheckPaymentReadPathParams["payment_intent_id"],
) =>
  [
    {
      url: "/core/check-payment/:payment_intent_id/",
      params: { paymentIntentId: paymentIntentId },
    },
  ] as const;
export type CoreCheckPaymentReadQueryKey = ReturnType<
  typeof coreCheckPaymentReadQueryKey
>;
export function coreCheckPaymentReadQueryOptions(
  paymentIntentId: CoreCheckPaymentReadPathParams["payment_intent_id"],
  options: CoreCheckPaymentRead["client"]["parameters"] = {},
) {
  const queryKey = coreCheckPaymentReadQueryKey(paymentIntentId);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreCheckPaymentRead["data"],
        CoreCheckPaymentRead["error"]
      >({
        method: "get",
        url: `/core/check-payment/${paymentIntentId}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description Check the status of a Stripe payment intent
 * @link /core/check-payment/:payment_intent_id/
 */
export function useCoreCheckPaymentRead<
  TData = CoreCheckPaymentRead["response"],
  TQueryData = CoreCheckPaymentRead["response"],
  TQueryKey extends QueryKey = CoreCheckPaymentReadQueryKey,
>(
  paymentIntentId: CoreCheckPaymentReadPathParams["payment_intent_id"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        CoreCheckPaymentRead["response"],
        CoreCheckPaymentRead["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: CoreCheckPaymentRead["client"]["parameters"];
  } = {},
): UseQueryResult<TData, CoreCheckPaymentRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? coreCheckPaymentReadQueryKey(paymentIntentId);
  const query = useQuery({
    ...(coreCheckPaymentReadQueryOptions(
      paymentIntentId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, CoreCheckPaymentRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const coreCheckPaymentReadSuspenseQueryKey = (
  paymentIntentId: CoreCheckPaymentReadPathParams["payment_intent_id"],
) =>
  [
    {
      url: "/core/check-payment/:payment_intent_id/",
      params: { paymentIntentId: paymentIntentId },
    },
  ] as const;
export type CoreCheckPaymentReadSuspenseQueryKey = ReturnType<
  typeof coreCheckPaymentReadSuspenseQueryKey
>;
export function coreCheckPaymentReadSuspenseQueryOptions(
  paymentIntentId: CoreCheckPaymentReadPathParams["payment_intent_id"],
  options: CoreCheckPaymentRead["client"]["parameters"] = {},
) {
  const queryKey = coreCheckPaymentReadSuspenseQueryKey(paymentIntentId);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<
        CoreCheckPaymentRead["data"],
        CoreCheckPaymentRead["error"]
      >({
        method: "get",
        url: `/core/check-payment/${paymentIntentId}/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description Check the status of a Stripe payment intent
 * @link /core/check-payment/:payment_intent_id/
 */
export function useCoreCheckPaymentReadSuspense<
  TData = CoreCheckPaymentRead["response"],
  TQueryKey extends QueryKey = CoreCheckPaymentReadSuspenseQueryKey,
>(
  paymentIntentId: CoreCheckPaymentReadPathParams["payment_intent_id"],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        CoreCheckPaymentRead["response"],
        CoreCheckPaymentRead["error"],
        TData,
        TQueryKey
      >
    >;
    client?: CoreCheckPaymentRead["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, CoreCheckPaymentRead["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ??
    coreCheckPaymentReadSuspenseQueryKey(paymentIntentId);
  const query = useSuspenseQuery({
    ...(coreCheckPaymentReadSuspenseQueryOptions(
      paymentIntentId,
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, CoreCheckPaymentRead["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
