import { useState, useEffect } from "react";

import { useQuery } from "@urql/next";
import { graphql } from "@/gql";

const CurrencyQuery = graphql(`
  query CurrencyQuery {
    currency {
      idr
    }
  }
`);

const useCurrencyConversion = () => {
  const [conversionRate, setConversionRate] = useState(16000);

  const [currencyResult] = useQuery({
    query: CurrencyQuery,
  });

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        if (!currencyResult.data) {
          console.dir({ currencyResult });
          throw new Error("Invalid data from currency conversion endpoint");
        }
        setConversionRate(currencyResult.data.currency.idr);
      } catch (error) {
        console.error("Error fetching the currency conversion rate:", error);
      }
    };

    fetchConversionRate();
  }, []);

  return conversionRate;
};

export default useCurrencyConversion;
