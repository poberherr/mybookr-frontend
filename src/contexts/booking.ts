import { Dispatch, SetStateAction, createContext } from "react";


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