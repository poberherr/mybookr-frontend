"use client";

import { Dispatch, SetStateAction, createContext } from "react";
import React, { useEffect } from "react";

import { isBefore, startOfToday, startOfTomorrow } from "date-fns";
import createPersistedState from "use-persisted-state";

import "@/global.css";

const useSelectedDateStateStore = createPersistedState<Date>(
  "mybook-selectedDate",
);
const useSelectedDate1StateStore = createPersistedState<Date>(
  "mybook-selectedDate1",
);
const useNightsStateStore = createPersistedState<number>("mybook-nights");
const useGuestStateStore = createPersistedState<number>("mybook-guest");

export const BookingContext = createContext<{
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  selectedDate1: Date;
  setSelectedDate1: Dispatch<SetStateAction<Date>>;
  guest: number;
  setGuest: Dispatch<SetStateAction<number>>;
  nights: number;
  setNights: Dispatch<SetStateAction<number>>;
}>({
  selectedDate: new Date(),
  setSelectedDate: () => {},
  selectedDate1: new Date(),
  setSelectedDate1: () => {},
  guest: 1,
  setGuest: () => {},
  nights: 1,
  setNights: () => {},
});

export const BookingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedDate, setSelectedDate] =
    useSelectedDateStateStore(startOfToday());
  const [selectedDate1, setSelectedDate1] =
    useSelectedDate1StateStore(startOfTomorrow());
  const [nights, setNights] = useNightsStateStore(1);
  const [guest, setGuest] = useGuestStateStore(0);

  useEffect(() => {
    if (isBefore(selectedDate, startOfToday())) {
      setSelectedDate(startOfToday());
      setSelectedDate1(startOfTomorrow());
      setNights(1);
    }
  }, [selectedDate, setSelectedDate, setSelectedDate1, setNights]);

  return (
    <BookingContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedDate1,
        setSelectedDate1,
        nights,
        setNights,
        guest,
        setGuest,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
