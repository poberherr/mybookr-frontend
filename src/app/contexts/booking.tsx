"use client";

import { createContext, useCallback, useContext } from "react";
import React, { useEffect } from "react";
import { Range } from "react-date-range";
import { Control, FieldValues, Path, useWatch } from "react-hook-form";

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
  dateFrom: string;
  dateTo: string;
  guest: number;
  email: string;
}

const useBookingStateStore =
  createPersistedState<BookingStateStore>("mybookr-booking");

export const BookingContext = createContext<{
  dateFrom?: Date;
  dateTo?: Date;
  setDates: (startDate: Date, endDate: Date) => void;
  guest: number;
  setGuest: (guest: number) => void;
  email?: string;
  setEmail: (email: string) => void;
}>({
  dateFrom: undefined,
  dateTo: undefined,
  setDates: () => {},
  guest: 1,
  setGuest: () => {},
  email: undefined,
  setEmail: () => {},
});

export const BookingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bookingState, setBookingState] = useBookingStateStore({
    dateFrom: formatISO(startOfToday()),
    dateTo: formatISO(startOfTomorrow()),
    guest: 0,
    email: "",
  });

  const setDates = useCallback(
    (startDate: Date, endDate: Date) => {
      if (endDate >= startDate ) {
        setBookingState((prevState) => ({
          ...prevState,
          dateFrom: formatISO(startDate),
          dateTo: formatISO(endDate),
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

  const setEmail = useCallback(
    (email: string) => {
      if (bookingState.email !== email) {
        console.log("Updating email", {
          email,
          bookingState,
        });
        setBookingState((prevState) => ({
          ...prevState,
          email,
        }));
      }
    },
    [bookingState, setBookingState],
  );

  useEffect(() => {
    if (
      !bookingState.dateFrom ||
      isBefore(parseISO(bookingState.dateFrom), startOfToday())
    ) {
      setDates(startOfToday(), startOfTomorrow());
    }
  }, [bookingState, setDates]);

  return (
    <BookingContext.Provider
      value={{
        dateFrom: bookingState.dateFrom
          ? parseISO(bookingState.dateFrom)
          : undefined,
        dateTo: bookingState.dateTo
          ? parseISO(bookingState.dateTo)
          : undefined,
        setDates,
        guest: bookingState.guest,
        setGuest,
        email: bookingState.email,
        setEmail,
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
  const { dateFrom, dateTo, setDates } = useContext(BookingContext);
  useEffect(() => {
    if (!dateFrom || !dateTo || !value.startDate || !value.endDate) {
      return;
    }
    if (
      value.startDate.toISOString() !== dateFrom.toISOString() ||
      value.endDate.toISOString() !== dateTo.toISOString()
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

export function useWatchEmail<T extends FieldValues>(
  control: Control<T>,
  name: Path<T>,
) {
  const value: string = useWatch({ name, control });
  const { email, setEmail } = useContext(BookingContext);
  useEffect(() => {
    if (
      value.trim().length > 0 &&
      value?.match(/[^\s]+@[^\s]+/) &&
      value !== email
    ) {
      console.log("setting email", value);
      setEmail(value);
    } else {
      console.log("resetting email because invalid", value);
      setEmail("");
    }
  }, [value]);
}
