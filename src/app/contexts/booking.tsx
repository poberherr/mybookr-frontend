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
  guests: number;
  email: string;
}

const useBookingStateStore =
  createPersistedState<BookingStateStore>("mybookr-booking");

export const BookingContext = createContext<{
  dateFrom?: Date;
  dateTo?: Date;
  setDates: (startDate: Date, endDate: Date) => void;
  guests: number;
  setGuests: (guests: number) => void;
  email?: string;
  setEmail: (email: string) => void;
}>({
  dateFrom: undefined,
  dateTo: undefined,
  setDates: () => {},
  guests: 1,
  setGuests: () => {},
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
    guests: 0,
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

  const setGuests = useCallback(
    (guests: number) => {
      if (bookingState.guests !== guests) {
        console.log("Updating guest", {
          guests,
          bookingState,
        });
        setBookingState((prevState) => ({
          ...prevState,
          guests,
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
        guests: bookingState.guests,
        setGuests,
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
  const { guests, setGuests } = useContext(BookingContext);
  useEffect(() => {
    if (value > 0 && value !== guests) {
      console.log("setting guest", guests);
      setGuests(value);
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
