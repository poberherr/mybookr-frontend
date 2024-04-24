"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const ClerkAuth = () => (
  <>
    <SignedIn>
      <UserButton />
    </SignedIn>

    <SignedOut>
      <SignInButton />
    </SignedOut>
  </>
);
