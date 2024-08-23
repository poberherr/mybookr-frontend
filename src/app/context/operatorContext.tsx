"use client"

import * as React from "react";

import { OperatorItemFragment } from "@/gql/graphql";

export const OperatorContext = React.createContext<
  OperatorItemFragment | undefined
>(undefined);