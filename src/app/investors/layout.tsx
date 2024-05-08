"use client"

import React from "react";

import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
