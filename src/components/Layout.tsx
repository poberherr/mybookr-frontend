import React from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
