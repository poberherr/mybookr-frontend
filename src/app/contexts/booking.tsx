"use client";

import { createContext, useCallback, useContext } from "react";
import React, { useEffect } from "react";
import { Range } from "react-date-range";
import { Control, FieldValues, Path, useWatch } from "react-hook-form";

import {
  formatISO,
  isBefore,
  parseISO,
  startOfToday,
  startOfTomorrow,
} from "date-fns";
import createPersistedState from "use-persisted-state";

import "@/global.css";

interface ExperienceActivity {
  [key: string]: string;
}

interface BookingStateStore {
  dateFrom: string; // minimum date for booking
  dateTo: string; // maximum date for booking
  bookingDate?: string; // actual desired date user wants to book
  activities: ExperienceActivity; // selected activities for each experience
  guests: number;
  email: string;
}

const useBookingStateStore =
  createPersistedState<BookingStateStore>("mybookr-booking-v0");

export const BookingContext = createContext<{
  dateFrom?: Date;
  dateTo?: Date;
  setDates: (startDate: Date, endDate: Date) => void;
  bookingDate?: Date;
  setBookingDate: (newBookingDate: Date) => void;
  activities: ExperienceActivity;
  setActivityForExperience: (experienceId: string, activityId: string) => void;
  guests: number;
  setGuests: (guests: number) => void;
  email?: string;
  setEmail: (email: string) => void;
}>({
  dateFrom: undefined,
  dateTo: undefined,
  setDates: () => {},
  bookingDate: undefined,
  setBookingDate: () => {},
  activities: {},
  setActivityForExperience: () => {},
  guests: 0,
  setGuests: () => {},
  email: undefined,
  setEmail: () => {},
});

const defaultBookingsContextValues = {
  dateFrom: formatISO(startOfToday()),
  dateTo: formatISO(startOfTomorrow()),
  bookingDate: undefined,
  activities: {},
  guests: 0,
  email: "",
};

export const BookingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  let [bookingState, setBookingState] = useBookingStateStore(
    defaultBookingsContextValues,
  );

  // Reset context when stored context has different structure as default one
  // (in case we updated our context structure and browser still has old structure)
  // @todo this breaks the auto context updating logic in the checkout start form
  // if (
  //   JSON.stringify(Object.keys(bookingState).sort()) !==
  //   JSON.stringify(Object.keys(defaultBookingsContextValues).sort())
  // ) {
  //   console.log(
  //     "reset store data cus",
  //     JSON.stringify(Object.keys(bookingState).sort()) ,
  //       JSON.stringify(Object.keys(defaultBookingsContextValues).sort())
  //   );
  //   setBookingState(defaultBookingsContextValues);
  //   // bookingState = {...bookingState, ...defaultBookingsContextValues}
  // }

  const setDates = useCallback(
    (startDate: Date, endDate: Date) => {
      if (endDate >= startDate) {
        setBookingState((prevState) => ({
          ...prevState,
          dateFrom: formatISO(startDate),
          dateTo: formatISO(endDate),
        }));
      }
    },
    [bookingState, setBookingState],
  );

  const setBookingDate = useCallback(
    (newBookingDate: Date) => {
      if (newBookingDate.getTime() >= startOfToday().getTime()) {
        setBookingState((prevState) => ({
          ...prevState,
          bookingDate: formatISO(newBookingDate),
        }));
      }

    },
    [bookingState, setBookingState],
  );

  const setActivityForExperience = useCallback(
    (experienceId: string, activityId: string | undefined) => {
      setBookingState((prevState) => {
        const { activities } = prevState;
        if (!activityId) {
          delete activities[experienceId];
        } else {
          activities[experienceId] = activityId;
        }
        return {
          ...prevState,
          activities,
        };
      });
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
        dateTo: bookingState.dateTo ? parseISO(bookingState.dateTo) : undefined,
        setDates,
        bookingDate: bookingState.bookingDate
          ? parseISO(bookingState.bookingDate)
          : undefined,
        setBookingDate,
        activities: bookingState.activities,
        setActivityForExperience,
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

export function useWatchBookingDate<T extends FieldValues>(
  control: Control<T>,
  name: Path<T>,
) {
  const value: Date = useWatch({ name, control });
  const { bookingDate, setBookingDate } = useContext(BookingContext);
  useEffect(() => {
    if (value >= startOfToday() && value.getTime() !== bookingDate?.getTime()) {
      console.log("updating booking date in context to", value)
      setBookingDate(value);
    }
  }, [value]);
}

export function useWatchActivityId<T extends FieldValues>(
  control: Control<T>,
  name: Path<T>,
  experienceId: string
) {
  const value: string = useWatch({ name, control });
  const { activities, setActivityForExperience } = useContext(BookingContext);
  useEffect(() => {
    if (value && activities[experienceId] !== value) {
      setActivityForExperience(experienceId, value)
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
      value !== email &&
      value.trim().length > 0 &&
      value.match(/^[^\s]+@[^\s]+$/)
    ) {
      console.log("setting email", value);
      setEmail(value);
      return
    }
    console.log("ignoring email storage because invalid or already set", value);
  }, [value]);
}
