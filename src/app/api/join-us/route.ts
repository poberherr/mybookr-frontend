import { NextRequest, NextResponse } from "next/server";

import {
  EMAIL,
  checkSpam,
  handleError,
  replacePlaceholdersAndApplyLayout,
  supabase,
  transformEmailHtml,
  transformEmailText,
  transporter,
} from "./shared";
import {
  footerTemplate,
  joinUsClientSubject,
  joinUsClientTemplate,
  joinUsOwnerSubject,
  joinUsOwnerTemplate,
} from "./templates";

const EMAIL_DATA_LABELS = {
  project_name: "Project Name",
  name: "Name",
  category: "Category",
  number_of_rooms: "Number Of Rooms",
  number_of_villas: "Number Of Villas",
  bookings_per_year: "Bookings Per Year",
  email: "Email",
  is_serious: "Are you serious about it?",
};

async function sendClientEmail(
  formData: FormData,
  replaceMap: { [key: string]: string },
) {
  console.time("email-client");
  console.log(`Sending email to client ${formData.get("email")}`);
  const clientMailContent = replacePlaceholdersAndApplyLayout(
    joinUsClientTemplate,
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
    subject: joinUsClientSubject,
    text: clientMailText,
    html: clientMailHtml,
  });

  console.log(`Email Report Client:\n${JSON.stringify(infoClient, null, 2)}`);
  console.log(`Email Body Client:\n=====\n${clientMailHtml}\n=====`);
  console.timeEnd("email-client");
}

async function sendOwnerEmail(
  formData: FormData,
  replaceMap: { [key: string]: string },
) {
  console.time("email-owner");
  console.log(`Sending email to owner`);

  // Send confirmation email to owner
  const ownerMailContent = replacePlaceholdersAndApplyLayout(
    joinUsOwnerTemplate,
    replaceMap,
  );
  const ownerMailText = await transformEmailText(ownerMailContent);
  const ownerMailHtml = await transformEmailHtml(ownerMailContent);

  const infoOwner = await transporter.sendMail({
    from: EMAIL,
    to: EMAIL,
    subject: `${joinUsOwnerSubject} by ${[formData.get("project_name"), formData.get("name")].join(" - ")}`,
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
    // Spam check
    console.time("spam-check");
    const isSpamming = await checkSpam("join-us-requests", ip);
    if (isSpamming) {
      console.log(`Denied spammy request from ${ip}`);
      console.timeEnd("spam-check");
      return new Response(
        `Something went wrong. Please try again or contact us via email.`,
        {
          status: 500,
        },
      );
    }
    console.timeEnd("spam-check");
    const formData = await req.formData();

    // Store data to db
    console.time("store-to-database");
    const { error } = await supabase.from("join-us-requests").insert([
      {
        ip,
        project_name: formData.get("project_name"),
        name: formData.get("name"),
        category: formData.get("category"),
        number_of_rooms: formData.get("number_of_rooms"),
        number_of_villas: formData.get("number_of_villas"),
        bookings_per_year: formData.get("bookings_per_year"),
        email: formData.get("email"),
        is_serious: formData.get("is_serious"),
      },
    ]);

    console.timeEnd("store-to-database");

    if (error) {
      throw error;
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
      XXXNAMEXXX: formData.get("name") || formData.get("project_name"),
    };

    await Promise.all([
      sendClientEmail(formData, replaceMap),
      sendOwnerEmail(formData, replaceMap),
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
