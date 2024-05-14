"use client";

import { useEffect } from "react";



import { init, push } from "@socialgouv/matomo-next";
import { usePathname, useSearchParams } from "next/navigation";


const MatomoTracking = () => {
  useEffect(() => {
    if (
      !process.env.NEXT_PUBLIC_MATOMO_URL ||
      !process.env.NEXT_PUBLIC_MATOMO_SITE_ID
    ) {
      throw new Error("Matomo tracking not configured.");
    }
    init({
      url: process.env.NEXT_PUBLIC_MATOMO_URL,
      siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID,
    });
  }, []);

  const searchParams = useSearchParams(),
    pathname = usePathname();

  const searchParamsString = searchParams && searchParams.toString();

  useEffect(() => {
    if (!pathname) return;
    const url = pathname + (searchParamsString ? "?" + searchParamsString : "");
    push(["setCustomUrl", url]);
    push(["trackPageView"]);
  }, [pathname, searchParamsString]);

  return null;
};

export default MatomoTracking;