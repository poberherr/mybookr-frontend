"use client";

import React, {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useForm } from "react-hook-form";

import { useRouter } from "next/router";

import moment from "moment";

import { Divider, Typography, useMediaQuery } from "@mui/material";

import CalendarIcon from "../../assets/icons/calendar.svg";
import CloseIcon from "../../assets/icons/close.svg";
import FilterIcon from "../../assets/icons/filter.svg";

import { BookingContext } from "@/contexts/booking";

import Calendar from "../Calendar/Calendar";
import { SButton } from "../ui/SButton";
import FilterBox from "./FilterBox";
import LocationMenu from "./LocationMenu";

const features: { [index: string]: string } = {
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

export const defaultValues = {
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

const SelectedDate = ({
  date,
  handleRangeSelectionDialog,
}: {
  date: Date;
  handleRangeSelectionDialog: any;
}) => (
  <div
    className="flex min-w-[120px] cursor-pointer items-center justify-between gap-8 md:justify-center md:h-full"
    onClick={handleRangeSelectionDialog}
  >
    <div>{moment(date).format("MMM D")}</div>
    <CalendarIcon className="h-4" alt="Select Check In Date" />
  </div>
);

export default function SearchBar() {
  const { selectedDate, setSelectedDate, selectedDate1, setSelectedDate1 } =
    useContext(BookingContext);
  const [nights, setNights] = useState(0);
  const [date, setDate] = useState([
    {
      startDate: selectedDate,
      endDate: selectedDate1,
      key: "selection",
    },
  ]);

  const showFiltered = false;

  const [flagCalendar, setFlagCalender] = useState(false);
  const [drawerMenu, setDrawerMenu] = useState(false);
  const [filterData, setFilterData] = useState<{
    bedrooms: string;
    beds: string;
    bathrooms: string;
    features: string[];
  }>({
    bedrooms: "Any",
    beds: "Any",
    bathrooms: "Any",
    features: [],
  });
  // const mediaQueryDown700 = useMediaQuery("(max-width: 700px)");
  const router = useRouter();

  const handleRangeSelectionDialog = useCallback(() => {
    setFlagCalender(true);
  }, [setFlagCalender]);

  const handleSearchButton = useCallback(() => {
    router.push("/search");
  }, [router]);

  const toggleDrawer = useCallback(
    (open: boolean) => {
      setDrawerMenu(open);
    },
    [setDrawerMenu],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleFilterData = useCallback(
    (key: string, value: string | null = null) =>
      setFilterData((prevFilterData) => {
        if (key !== "clear")
          return {
            ...prevFilterData,
            [key]: value,
          };
        else
          return {
            bedrooms: "Any",
            beds: "Any",
            bathrooms: "Any",
            features: [],
          };
      }),
    [],
  );

  const { control, watch, setValue, reset } = useForm({
    mode: "onChange",
  });

  const deleteFilteredItem = useCallback(
    (key: keyof typeof defaultValues | "all", type: string) => {
      if (type === "features") {
        handleFilterData(
          "features",
          filterData.features.find((item) => item !== key),
        );
        if (key === "all") reset();
        else {
          setValue(key, false, { shouldValidate: true });
        }
      } else if (type === "roomsAndBeds") handleFilterData(key, "Any");
    },
    [],
  );

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const filterFeatures = (features: string[]) =>
  //   Object.keys(features).reduce((p, c) => {
  //     if (features[c]) p[c] = features[c];
  //     return p;
  //   }, {});

  // // noinspection JSCheckFunctionSignatures
  // useEffect(() => {
  //   const subscription = watch((data) =>
  //     handleFilterData(
  //       "features",
  //       Object.keys(filterFeatures(data)).map((key) => key),
  //     ),
  //   );
  //   return () => subscription.unsubscribe;
  // }, [filterData, filterFeatures, handleFilterData, watch]);

  return (
    <>
      {/* Search bar */}
      <div className="mb-12">
        {/* Search bar and Filter button */}
        <div className="flex flex-col items-center justify-center gap-4 py-12 lg:flex-row lg:gap-8 xl:relative">
          {/* Search bar */}
          <div className="flex h-[50px] gap-8 rounded-[32px] border border-solid border-gray-100">
            {/* Location menu */}
            <LocationMenu />
            <Divider flexItem orientation="vertical" variant="middle" />

            {/* Selected Dates */}
            <div className="flex items-center justify-between gap-8">
              <SelectedDate date={selectedDate} handleRangeSelectionDialog={handleRangeSelectionDialog}/>
              <Divider flexItem orientation="vertical" variant="middle" />
              <SelectedDate date={selectedDate1} handleRangeSelectionDialog={handleRangeSelectionDialog}/>
            </div>

            {/* Search button */}
            <SButton fullWidth variant="contained" onClick={handleSearchButton}>
              Search
            </SButton>
          </div>

          {/* Filter button */}
          <SButton
            className="xl:!absolute xl:right-0 flex items-center"
            variant="outlined"
            endIcon={<FilterIcon className="h-4" alt="Filter" />}
            onClick={() => toggleDrawer(true)}
          >
            Filter
          </SButton>
        </div>

        <Divider />

        {/* Selected items from filters */}
        {/* Shows up at below the search bar */}
        {showFiltered &&
          (filterData.bedrooms !== "Any" ||
            filterData.beds !== "Any" ||
            filterData.bathrooms !== "Any" ||
            filterData.features.length > 0) && (
            <>
              <div className="mx-auto flex max-w-6xl flex-wrap gap-4 py-12">
                {filterData.bedrooms && filterData.bedrooms !== "Any" && (
                  <FilteredItem
                    deleteFilteredItem={deleteFilteredItem}
                    title={`${filterData.bedrooms || 3} bedroom(s)`}
                    name="bedrooms"
                    type="roomsAndBeds"
                  />
                )}
                {filterData.beds && filterData.beds !== "Any" && (
                  <FilteredItem
                    deleteFilteredItem={deleteFilteredItem}
                    title={`${filterData.beds || 3} bed(s)`}
                    name="beds"
                    type="roomsAndBeds"
                  />
                )}
                {filterData.bathrooms && filterData.bathrooms !== "Any" && (
                  <FilteredItem
                    deleteFilteredItem={deleteFilteredItem}
                    title={`${filterData.bathrooms || 3} bathroom(s)`}
                    name="bathrooms"
                    type="roomsAndBeds"
                  />
                )}
                {filterData.features.map((item, key) => (
                  <FilteredItem
                    key={key}
                    deleteFilteredItem={deleteFilteredItem}
                    title={features[item]}
                    name={item}
                    type="features"
                  />
                ))}
              </div>

              <Divider />
            </>
          )}
      </div>

      {/* Filter drawer */}
      <FilterBox
        control={control}
        handleFilterData={handleFilterData}
        filterData={filterData}
        toggleDrawer={toggleDrawer}
        drawerMenu={drawerMenu}
        features={features}
        deleteFilteredItem={deleteFilteredItem}
      />

      {/* Calendar */}
      {flagCalendar && (
        <Calendar
          flagCalender={flagCalendar}
          setFlagCalender={setFlagCalender}
          setSelectedDate={setSelectedDate}
          setSelectedDate1={setSelectedDate1}
          date={date}
          setDate={setDate}
          nights={nights}
          setNights={setNights}
          today={new Date()}
          tomorrow={new Date()}
        />
      )}
    </>
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
