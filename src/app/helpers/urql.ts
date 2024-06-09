import {
  cacheExchange,
  createClient,
  fetchExchange,
  ssrExchange,
} from "@urql/core";
import { registerUrql } from "@urql/next/rsc";
import { useMemo } from "react";

const url = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;
if (!url) {
  throw new Error("GraphQL endpoint env var not provided");
}

const makeSSRClient = () => {
  return createClient({
    url,
    exchanges: [cacheExchange, fetchExchange],
  });
};

export const { getClient: getSSRClient } = registerUrql(makeSSRClient);

export const useGetClient = () => {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== "undefined",
    });
    const client = createClient({
      url,
      exchanges: [cacheExchange, ssr, fetchExchange],
      suspense: true,
    });

    return [client, ssr];
  }, []);

  return { client, ssr };
};
