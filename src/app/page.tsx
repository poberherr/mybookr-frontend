import React, { useMemo } from "react";

import Hero from "./Hero";
import ProductTraveler from "./ProductTraveler";
import ProductHost from "./ProductHost";
import CTAContact from "./CTAContact";
import Demos from "./Demos";
import HeroOperator from "./HeroOperator";

export default async function LandingPage() {
  const hasOperator = !!process.env.NEXT_PUBLIC_MYBOOKR_CATEGORY_FILTER; // @todo should be based on operator context

  const content = useMemo(
    () =>
      hasOperator ? (
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
    [hasOperator],
  );
  return content;
}

export const revalidate = false;
