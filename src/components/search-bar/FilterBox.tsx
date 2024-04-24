import React from "react";



import { Drawer, styled } from "@mui/material";



import CloseIcon from "../../assets/icons/close.svg";



import StyledCheckbox from "../form/StyledCheckbox";
import { SButton } from "../ui/SButton";
import { defaultValues } from "./SearchBar";


// Interface for the FilterData structure
interface FilterData {
  bedrooms: string;
  beds: string;
  bathrooms: string;
  features: string[];
}

// Interface for the Features structure
interface Features {
  [key: string]: string;
}

// Props for the FilterBox component
interface FilterBoxProps {
  control: any; // Specify the correct type based on the library or context used
  drawerMenu: boolean;
  toggleDrawer: (open: boolean) => void;
  filterData: FilterData;
  handleFilterData: (category: string, value: string) => void;
  features: Features;
  deleteFilteredItem: (item: keyof typeof defaultValues | "all", context: string) => void;
}

const roomOptions: [string, string[]][] = [
  ["bedrooms", ["Any", "1", "2", "3", "4+"]],
  ["beds", ["Any", "1", "2", "3", "4", "5", "6+"]],
  ["bathrooms", ["Any", "1", "2", "3", "4", "5+"]],
];

export default function FilterBox({
  control,
  drawerMenu,
  toggleDrawer,
  filterData,
  handleFilterData,
  features,
  deleteFilteredItem,
}: FilterBoxProps) {
  const clearAllFilters = () => {
    ["bedrooms", "beds", "bathrooms"].forEach((item) =>
      deleteFilteredItem(item as keyof typeof defaultValues, "roomsAndBeds"),
    );
    deleteFilteredItem("all", "features");
  };

  const roomOptionFilters = React.useMemo<React.ReactNode[]>(() => {
    return roomOptions.map(([category, items]) => (
      <div key={category}>
        <div className="!mb-4">{category}</div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4">
          {items.map((value) => (
            <ItemNumber
              fullWidth
              variant="contained"
              key={value}
              value={value}
              data={Array.from(filterData[category as keyof FilterData])[0]}
              onClick={() =>
                handleFilterData(
                  category,
                  filterData[category as keyof FilterData] === value
                    ? "Any"
                    : value,
                )
              }
            >
              {value}
            </ItemNumber>
          ))}
        </div>
      </div>
    ));
  }, [roomOptions]);

  return (
    <>
      <Drawer anchor="right" open={drawerMenu} onClose={() => toggleDrawer(false)}>
        <div
          className="relative h-screen w-screen max-w-[960px] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]"
          role="presentation"
        >
          <div className="sticky top-0 z-10 grid w-full place-items-center border-b border-solid !border-gray-100 bg-white py-4 px-12">
            <div className="!text-base !font-semibold">Filter</div>
            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer p-2"
              onClick={() => toggleDrawer(false)}
            >
              <CloseIcon className="w-3.5" alt="Close button" />
            </div>
          </div>
          <div className="grid gap-16 py-12 px-6">
            <div>
              <div className="!mb-8 !text-base !font-semibold">
                Rooms and beds
              </div>
              <div className="grid gap-6">{roomOptionFilters}</div>
            </div>
            <div>
              <div className="!mb-8 !text-base !font-semibold">Features</div>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(225px,1fr))] gap-2">
                {Object.keys(features).map((value) => (
                  <StyledCheckbox
                    key={value}
                    defaultChecked={filterData.features.includes(value)}
                    control={control}
                    name={value}
                    label={features[value]}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 z-10 flex flex-col gap-4 border-t border-solid !border-gray-100 bg-white py-4 px-6 sm:flex-row sm:justify-between">
            <SButton variant="outlined" onClick={clearAllFilters}>
              Clear all
            </SButton>
            <SButton variant="contained" onClick={() => toggleDrawer(false)}>
              Show 1 villa
            </SButton>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export const ItemNumber = styled(SButton)<{ value: string; data: string }>(
  (props) => ({
    backgroundColor: props.value === props.data ? "#303030" : "#FFFFFF",
    color: props.value === props.data ? "#FFFFFF" : "#303030",
    border: `1px solid ${props.value === props.data ? "#303030" : "#F2F2F2"}`,
    "&:hover": {
      borderColor: "transparent",
      color: "#ffffff",
    },
  }),
);