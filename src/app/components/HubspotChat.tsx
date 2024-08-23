"use client";

import Script from "next/script";
import { useContext } from "react";
import { OperatorContext } from "../context/operatorContext";

const HubspotChat = () => {
  const operator = useContext(OperatorContext);

  // Render only on production and only for mybookr.io
  if (process.env.NODE_ENV !== "production" || !!operator) {
    return null;
  }
  return (
    <Script
      id="hs-script-loader"
      async
      defer
      src="//js-eu1.hs-scripts.com/144669380.js"
      strategy={"lazyOnload"}
    />
  );
};

export default HubspotChat;
