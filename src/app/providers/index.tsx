"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  SearchMachineSnapshot,
  searchMachine,
  SearchStateMachineContext,
} from "../state-machines/searchMachine";
import { startOfToday, startOfTomorrow } from "date-fns";
import { useMachine } from "@xstate/react";
import { useIsClient } from "../helpers/useIsClient";

export default function ContextProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const isClient = useIsClient();
  // Handle search state machine with restore from local storage
  const [initialBookingMachineSnapshot, setInitialBookingMachineSnapshot] =
    useState<SearchMachineSnapshot>();
  // useEffect(() => {
  //   if (!isClient || initialBookingMachineSnapshot) {
  //     return;
  //   }
  //   let dumbRestore;
  //   try {
  //     const entry = localStorage.getItem(`search-machine-state`);
  //     if (!entry) {
  //       return undefined;
  //     }
  //     dumbRestore = JSON.parse(entry);
  //   } catch (err) {
  //     console.log("broken search-machine-state in localStorage")
  //     return undefined;
  //   }

  //   console.log("Could execute dumb restore:", dumbRestore);

  //   setInitialBookingMachineSnapshot({
  //     ...dumbRestore,
  //     context: {
  //       ...dumbRestore.context,
  //       dateFrom: new Date(dumbRestore.context.dateFrom || startOfToday()),
  //       dateTo: new Date(dumbRestore.context.dateTo || startOfTomorrow()),
  //       bookingDate: new Date(
  //         dumbRestore.context.bookingDate || startOfTomorrow(),
  //       ),
  //     },
  //   } as SearchMachineSnapshot);
  // }, [isClient, initialBookingMachineSnapshot]);

  const [searchMachineState, sendSearchMachineAction] = useMachine(
    searchMachine,
    {
      snapshot: initialBookingMachineSnapshot,
    },
  );

  // console.log({searchMachineState, initialBookingMachineSnapshot})

  useEffect(() => {
    // Debugger for us
    console.log("State updated:", searchMachineState.value);
    console.table({ context: searchMachineState.context });

    // Store current state to localStorage for recovery
    localStorage.setItem(
      `search-machine-state`,
      JSON.stringify(
        searchMachineState.machine.getPersistedSnapshot(searchMachineState),
      ),
    );
  }, [searchMachineState]);
  return (
    <SearchStateMachineContext.Provider
      value={{ searchMachineState, sendSearchMachineAction }}
    >
      {children}
    </SearchStateMachineContext.Provider>
  );
}
