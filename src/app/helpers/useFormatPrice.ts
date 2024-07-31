import { useMemo } from "react";
import useCurrencyConversion from "./useCurrencyConversion";

export const useFormatPrice = (price: number | undefined, full = false) => {
  const conversionRate = useCurrencyConversion();
  return useMemo(() => {
    if (!price) {
      return undefined;
    }
    const usd = price / 100;
    const convertedPrice = usd * conversionRate;
    let rounded: number;

    if (convertedPrice >= 10000000) {
      rounded = Math.round(convertedPrice / 1000000) * 1000000;
    } else {
      rounded = Math.round(convertedPrice / 10000) * 10000;
    }

    const formatted = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(rounded);

    return formatted;
  }, [price, conversionRate]);
};
