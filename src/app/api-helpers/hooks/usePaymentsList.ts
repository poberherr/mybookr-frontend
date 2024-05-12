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
import type { PaymentsListQueryResponse } from "../types/PaymentsList";

type PaymentsListClient = typeof client<
  PaymentsListQueryResponse,
  never,
  never
>;
type PaymentsList = {
  data: PaymentsListQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: PaymentsListQueryResponse;
  client: {
    parameters: Partial<Parameters<PaymentsListClient>[0]>;
    return: Awaited<ReturnType<PaymentsListClient>>;
  };
};
export const paymentsListQueryKey = () => [{ url: "/payments/" }] as const;
export type PaymentsListQueryKey = ReturnType<typeof paymentsListQueryKey>;
export function paymentsListQueryOptions(
  options: PaymentsList["client"]["parameters"] = {},
) {
  const queryKey = paymentsListQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<PaymentsList["data"], PaymentsList["error"]>({
        method: "get",
        url: `/payments/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing payments.
 * @link /payments/
 */
export function usePaymentsList<
  TData = PaymentsList["response"],
  TQueryData = PaymentsList["response"],
  TQueryKey extends QueryKey = PaymentsListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        PaymentsList["response"],
        PaymentsList["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: PaymentsList["client"]["parameters"];
  } = {},
): UseQueryResult<TData, PaymentsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? paymentsListQueryKey();
  const query = useQuery({
    ...(paymentsListQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseQueryResult<TData, PaymentsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const paymentsListSuspenseQueryKey = () =>
  [{ url: "/payments/" }] as const;
export type PaymentsListSuspenseQueryKey = ReturnType<
  typeof paymentsListSuspenseQueryKey
>;
export function paymentsListSuspenseQueryOptions(
  options: PaymentsList["client"]["parameters"] = {},
) {
  const queryKey = paymentsListSuspenseQueryKey();
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<PaymentsList["data"], PaymentsList["error"]>({
        method: "get",
        url: `/payments/`,
        ...options,
      });
      return res.data;
    },
  });
}
/**
 * @description API endpoint for managing payments.
 * @link /payments/
 */
export function usePaymentsListSuspense<
  TData = PaymentsList["response"],
  TQueryKey extends QueryKey = PaymentsListSuspenseQueryKey,
>(
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        PaymentsList["response"],
        PaymentsList["error"],
        TData,
        TQueryKey
      >
    >;
    client?: PaymentsList["client"]["parameters"];
  } = {},
): UseSuspenseQueryResult<TData, PaymentsList["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? paymentsListSuspenseQueryKey();
  const query = useSuspenseQuery({
    ...(paymentsListSuspenseQueryOptions(
      clientOptions,
    ) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
  }) as UseSuspenseQueryResult<TData, PaymentsList["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
