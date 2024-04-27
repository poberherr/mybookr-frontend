"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
} from "react";
import React, { useEffect } from "react";
import { Range } from "react-date-range";
import {
  Control,
  DeepPartialSkipArrayKey,
  FieldValues,
  Path,
  useWatch,
} from "react-hook-form";

import {
  differenceInDays,
  formatISO,
  isBefore,
  parseISO,
  startOfToday,
  startOfTomorrow,
} from "date-fns";
import createPersistedState from "use-persisted-state";

import "@/global.css";

interface BookingStateStore {
  selectedDate: string;
  selectedDate1: string;
  nights: number;
  guest: number;
}

const useBookingStateStore =
  createPersistedState<BookingStateStore>("mybookr-booking");

export const BookingContext = createContext<{
  selectedDate?: Date;
  selectedDate1?: Date;
  nights: number;
  setDates: (startDate: Date, endDate: Date) => void;
  guest: number;
  setGuest: (guest: number) => void;
}>({
  selectedDate: undefined,
  selectedDate1: undefined,
  nights: 1,
  setDates: () => {},
  guest: 1,
  setGuest: () => {},
});

export const BookingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bookingState, setBookingState] = useBookingStateStore({
    selectedDate: formatISO(startOfToday()),
    selectedDate1: formatISO(startOfTomorrow()),
    guest: 0,
    nights: 1,
  });

  const setDates = useCallback(
    (startDate: Date, endDate: Date) => {
      const nights = differenceInDays(endDate, startDate);

      if (nights > 0) {
        console.log("Updating dates", {
          startDate,
          endDate,
          nights,
          bookingState,
        });
        setBookingState((prevState) => ({
          ...prevState,
          selectedDate: formatISO(startDate),
          selectedDate1: formatISO(endDate),
          nights,
        }));
      }
    },
    [bookingState, setBookingState],
  );

  const setGuest = useCallback(
    (guest: number) => {
      if (bookingState.guest !== guest) {
        console.log("Updating guest", {
          guest,
          bookingState,
        });
        setBookingState((prevState) => ({
          ...prevState,
          guest,
        }));
      }
    },
    [bookingState, setBookingState],
  );

  useEffect(() => {
    if (
      !bookingState.selectedDate ||
      isBefore(parseISO(bookingState.selectedDate), startOfToday())
    ) {
      setDates(startOfToday(), startOfTomorrow());
    }
  }, [bookingState, setDates]);

  return (
    <BookingContext.Provider
      value={{
        selectedDate: bookingState.selectedDate
          ? parseISO(bookingState.selectedDate)
          : undefined,
        selectedDate1: bookingState.selectedDate1
          ? parseISO(bookingState.selectedDate1)
          : undefined,
        nights: bookingState.nights,
        setDates,
        guest: bookingState.guest,
        setGuest,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export function useWatchDateRange<T extends FieldValues>(
  control: Control<T>,
  name: Path<T>,
) {
  const value: Range = useWatch({ name, control });
  const { selectedDate, selectedDate1, setDates } = useContext(BookingContext);
  useEffect(() => {
    if (!selectedDate || !selectedDate1 || !value.startDate || !value.endDate) {
      return;
    }
    if (
      value.startDate.getTime() !== selectedDate.getTime() ||
      value.endDate.getTime() !== selectedDate1.getTime()
    ) {
      setDates(value.startDate, value.endDate);
    }
  }, [value]);
}

export function useWatchGuest<T extends FieldValues>(
  control: Control<T>,
  name: Path<T>,
) {
  const value: number = useWatch({ name, control });
  const { guest, setGuest } = useContext(BookingContext);
  useEffect(() => {
    if (value > 0 && value !== guest) {
      console.log("setting guest", guest);
      setGuest(value);
    }
  }, [value]);
}
