import React from "react";

import { Layout } from "@/components/Layout";
import { Stripe } from "@/components/Stripe";

const StripePage = () => {
  return (
    <Layout>
      <div className="my-12 grid gap-12 px-4 py-0 md:px-40">
        <Stripe />
      </div>
    </Layout>
  );
};

export default StripePage;
