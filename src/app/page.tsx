"use client"

import React, { useContext, useMemo } from "react";

import Hero from "./Hero";
import ProductTraveler from "./ProductTraveler";
import ProductHost from "./ProductHost";
import CTAContact from "./CTAContact";
import Demos from "./Demos";
import HeroOperator from "./HeroOperator";
import { OperatorContext } from "./context/operatorContext";

export default function LandingPage() {
  const operator = useContext(OperatorContext)

  const content = useMemo(
    () =>
      !!operator ? (
        <div>
          <a id="top" />
          <HeroOperator />
        </div>
      ) : (
        <div>
          <a id="top" />
          <Hero />
          <ProductTraveler />
          <ProductHost />
          <CTAContact />
          <Demos />
        </div>
      ),
    [operator],
  );
  return content;
}
