import { useState, useEffect } from "react";

const useCurrencyConversion = () => {
  const [conversionRate, setConversionRate] = useState(16366.98077749);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await fetch("/api/currency-conversion");
        const data = await response.json();

        if (!data.conversionRate) {
          console.dir({ data });
          throw new Error("Invalid data from currency conversion endpoint");
        }
        setConversionRate(data.conversionRate);
      } catch (error) {
        console.error("Error fetching the currency conversion rate:", error);
      }
    };

    fetchConversionRate();
  }, []);

  return conversionRate;
};

export default useCurrencyConversion;
