"use client";

import React, { useEffect, useMemo } from "react";
import {
  SearchMachineSnapshot,
  searchMachine,
  SearchStateMachineContext,
} from "../state-machines/searchMachine";
import { startOfToday, startOfTomorrow } from "date-fns";
import { useMachine } from "@xstate/react";
import { CategoryContext } from "../helpers/categoryContext";

export default function ContextProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialBookingMachineSnapshot = useMemo(() => {
    let dumbRestore;
    try {
      const entry = localStorage.getItem(`search-machine-state`);
      if (!entry) {
        return undefined;
      }
      dumbRestore = JSON.parse(entry);
    } catch (err) {
      console.log("broken search-machine-state in localStorage");
      return undefined;
    }

    return {
      ...dumbRestore,
      context: {
        ...dumbRestore.context,
        dateFrom: new Date(dumbRestore.context.dateFrom || startOfToday()),
        dateTo: new Date(dumbRestore.context.dateTo || startOfTomorrow()),
        bookingDate: new Date(
          dumbRestore.context.bookingDate || startOfTomorrow(),
        ),
      },
    } as SearchMachineSnapshot;
  }, []);

  const [searchMachineState, sendSearchMachineAction] = useMachine(
    searchMachine,
    {
      snapshot: initialBookingMachineSnapshot,
    },
  );

  useEffect(() => {
    // Debugger for us
    console.table({
      type: "BookingState",
      value: searchMachineState.value,
    });
    console.table(searchMachineState.context);

    // Store current state to localStorage for recovery
    localStorage.setItem(
      `search-machine-state`,
      JSON.stringify(
        searchMachineState.machine.getPersistedSnapshot(searchMachineState),
      ),
    );
  }, [searchMachineState.value]);
  return (
    <CategoryContext.Provider
      value={process.env.NEXT_PUBLIC_BASE_CATEGORY || "Root"}
    >
      <SearchStateMachineContext.Provider
        value={{ searchMachineState, sendSearchMachineAction }}
      >
        {children}
      </SearchStateMachineContext.Provider>
    </CategoryContext.Provider>
  );
}
