"use client";

import React, { useCallback, useContext, useMemo, useState } from "react";
import { Range } from "react-date-range";
import { FormProvider, useForm } from "react-hook-form";

import format from "date-fns/format";

import { Divider } from "@mui/material";

import CalendarIcon from "@/assets/icons/calendar.svg";
import CloseIcon from "@/assets/icons/close.svg";
import FilterIcon from "@/assets/icons/filter.svg";

import {
  BookingContext,
  useWatchDateRange,
  useWatchGuest,
} from "@/app/contexts/booking";
import { useIsClient } from "@/app/helpers/useIsClient";

import Calendar from "../Calendar/Calendar";
import { SButton } from "../ui/SButton";
import FilterBox from "./FilterBox";
import LocationMenu from "./LocationMenu";

export interface Features {
  wifi: boolean;
  bbq_grill: boolean;
  washer: boolean;
  breakfast: boolean;
  dryer: boolean;
  hot_tube: boolean;
  kitchen: boolean;
  free_parking_on_premises: boolean;
  dedicated_workplace: boolean;
  gym: boolean;
  heating: boolean;
  pets_allowed: boolean;
  air_conditioning: boolean;
  kids_friendly: boolean;
  iron: boolean;
  crib: boolean;
  tv: boolean;
  smoke_alarm: boolean;
  smoking_allowed: boolean;
  carbon_monoxide_alarm: boolean;
}

export const featureLabels: { [key in keyof Features]: string } = {
  wifi: "Wifi",
  bbq_grill: "BBQ grill",
  washer: "Washer",
  breakfast: "Breakfast",
  dryer: "Dryer",
  hot_tube: "Hot tube",
  kitchen: "Kitchen",
  free_parking_on_premises: "Free parking on premises",
  dedicated_workplace: "Dedicated workplace",
  gym: "Gym",
  heating: "Heating",
  pets_allowed: "Pets allowed",
  air_conditioning: "Air conditioning",
  kids_friendly: "Kids friendly",
  iron: "Iron",
  crib: "Crib",
  tv: "TV",
  smoke_alarm: "Smoke alarm",
  smoking_allowed: "Smoking allowed",
  carbon_monoxide_alarm: "Carbon monoxide alarm",
};

export const defaultValues: { [key in keyof Features]: boolean } = {
  wifi: false,
  bbq_grill: false,
  washer: false,
  breakfast: false,
  dryer: false,
  hot_tube: false,
  kitchen: false,
  free_parking_on_premises: false,
  dedicated_workplace: false,
  gym: false,
  heating: false,
  pets_allowed: false,
  air_conditioning: false,
  kids_friendly: false,
  iron: false,
  crib: false,
  tv: false,
  smoke_alarm: false,
  smoking_allowed: false,
  carbon_monoxide_alarm: false,
};

export interface FormData {
  dateRange: Range;
  rooms: { bedrooms: string; beds: string; bathrooms: string };
  features: (keyof Features)[];
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
      className="flex min-w-[120px] cursor-pointer items-center gap-4 h-full md:justify-center md:min-w-[160px]"
      onClick={handleRangeSelectionDialog}
    >
      <div>{isClient && date && format(date, "MMM d")}</div>
      <CalendarIcon className="h-4" alt="Select Check In Date" />
    </div>
  );
};

