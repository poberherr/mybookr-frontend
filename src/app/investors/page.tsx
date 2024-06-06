"use client";

import React, { useCallback, useEffect, useState } from "react";

import { useSession, useUser } from "@clerk/clerk-react";

import { SButton } from "../components/ui/SButton";

import TransakWrapper from "./transak";

export default function InvestorPage() {
  const [transakActive, setTransakActive] = useState(false);
  const { session } = useSession();

  const openTransak = useCallback(() => {
    setTransakActive(true);
  }, [setTransakActive]);

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (!session || !session?.lastActiveToken) {
      return;
    }
    const rawToken = session?.lastActiveToken?.getRawString();

    const fetchTransactions = async (token: string) => {
      const res = await fetch("/api/transak", {
        headers: { authorization: `Bearer ${token}` },
      });

      const json = await res.json();
      setTransactions(json.transactions);
    };

    fetchTransactions(rawToken);
  }, [session]);

  return (
    <div className="my-12 grid gap-12 px-4 py-0 md:px-40">
      <SButton onClick={openTransak}>Invest into mybookr</SButton>
      {transakActive && <TransakWrapper setTransakActive={setTransakActive} />}

      <section>
        <h2 className="text-xl font-bold">Your Investments:</h2>
        {transactions.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  FIAT
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Crypto
                </th>
              </tr>
            </thead>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  {transaction.createdAt}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {transaction.fiatAmount} {transaction.fiatCurrency}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {transaction.cryptoAmount} {transaction.cryptoCurrency}
                </td>
              </tr>
            ))}
          </table>
        ) : (
          "You did not invest yet."
        )}
      </section>
    </div>
  );
}
