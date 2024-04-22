import { Dispatch, SetStateAction, createContext } from "react";


export const BookingContext = createContext<{
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  selectedDate1: Date;
  setSelectedDate1: Dispatch<SetStateAction<Date>>;
}>({
  selectedDate: new Date(),
  setSelectedDate: () => {},
  selectedDate1: new Date(),
  setSelectedDate1: () => {},
});