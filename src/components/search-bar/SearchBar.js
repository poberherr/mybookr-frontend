import React, { useEffect, useMemo, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useForm } from "react-hook-form";



import { useRouter } from "next/router";



import moment from "moment";



import { Divider, Typography, useMediaQuery } from "@mui/material";



import CalendarIcon from "../../assets/icons/calendar.svg";
import CloseIcon from "../../assets/icons/close.svg";
import FilterIcon from "../../assets/icons/filter.svg";



import Calendar from "../Calendar/Calendar";
import { SButton } from "../ui/SButton";
import FilterBox from "./FilterBox";
import LocationMenu from "./LocationMenu";


const features = {
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

export default function SearchBar() {
  const today = useMemo(() => moment().toDate(), []);
  const tomorrow = useMemo(() => moment().add(1, "days").toDate(), []);
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedDate1, setSelectedDate1] = useState(tomorrow);
  const [nights, setNights] = useState(0);
  const [date, setDate] = useState([
    {
      startDate: today,
      endDate: tomorrow,
      key: "selection",
    },
  ]);

  const showFiltered = false;

  const [flagCalendar, setFlagCalender] = useState(false);
  const [drawerMenu, setDrawerMenu] = useState(false);
  const [filterData, setFilterData] = useState({
    bedrooms: "Any",
    beds: "Any",
    bathrooms: "Any",
    features: [],
  });
  const mediaQueryDown700 = useMediaQuery("(max-width: 700px)");
  const router = useRouter();

  const handleRangeSelectionDialog = () => {
    setFlagCalender(true);
  };

  const handleSearchButton = () => {
    router.push("/search");
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerMenu(open);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleFilterData = (key, value = null) =>
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
    });

  const { control, watch, setValue, reset } = useForm({
    mode: "onChange",
    defaultValues: {
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
    },
  });

  const deleteFilteredItem = (key, type) => {
    if (type === "features") {
      handleFilterData(
        "features",
        filterData.features.filter((item) => item !== key),
      );
      if (key === "all") reset();
      else {
        setValue(key, false, { shouldValidate: true });
      }
    } else if (type === "roomsAndBeds") handleFilterData(key, "Any");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterFeatures = (features) =>
    Object.keys(features).reduce((p, c) => {
      if (features[c]) p[c] = features[c];
      return p;
    }, {});

  // noinspection JSCheckFunctionSignatures
  useEffect(() => {
    const subscription = watch((data) =>
      handleFilterData(
        "features",
        Object.keys(filterFeatures(data)).map((key) => key),
      ),
    );
    return () => subscription.unsubscribe;
  }, [filterData, filterFeatures, handleFilterData, watch]);

  return (
    <>
      {/* Search bar */}
      <div className="mb-12">
        {mediaQueryDown700 ? (
          <>
            <div className="grid gap-3 py-12">
              {/* Location Menu */}
              <LocationMenu />

              {/* Selected Dates */}
              <div className="flex items-center justify-between rounded-[32px] border border-solid border-gray-100 px-6 py-3">
                {[selectedDate, selectedDate1].map((date, index) => (
                  <>
                    <div
                      className="flex min-w-[120px] cursor-pointer items-center justify-between gap-8"
                      onClick={handleRangeSelectionDialog}
                    >
                      <Typography variant="body1">
                        {moment(date).format("MMM D")}
                      </Typography>

                      <CalendarIcon
                        className="h-4"
                        alt="Select Check In Date"
                      />
                    </div>

                    {index === 0 && <Divider orientation="vertical" flexItem />}
                  </>
                ))}
              </div>

              {/* Filter and Search Buttons */}
              <div className="flex justify-center gap-6">
                {/* Filter Button */}
                <SButton
                  secondaryFont
                  variant="outlined"
                  endIcon={<FilterIcon alt="Filter" />}
                  onClick={toggleDrawer(true)}
                >
                  Filter
                </SButton>

                {/* Search Button */}
                <SButton variant="contained" onClick={handleSearchButton}>
                  Search
                </SButton>
              </div>
            </div>

            <Divider />
          </>
        ) : (
          <>
            {/* Search bar and Filter button */}
            <div className="flex flex-col items-center justify-center gap-4 py-12 lg:flex-row lg:gap-8 xl:relative">
              {/* Search bar */}
              <div className="flex h-[50px] gap-8 rounded-[32px] border border-solid border-gray-100">
                {/* Location menu */}
                <LocationMenu />
                <Divider flexItem orientation="vertical" variant="middle" />

                {/* Selected Dates */}
                <div className="flex items-center justify-between gap-8">
                  {[selectedDate, selectedDate1].map((date, index) => (
                    <>
                      <div
                        className="flex h-full min-w-[120px] cursor-pointer items-center justify-center gap-8"
                        onClick={handleRangeSelectionDialog}
                      >
                        <Typography variant="body1">
                          {moment(date).format("MMM D")}
                        </Typography>

                        <CalendarIcon
                          className="h-4"
                          alt="Select Check In Date"
                        />
                      </div>

                      {index === 0 && (
                        <Divider
                          flexItem
                          orientation="vertical"
                          variant="middle"
                        />
                      )}
                    </>
                  ))}
                </div>

                {/* Search button */}
                <SButton
                  fullWidth
                  variant="contained"
                  onClick={handleSearchButton}
                >
                  Search
                </SButton>
              </div>

              {/* Filter button */}
              <SButton
                className="xl:!absolute xl:right-0"
                secondaryFont
                variant="outlined"
                endIcon={<FilterIcon className="h-4" alt="Filter" />}
                onClick={toggleDrawer(true)}
              >
                Filter
              </SButton>
            </div>

            <Divider />
          </>
        )}

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
          today={today}
          tomorrow={tomorrow}
        />
      )}
    </>
  );
}

// Generates each filter item
const FilteredItem = ({ deleteFilteredItem, title, name, type }) => (
  <SButton
    secondaryFont
    variant="outlined"
    size="small"
    endIcon={
      <CloseIcon
        className="h-4"
        alt={"close button"}
        onClick={() => deleteFilteredItem(name, type)}
      />
    }
  >
    {title}
  </SButton>
);