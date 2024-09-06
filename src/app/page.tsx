"use client"

import React, { useContext, useMemo } from "react";

import Hero from "./Hero";
import ProductTraveler from "./ProductTraveler";
import ProductHost from "./ProductHost";
import CTAContact from "./CTAContact";
import Demos from "./Demos";
import HeroOperator from "./HeroOperator";
import { OperatorContext } from "./context/operatorContext";
import Logos from "./Logos";
import ProductProcess from "./ProductProcess";

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
          <Logos />
          <ProductTraveler />
          <ProductHost />
          <ProductProcess />
          {/* <Newsletter /> */}
          <Demos />
          <CTAContact />
        </div>
      ),
    [operator],
  );
  return content;
}
