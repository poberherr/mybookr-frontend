import React from "react";

import { Drawer, Typography, styled } from "@mui/material";

import CloseIcon from "../../assets/icons/close.svg";

import StyledCheckbox from "../form/StyledCheckbox";
import { SButton } from "../ui/SButton";

export default function FilterBox({
  control,
  drawerMenu,
  toggleDrawer,
  filterData,
  handleFilterData,
  features,
  deleteFilteredItem,
}) {
  const clearAllFilters = () => {
    ["bedrooms", "beds", "bathrooms"].map((item) =>
      deleteFilteredItem(item, "roomsAndBeds"),
    );
    deleteFilteredItem("all", "features");
  };

  return (
    <>
      <Drawer anchor="right" open={drawerMenu} onClose={toggleDrawer(false)}>
        {/* Container */}
        <div
          className="relative h-screen w-screen max-w-[960px] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]"
          role="presentation"
        >
          {/* Header: Title and Close button */}
          <div className="sticky top-0 z-10 grid w-full place-items-center border-b border-solid !border-gray-100 bg-white py-4 px-12">
            {/* Title */}
            <Typography className="!text-base !font-semibold" variant="h2">
              Filter
            </Typography>

            {/* Close button */}
            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer p-2"
              onClick={toggleDrawer(false)}
            >
              <CloseIcon className="w-3.5" alt={"close button"} />
            </div>
          </div>

          {/* Body: Filter section */}
          <div className="grid gap-16 py-12 px-6">
            {/* Rooms and beds */}
            <div>
              {/* Title */}
              <Typography
                className="!mb-8 !text-base !font-semibold"
                variant="h6"
              >
                Rooms and beds
              </Typography>

              {/* Show all categories */}
              <div className="grid gap-6">
                {[
                  ["bedrooms", ["Any", "1", "2", "3", "4+"]],
                  ["beds", ["Any", "1", "2", "3", "4", "5", "6+"]],
                  ["bathrooms", ["Any", "1", "2", "3", "4", "5+"]],
                ].map(([category, items]) => (
                  <div key={items}>
                    {/* Category */}
                    <Typography className="!mb-4" variant="body1">
                      {category}
                    </Typography>

                    {/* Items */}
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4">
                      {items.map((value) => (
                        <ItemNumber
                          fullWidth
                          variant="contained"
                          key={value}
                          value={value}
                          data={filterData[category]}
                          onClick={() =>
                            handleFilterData(
                              category,
                              filterData[category] === value ? "Any" : value,
                            )
                          }
                        >
                          {value}
                        </ItemNumber>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              {/* Title */}
              <Typography
                className="!mb-8 !text-base !font-semibold"
                variant="h6"
              >
                Features
              </Typography>

              {/* Show all features */}
              <div className="grid grid-cols-[repeat(auto-fill,minmax(225px,1fr))] gap-2">
                {Object.keys(features).map((value) => (
                  <StyledCheckbox
                    key={value}
                    defaultChecked={filterData.features.includes(value)}
                    control={control}
                    id={value}
                    name={value}
                    label={features[value]}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Footer: Show and Clear buttons */}
          <div className="sticky bottom-0 z-10 flex flex-col gap-4 border-t border-solid !border-gray-100 bg-white py-4 px-6 sm:flex-row sm:justify-between">
            <SButton variant="outlined" onClick={clearAllFilters}>
              Clear all
            </SButton>
            <SButton variant="contained" onClick={toggleDrawer(false)}>
              Show 1 villa
            </SButton>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export const ItemNumber = styled(SButton)`
  background-color: ${(props) =>
    props.value === props.data ? "#303030" : "#FFFFFF"};
  color: ${(props) => (props.value === props.data ? "#FFFFFF" : "#303030")};
  border: 1px solid
    ${(props) => (props.value === props.data ? "#303030" : "#F2F2F2")};
  :hover {
    border-color: transparent;
    color: #ffffff;
  }
`;
