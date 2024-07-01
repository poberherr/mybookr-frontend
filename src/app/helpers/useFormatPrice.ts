import { useContext, useMemo } from "react";
import useCurrencyConversion from "./useCurrencyConversion";

export const useFormatPrice = (price: number | undefined, full = false) => {
  const conversionRate = useCurrencyConversion();
  return useMemo(() => {
    if (!price) {
      return undefined;
    }
    const usd = price / 100;
    const rounded =
      parseInt(((usd * conversionRate) / 1000000).toFixed()) * 1000000;
    const formatted = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(rounded);
    return formatted;

    // Old Dollar logic:
    // const long = (price / 100 * conversionRate).toFixed(2);
    // const short =
    //   long.substring(long.length - 3) === ".00"
    //     ? long.substring(0, long.length - 3)
    //     : long;
    // return `$ ${full ? long : short}`;
  }, [price, conversionRate]);
};
