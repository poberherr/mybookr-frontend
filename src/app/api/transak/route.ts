import { currentUser } from "@clerk/nextjs/server";
import { format, startOfToday, subMonths } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const user = await currentUser();

  const transakTokenRes = await fetch(
    `${process.env.TRANSAK_API_URL}/partners/api/v2/refresh-token`,
    {
      method: "POST",
      body: JSON.stringify({
        apiKey: process.env.NEXT_PUBLIC_TRANSAK_API_KEY,
      }),
      headers: {
        "Content-Type": "application/json",
        "api-secret": process.env.TRANSAK_API_SECRET || "",
      },
    },
  );

  const transakTokenResJSON = await transakTokenRes.json();
  const transakAccessToken = transakTokenResJSON.data.accessToken;

  const params = new URLSearchParams();
  // params.append("limit", "100")
  params.append(
    "startDate",
    format(subMonths(startOfToday(), 1), "yyyy-MM-dd"),
  );
  params.append("endDate", format(startOfToday(), "yyyy-MM-dd"));
  params.append("filter[productsAvailed]", '["BUY"]');
  params.append("filter[status]", "COMPLETED");
  params.append("filter[sortOrder]", "asc");
  params.append("limit", "100");

  const transakTransactionsRes = await fetch(
    `${process.env.TRANSAK_API_URL}/partners/api/v2/orders?${params.toString()}`,
    {
      method: "GET",
      headers: {
        "access-token": transakAccessToken,
      },
    },
  );

  const transakTransactionsJson = await transakTransactionsRes.json();

  const filteredTransactions = transakTransactionsJson.data.filter(
    (transaction: any) => transaction.partnerCustomerId === user?.id,
  );

  return NextResponse.json({ transactions: filteredTransactions });
}
