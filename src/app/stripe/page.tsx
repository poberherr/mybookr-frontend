import React from "react";

import { Stripe } from "@/app/components/Stripe";

const StripePage = () => {
  return (
    <div className="my-12 grid gap-12 px-4 py-0 md:px-40">
      <Stripe />
    </div>
  );
};

export default StripePage;