export default function SearchBar() {
  const { selectedDate, selectedDate1, setDates } = useContext(BookingContext);

  const showFiltered = true;

  const [flagCalendar, setFlagCalender] = useState(false);
  const [drawerMenu, setDrawerMenu] = useState(false);
  // const mediaQueryDown700 = useMediaQuery("(max-width: 700px)");
  // const router = useRouter();

  const handleRangeSelectionDialog = useCallback(() => {
    setFlagCalender(true);
  }, [setFlagCalender]);

  const toggleDrawer = useCallback(
    (open: boolean) => {
      setDrawerMenu(open);
    },
    [setDrawerMenu],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const handleFilterData = useCallback(
  //   (key: string, value: string | null = null) =>
  //     setFilterData((prevFilterData) => {
  //       if (key !== "clear")
  //         return {
  //           ...prevFilterData,
  //           [key]: value,
  //         };
  //       else
  //         return {
  //           bedrooms: "Any",
  //           beds: "Any",
  //           bathrooms: "Any",
  //           features: [],
  //         };
  //     }),
  //   [],
  // );

  const defaultValues: FormData = useMemo(
    () => ({
      dateRange: {
        startDate: selectedDate,
        endDate: selectedDate1,
        key: "selection",
      },
      rooms: {
        bedrooms: "Any",
        beds: "Any",
        bathrooms: "Any",
      },
      features: [],
    }),
    [],
  );

  const formMethods = useForm<FormData>({
    mode: "onChange",
    defaultValues,
  });

  const deleteFilteredItem = useCallback((key: any, type: string) => {
    // if (type === "features") {
    //   handleFilterData(
    //     "features",
    //     filterData.features.find((item) => item !== key),
    //   );
    //   if (key === "all") reset();
    //   else {
    //     setValue(key, false, { shouldValidate: true });
    //   }
    // } else if (type === "roomsAndBeds") handleFilterData(key, "Any");
  }, []);

  useWatchDateRange(formMethods.control, "dateRange");

  const onSubmit = formMethods.handleSubmit((data: FormData) => {
    const searchParams = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => searchParams.append(key, item));
      } else {
        searchParams.append(key, value);
      }
    });

    // if (data.dateRange.startDate && data.dateRange.endDate) {
    //   setDates(data.dateRange.startDate, data.dateRange.endDate);

    //   // router.push(`/?${searchParams.toString()}`);
    //   console.dir({ data });
    //   // alert("@todo");
    //   return;
    // }

    throw new Error("Select start and end date");
  });

  const values = formMethods.getValues();

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit}>
        {/* Search bar */}
        {/* Search bar and Filter button */}
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-8 xl:relative">
          {/* Search bar */}
          <div className="flex w-full flex-col gap-4 border-gray-100 md:h-[50px] md:w-auto md:flex-row md:gap-8 md:rounded-[32px] md:border md:border-solid">
            {/* Selected Dates */}
            <div className="flex h-[50px] items-center justify-between gap-8 rounded-[32px] border border-solid border-gray-100 px-6 md:border-none">
              <SelectedDate
                date={values.dateRange.startDate}
                handleRangeSelectionDialog={handleRangeSelectionDialog}
              />
              <Divider flexItem orientation="vertical" variant="middle" />
              <SelectedDate
                date={values.dateRange.endDate}
                handleRangeSelectionDialog={handleRangeSelectionDialog}
              />
            </div>
          </div>
          {/* Search button */}
          {/* <div className="flex w-full gap-8 md:w-auto">
            <SButton fullWidth variant="contained" className="md:max-w-48">
              Search
            </SButton>
          </div> */}
        </div>

        <Divider className="hidden md:visible" />

        {/* Selected items from filters */}
        {/* Shows up at below the search bar */}
        {showFiltered &&
          (values.rooms.bedrooms !== "Any" ||
            values.rooms.beds !== "Any" ||
            values.rooms.bathrooms !== "Any" ||
            values.features.length > 0) && (
            <>
              <div className="mx-auto flex max-w-6xl flex-wrap gap-4 py-12">
                {values.rooms.bedrooms && values.rooms.bedrooms !== "Any" && (
                  <FilteredItem
                    deleteFilteredItem={deleteFilteredItem}
                    title={`${values.rooms.bedrooms || 3} bedroom(s)`}
                    name="bedrooms"
                    type="roomsAndBeds"
                  />
                )}
                {values.rooms.beds && values.rooms.beds !== "Any" && (
                  <FilteredItem
                    deleteFilteredItem={deleteFilteredItem}
                    title={`${values.rooms.beds || 3} bed(s)`}
                    name="beds"
                    type="roomsAndBeds"
                  />
                )}
                {values.rooms.bathrooms && values.rooms.bathrooms !== "Any" && (
                  <FilteredItem
                    deleteFilteredItem={deleteFilteredItem}
                    title={`${values.rooms.bathrooms || 3} bathroom(s)`}
                    name="bathrooms"
                    type="roomsAndBeds"
                  />
                )}
                {values.features.map((item, key) => (
                  <FilteredItem
                    key={key}
                    deleteFilteredItem={deleteFilteredItem}
                    title={featureLabels[item]}
                    name={item}
                    type="features"
                  />
                ))}
              </div>

              <Divider />
            </>
          )}
        {/* Filter drawer */}
        <FilterBox
          control={formMethods.control}
          values={values}
          toggleDrawer={toggleDrawer}
          drawerMenu={drawerMenu}
          deleteFilteredItem={deleteFilteredItem}
        />
        {/* Calendar */}
        <Calendar
          flagCalender={flagCalendar}
          setFlagCalender={setFlagCalender}
        />
      </form>
    </FormProvider>
  );
}

// Generates each filter item
const FilteredItem = ({
  deleteFilteredItem,
  title,
  name,
  type,
}: {
  deleteFilteredItem: (
    key: keyof typeof defaultValues | "all",
    type: string,
  ) => void;
  title: string;
  name: string | keyof typeof defaultValues;
  type: string;
}) => (
  <SButton
    variant="outlined"
    size="small"
    endIcon={
      <CloseIcon
        className="h-4"
        alt={"close button"}
        onClick={() =>
          deleteFilteredItem(name as keyof typeof defaultValues, type)
        }
      />
    }
  >
    {title}
  </SButton>
);
