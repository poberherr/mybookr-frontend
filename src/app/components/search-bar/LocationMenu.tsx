import React, { ReactNode, useCallback, useState } from "react";

import { MenuItem } from "@mui/material";

import LocationIcon from "@/assets/icons/location.svg";

import SMenu from "../ui/SMenu";

interface LocationMenuProps {}

const LocationMenu: React.FC<LocationMenuProps> = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);
  const [locationValue, setLocationValue] = useState<string | null>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setMenuAnchorEl(event.currentTarget as HTMLElement);
    },
    [],
  );

  const handleChange = useCallback(
    (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const target = event.target as HTMLElement;
      setLocationValue(target.innerText);
      setMenuAnchorEl(null);
    },
    [],
  );

  const buttonEl = useCallback(
    () => (
      <div
        className="flex min-w-[120px] cursor-pointer items-center justify-between gap-8 rounded-[32px] border border-solid border-gray-100 px-6 py-3 md:ml-8 md:border-none"
        onClick={handleClick}
      >
        <div className="font-medium">{locationValue || "Location"}</div>
        <LocationIcon className="h-4" alt="Select Location" />
      </div>
    ),
    [handleClick, locationValue],
  );

  const menuEl = useCallback(
    () => (
      <>
        <MenuItem onClick={handleChange} value="All">
          All
        </MenuItem>
        <MenuItem onClick={handleChange} value="Barcelona">
          Barcelona
        </MenuItem>
        <MenuItem onClick={handleChange} value="Bahamas">
          Bahamas
        </MenuItem>
        <MenuItem onClick={handleChange} value="Bali">
          Bali
        </MenuItem>
        <MenuItem onClick={handleChange} value="Barbados">
          Barbados
        </MenuItem>
      </>
    ),
    [handleChange],
  );

  return (
    <SMenu
      menuAnchorEl={menuAnchorEl}
      setMenuAnchorEl={setMenuAnchorEl}
      buttonEl={buttonEl()}
      menuEl={menuEl()}
    />
  );
};

export default LocationMenu;
