"use client";

import { Dispatch, SetStateAction, createContext, useCallback } from "react";
import React, { useEffect } from "react";



import { formatISO, isBefore, parseISO, startOfToday, startOfTomorrow } from "date-fns";
import createPersistedState from "use-persisted-state";



import "@/global.css";


interface BookingStateStore {
  selectedDate: string;
  selectedDate1: string;
  guest: number;
  nights: number;
}

const useBookingStateStore =
  createPersistedState<BookingStateStore>("mybookr-booking");

export const BookingContext = createContext<{
  selectedDate?: Date;
  setSelectedDate: (date: string | Date) => void;
  selectedDate1?: Date;
  setSelectedDate1: (date: string | Date) => void;
  guest: number;
  setGuest: (guest: number) => void;
  nights: number;
  setNights: (nights: number) => void;
}>({
  selectedDate: undefined,
  setSelectedDate: () => {},
  selectedDate1: undefined,
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
  const [bookingState, setBookingState] = useBookingStateStore({
    selectedDate: formatISO(startOfToday()),
    selectedDate1: formatISO(startOfTomorrow()),
    guest: 0,
    nights: 1,
  });

  const setSelectedDate = useCallback(
    (date: string | Date) => {
      const newDate = typeof date === "string" ? date : formatISO(date);
      if (newDate !== bookingState.selectedDate) {
        setBookingState((prevState) => ({
          ...prevState,
          selectedDate: newDate,
        }));
      }
    },
    [bookingState, setBookingState],
  );

  const setSelectedDate1 = useCallback(
    (date: string | Date) => {
      const newDate = typeof date === "string" ? date : formatISO(date);
      if (newDate !== bookingState.selectedDate1) {
        setBookingState((prevState) => ({
          ...prevState,
          selectedDate1: newDate,
        }));
      }
    },
    [bookingState, setBookingState],
  );

  const setGuest = useCallback((guest: number) => {
    if (bookingState.guest !==guest) {setBookingState((prevState) => ({
      ...prevState,
      guest,
    }));}
  }, [bookingState, setBookingState])

  const setNights = useCallback((nights: number) => {
    if (bookingState.nights !==nights) {setBookingState((prevState) => ({
      ...prevState,
      nights,
    }));}
  }, [bookingState, setBookingState])

  useEffect(() => {
    if (
      !bookingState.selectedDate ||
      isBefore(parseISO(bookingState.selectedDate), startOfToday())
    ) {
      setSelectedDate(startOfToday());
      setSelectedDate1(startOfTomorrow());
      setNights(1);
    }
  }, [bookingState, setSelectedDate, setSelectedDate1, setNights]);

  return (
    <BookingContext.Provider
      value={{
        selectedDate: bookingState.selectedDate
          ? parseISO(bookingState.selectedDate)
          : undefined,
        setSelectedDate,
        selectedDate1: bookingState.selectedDate1
          ? parseISO(bookingState.selectedDate1)
          : undefined,
        setSelectedDate1,
        guest: bookingState.guest,
        setGuest,
        nights: bookingState.nights,
        setNights,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};