"use client";

import { UrqlProvider } from "@urql/next";
import { useGetClient } from "../helpers/urql";

export default function Layout({ children }: React.PropsWithChildren) {
  const { client, ssr } = useGetClient();

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
}
