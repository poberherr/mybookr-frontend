import format from "date-fns/format";
import { NextRequest, NextResponse } from "next/server";

import { Listing } from "@/app/api-helpers";
import { getListing } from "@/app/helpers/useGetListing";

import {
  EMAIL,
  handleError,
  replacePlaceholdersAndApplyLayout,
  transformEmailHtml,
  transformEmailText,
  transporter,
} from "../shared";
import {
  bookingConfirmationClientSubject,
  bookingConfirmationClientTemplate,
  bookingConfirmationOwnerSubject,
  bookingConfirmationOwnerTemplate,
  footerTemplate,
} from "./templates";

const EMAIL_DATA_LABELS = {
  selectedDate: "Start Date",
  selectedDate1: "End Date",
  guest: "Guests",
  nights: "Nights",
  email: "Email",
};

async function sendBookerEmail(
  formData: FormData,
  replaceMap: { [key: string]: string },
) {
  console.time("email-client");
  console.log(`Sending email to client ${formData.get("email")}`);
  const clientMailContent = replacePlaceholdersAndApplyLayout(
    bookingConfirmationClientTemplate,
    replaceMap,
  );
  const clientMailText = await transformEmailText(clientMailContent);
  const clientMailHtml = await transformEmailHtml(clientMailContent);
  const toEmail = formData.get("email");
  if (!toEmail) {
    throw new Error("No email provided. Failing.");
  }

  // Send email to client
  const infoClient = await transporter.sendMail({
    from: EMAIL,
    to: toEmail as string,
    subject: bookingConfirmationClientSubject,
    text: clientMailText,
    html: clientMailHtml,
  });

  console.log(`Email Report Client:\n${JSON.stringify(infoClient, null, 2)}`);
  console.log(`Email Body Client:\n=====\n${clientMailHtml}\n=====`);
  console.timeEnd("email-client");
}

async function sendHostEmail(
  formData: FormData,
  listing: Listing,
  replaceMap: { [key: string]: string },
) {
  console.time("email-owner");
  console.log(`Sending email to owner`);

  // Send confirmation email to owner
  const ownerMailContent = replacePlaceholdersAndApplyLayout(
    bookingConfirmationOwnerTemplate,
    replaceMap,
  );
  const ownerMailText = await transformEmailText(ownerMailContent);
  const ownerMailHtml = await transformEmailHtml(ownerMailContent);

  const infoOwner = await transporter.sendMail({
    from: EMAIL,
    to: EMAIL,
    subject: `${bookingConfirmationOwnerSubject} for ${listing.title} by ${formData.get("email")}`,
    text: ownerMailText,
    html: ownerMailHtml,
  });

  console.log(`Email Report Owner:\n${JSON.stringify(infoOwner, null, 2)}`);
  console.log(`Email Body Owner:\n=====\n${ownerMailHtml}\n=====`);
  console.timeEnd("email-owner");
}

export async function POST(req: NextRequest, res: NextResponse) {
  const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown";
  try {
    const formData = await req.formData();

    const listingId = formData.get("listingId");

    if (!listingId) {
      throw new Error("No listing id passed. Failing!");
    }

    const listing = getListing(parseInt(listingId.toString()));

    if (!listing) {
      throw new Error("Listing not existing for this id");
    }

    // Prepare emails from templates
    const dataTable = `
<table>
<tbody>
${Object.keys(EMAIL_DATA_LABELS)
  .map((key) => {
    const title = EMAIL_DATA_LABELS[key as keyof typeof EMAIL_DATA_LABELS];
    if (!title) {
      return false;
    }
    const data = formData.get(key);
    if (!data || data === "") {
      return false;
    }
    try {
      if (!data.toString().match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}/)) {
        throw new Error("Not a date! Yes, this is ugly, but it works.");
      }
      const parsedDate = new Date(data.toString());
      return `<tr><td><strong>${title}</strong></td><td>${format(parsedDate, "dd.MM.yyyy")}</td></tr>`;
    } catch {}
    return `<tr><td><strong>${title}</strong></td><td>${data}</td></tr>`;
  })
  .filter(Boolean)
  .join("\n")}
</tbody>
</table>
    `;

    const replaceMap: { [key: string]: any } = {
      XXXFOOTERXXX: footerTemplate.toString(),
      XXXDATAXXX: dataTable,
      XXXLISTINGXXX: listing.title,
      XXXLISTINGADDRESSXXX: [
        listing.location.street,
        `${listing.location.zip} ${listing.location.city}`,
        listing.location.country,
      ].join(", "),
      XXXNAMEXXX: formData.get("email"),
    };

    await Promise.all([
      sendBookerEmail(formData, replaceMap),
      sendHostEmail(formData, listing, replaceMap),
    ]);

    console.log("Done");

    return Response.json({ success: true });
  } catch (error) {
    // Error handling
    try {
      await handleError("contact-form", ip, error as Error, req);
    } catch (storingError) {
      console.error({ storingError });
    }

    console.error({ error });
    return new Response(
      `Something went wrong. Please try again or contact us via email.`,
      {
        status: 500,
      },
    );
  }
}
