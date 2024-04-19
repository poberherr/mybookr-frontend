import React from "react";

import { Clerk } from "@/components/Clerk";
import { Layout } from "@/components/Layout";

const ClerkPage = () => {
  return (
    <Layout>
      <div className="my-12 grid gap-12 px-4 py-0 md:px-40">
        <Clerk />
      </div>
    </Layout>
  );
};

export default ClerkPage;
