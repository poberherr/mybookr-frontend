import React from "react";

import HubspotContactForm from "./HubspotContactForm";

export default async function ContactPage() {
  return (
    <div>
      <a id="top" />
      <HubspotContactForm />
    </div>
  );
}

export const revalidate = false;
