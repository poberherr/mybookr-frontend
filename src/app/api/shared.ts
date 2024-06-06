import { createClient as supabaseCreateClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkPlainText from "remark-plain-text";
import remarkPresetLintMarkdownStyleGuide from "remark-preset-lint-markdown-style-guide";
import xss from "xss";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
if (!supabaseKey || !supabaseUrl) {
  throw new Error("You need to provide a supabase key and url");
}

export const EMAIL = '"mybookr.io team" <info@mybookr.io>';

export const supabase = supabaseCreateClient(supabaseUrl, supabaseKey);

export const transporter = nodemailer.createTransport(
  process.env.NODE_ENV === "production"
    ? {
        host: "live.smtp.mailtrap.io",
        port: 587,
        // secure: false,
        auth: {
          user: "api",
          pass: process.env.MAILTRAP_PASSWORD_LIVE,
        },
      }
    : {
        host: "sandbox.smtp.mailtrap.io",
        port: 587,
        // secure: false,
        auth: {
          user: "ef731471ad70a6",
          pass: process.env.MAILTRAP_PASSWORD_SANDBOX,
        },
      },
);

export async function handleError(
  origin: string,
  ip: string,
  error: Error,
  request: NextRequest,
) {
  console.time("storing-error");
  // Store error to DB
  // const cleanReq: {[key: string]: any} = {};
  // const saveProps = [
  //   "bodyUsed",
  //   "cache",
  //   "credentials",
  //   "destination",
  //   "headers",
  //   "integrity",
  //   "isHistoryNavigation",
  //   "keepalive",
  //   "method",
  //   "mode",
  //   "redirect",
  //   "referrer",
  //   "referrerPolicy",
  //   "signal",
  //   "url",
  // ];

  // saveProps.forEach((reqProperty) => {
  //   cleanReq[reqProperty] = request[reqProperty];
  // });

  let formData = {};
  try {
    formData = await request.formData();
  } catch {}

  let requestJson = {};
  try {
    requestJson = await request.json();
  } catch {}

  async function storeError() {
    // Store to DB
    const { error: dbError } = await supabase.from("errors").insert([
      {
        origin,
        ip,
        referer: request.headers.get("referer"),
        form_data: formData,
        request: requestJson,
        error_message: error.message,
        error_stack: error.stack,
        error,
      },
    ]);
    if (dbError) {
      throw dbError;
    }
  }

  async function sendEmails() {
    const url = new URL(
      request.headers.get("referer") || "https://example.com",
    );

    // Send emails to hashbite + stanford
    await transporter.sendMail({
      from: EMAIL,
      to: `info@mybookr.io;errors-mybookr@hashbite.net`,
      subject: `An error occured in ${origin} on ${url.origin}`,
      text: [
        `An error happened in ${origin} on ${url.origin}`,
        ``,
        `Page: ${request.headers.get("referer")}`,
        `IP: ${ip}`,
        `Error: ${error.message}`,
        `Data:\n${JSON.stringify(request.body, null, 2)}`,
        ``,
        `Details: https://supabase.com/dashboard/project/bpjgajdmeesprnxyvmxk/editor/29114`,
      ].join("\n"),
    });
  }

  await Promise.all([storeError(), sendEmails()]);

  console.timeEnd("storing-error");
}

export async function checkSpam(type: string, ip: string) {
  // Store to DB
  const { data, error } = await supabase
    .from(type)
    .select("ip")
    .eq("ip", ip)
    .gte(
      "created_at",
      new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(),
    );
  if (error) {
    throw error;
  }
  return data.length > 3;
}

export function replacePlaceholdersAndApplyLayout(
  template: string,
  replaceMap: { [key: string]: string },
) {
  const mailWithLayout = `
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8>
<title></title>
<style>
html {
  font-size: 16px;
  font-family: 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
footer {
  font-size: 14px;
  margin-top: 1rem;
}
</style>
</head>
<body>

${template.toString()}

</body>
</html>
    `;

  return mailWithLayout.replace(/XXX[^\s]+XXX/g, (placeholder) => {
    const rawValue = replaceMap[placeholder] || placeholder;
    return xss(rawValue);
  });
}

export async function transformEmailText(emailContent: string) {
  const result = await remark()
    .use(remarkPresetLintMarkdownStyleGuide)
    .use(remarkPlainText)
    .process(emailContent);

  return result.toString();
}

export async function transformEmailHtml(emailContent: string) {
  const result = await remark()
    .use(remarkPresetLintMarkdownStyleGuide)
    .use(remarkHtml, { sanitize: false })
    .process(emailContent);

  return result.toString();
}
