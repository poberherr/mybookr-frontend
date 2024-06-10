import { useMemo } from "react";

export const useFormatPrice = (price: number | undefined, full = false) => {
  if (!price) {
    return undefined;
  }
  const { long, short } = useMemo(() => {
    const long = (price / 100).toFixed(2);
    const short =
      long.substring(long.length - 3) === ".00"
        ? long.substring(0, long.length - 3)
        : long;
    return { long, short };
  }, [price]);
  
  return `$${full ? long : short}`;
};
