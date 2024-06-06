import { cacheExchange, createClient, fetchExchange, gql } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";
import { useMemo } from "react";

const url = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;
if (!url) {
  throw new Error("GraphQL endpoint env var not provided");
}

const makeClient = () => {
  return createClient({
    url,
    exchanges: [cacheExchange, fetchExchange],
  });
};

export const { getClient } = registerUrql(makeClient);

export const useGetClient = () => {
  return useMemo(getClient, []);
};
