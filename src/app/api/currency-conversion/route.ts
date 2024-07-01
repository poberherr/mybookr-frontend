import { NextResponse } from "next/server";
import fetch from "node-fetch";
import cache from "memory-cache";

const CACHE_KEY = "currency-conversion";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 1 day in milliseconds

export async function GET() {
  const cachedData = cache.get(CACHE_KEY);

  if (cachedData) {
    return NextResponse.json(cachedData);
  }

  let data;

  try {
    const response = await fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=" +
        process.env.FREE_CURRENCY_API_KEY +
        "&base_currency=USD&currencies=IDR",
    );
    data = (await response.json()) as any;
    const conversionRate = data.data.IDR;

    const result = { conversionRate };
    cache.put(CACHE_KEY, result, CACHE_DURATION);

    return NextResponse.json(result);
  } catch (error) {
    console.log({ data });
    console.error("Error fetching the currency conversion rate:", error);
    return NextResponse.json(
      { error: "Error fetching the currency conversion rate" },
      { status: 500 },
    );
  }
}
