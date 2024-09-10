"use client";

import { useEffect, useMemo, useState } from "react";

import { init, push } from "@socialgouv/matomo-next";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    _paq: any[];
  }
}

const MatomoTracking = () => {
  const [isInitialized, setInitialized] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const searchParamsString = useMemo(
    () => searchParams && searchParams.toString(),
    [searchParams],
  );
  const hash = useMemo(() => window.location.hash, [window.location.hash]);

  useEffect(() => {
    if (
      isInitialized ||
      window._paq ||
      !process.env.NEXT_PUBLIC_MATOMO_URL ||
      !process.env.NEXT_PUBLIC_MATOMO_SITE_ID
    ) {
      return;
    }

    init({
      url: process.env.NEXT_PUBLIC_MATOMO_URL,
      siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID,
      onInitialization: () => setInitialized(true),
    });
  }, [isInitialized, setInitialized]);

  useEffect(() => {
    if (!pathname || !isInitialized) return;

    const url = [
      pathname,
      searchParamsString && `?${searchParamsString}`,
      hash && `#${hash}`,
    ]
      .filter(Boolean)
      .join("");

    push(["setCustomUrl", url]);
    push(["trackPageView"]);
  }, [pathname, searchParamsString, isInitialized, hash]);

  return null;
};

export default MatomoTracking;
