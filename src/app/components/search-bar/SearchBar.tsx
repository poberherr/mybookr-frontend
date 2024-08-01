"use client";

import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Range } from "react-date-range";
import { FormProvider, useForm } from "react-hook-form";

import format from "date-fns/format";

import { Divider } from "@mui/material";

import CalendarIcon from "@/assets/icons/calendar.svg";

import { useIsClient } from "@/app/helpers/useIsClient";

import Calendar from "../Calendar/Calendar";
import { SearchStateMachineContext } from "@/app/state-machines/searchMachine";
import { useRenderLabel } from "@/app/helpers/labels";
import { CategoryContext } from "@/app/helpers/categoryContext";

export interface FormData {
  dateRange: Range;
}

const SelectedDate = ({
  date,
  handleRangeSelectionDialog,
}: {
  date?: Date;
  handleRangeSelectionDialog: any;
}) => {
  const isClient = useIsClient();

  return (
    <div
      className="flex h-full min-w-[120px] cursor-pointer items-center gap-4 md:min-w-[160px] md:justify-center"
      onClick={handleRangeSelectionDialog}
    >
      <div>{isClient && date && format(date, "MMM d")}</div>
      <CalendarIcon className="h-4" alt="Select Check In Date" />
    </div>
  );
};

export default function SearchBar() {
  const { searchMachineState, sendSearchMachineAction } = useContext(
    SearchStateMachineContext,
  );

  const [flagCalendar, setFlagCalender] = useState(false);

  const handleRangeSelectionDialog = useCallback(() => {
    setFlagCalender(true);
  }, [setFlagCalender]);

  const defaultValues: FormData = useMemo(
    () => ({
      dateRange: {
        startDate: searchMachineState.context.dateFrom,
        endDate: searchMachineState.context.dateTo,
        key: "selection",
      },
    }),
    [],
  );

  const methods = useForm<FormData>({
    mode: "onChange",
    defaultValues,
  });
  // Watch form fields
  const formValueDateFrom = methods.watch("dateRange.startDate");
  const formValueDateTo = methods.watch("dateRange.endDate");

  // Sync form values with state machine context
  useEffect(() => {
    if (
      formValueDateFrom &&
      formValueDateTo &&
      (formValueDateFrom.getTime() !==
        searchMachineState.context.dateFrom.getTime() ||
        formValueDateTo.getTime() !==
          searchMachineState.context.dateFrom.getTime())
    ) {
      sendSearchMachineAction({
        type: "updateSearch",
        data: {
          dateFrom: formValueDateFrom,
          dateTo: formValueDateTo,
        },
      });
    }
  }, [formValueDateFrom, formValueDateTo]);

  // Sync form fields with state machine context when the context changes
  useEffect(() => {
    if (
      formValueDateFrom &&
      formValueDateTo &&
      formValueDateFrom.getTime() !==
        searchMachineState.context.dateFrom.getTime()
    ) {
      methods.reset({
        dateRange: {
          startDate: formValueDateFrom,
          endDate: formValueDateTo,
          key: "selection",
        },
      });
    }
    if (
      formValueDateFrom &&
      formValueDateTo &&
      formValueDateTo.getTime() !== searchMachineState.context.dateTo.getTime()
    ) {
      methods.reset({
        dateRange: {
          startDate: formValueDateFrom,
          endDate: formValueDateTo,
          key: "selection",
        },
      });
    }
  }, [
    formValueDateFrom,
    searchMachineState.context.bookingDate,
    methods.reset,
  ]);
  const categoryPath = useContext(CategoryContext)
  const listingTitle = useRenderLabel("listingTitle", categoryPath)

  return (
    <FormProvider {...methods}>
      <form>
        {/* Search bar */}
        {/* Search bar and Filter button */}
        <h1 className="mb-4 text-center text-xl font-bold">{listingTitle}</h1>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-8 xl:relative">
          {/* Search bar */}
          <div className="flex w-full flex-col gap-4 border-gray-100 md:h-[50px] md:w-auto md:flex-row md:gap-8 md:rounded-[32px] md:border md:border-solid">
            {/* Selected Dates */}
            <div className="flex h-[50px] items-center justify-between gap-8 rounded-[32px] border border-solid border-gray-100 px-6 md:border-none">
              <SelectedDate
                date={formValueDateFrom}
                handleRangeSelectionDialog={handleRangeSelectionDialog}
              />
              <Divider flexItem orientation="vertical" variant="middle" />
              <SelectedDate
                date={formValueDateTo}
                handleRangeSelectionDialog={handleRangeSelectionDialog}
              />
            </div>
          </div>
        </div>

        <Divider className="hidden md:visible" />

        {/* Calendar */}
        <Calendar
          flagCalender={flagCalendar}
          setFlagCalender={setFlagCalender}
        />
      </form>
    </FormProvider>
  );
}
