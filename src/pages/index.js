import React from "react";

import { QueryClient, dehydrate } from "@tanstack/react-query";
import {
  UserButton,
  UserProfile,
  SignUpButton,
  SignInButton,
  SignOutButton,
  useUser,
  useAuth,
  useSession,
  useClerk,
} from "@clerk/nextjs";


import { Layout } from "../components/Layout/index.js";
import { ListingsComponent } from "../components/Listings.tsx";

import { coreListingsListQueryOptions } from "../api/hooks/useCoreListingsList.ts";

const Home = () => {
  const user = useUser();
  const auth = useAuth();
  const session = useSession();
  return (
    <Layout>
      <h1>mybookr initial feature test</h1>
      <h2>Listing data from API:</h2>
      <ListingsComponent />
      <div className="flex w-full flex-col gap-6 rounded bg-gray-50 p-12">
        <h2>Clerk:</h2>
        <ul>
          <li>Loaded: {JSON.stringify(auth.isLoaded)}</li>
          <li>Signed In: {JSON.stringify(auth.isSignedIn)}</li>
          <li>UserId: {JSON.stringify(auth.userId)}</li>

          <li>
            Token:
            {session.session?.lastActiveToken.jwt.encoded.header}
          </li>
          <li>
            Token Lifetime:{" "}
            {new Date(
              session.session?.lastActiveToken.jwt.claims.exp * 1000,
            ).toLocaleString()}
          </li>
        </ul>
        <div className="flex w-full justify-between">
          <div>
            SignUp:
            <SignUpButton />
          </div>
          <div>
            SignIn: <SignInButton />
          </div>
          <div>
            SignOut: <SignOutButton />
          </div>
        </div>
        <h3>User Button:</h3>
        <UserButton />
        <h2>Further data:</h2>
        <ul>
          <li>
            User:{" "}
            <pre>
              <code>{JSON.stringify(user.user, null, 2)}</code>
            </pre>
          </li>
          <li>
            Session:{" "}
            <pre>
              <code>{JSON.stringify(session.session, null, 2)}</code>
            </pre>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(coreListingsListQueryOptions());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
