import React, { useState } from "react";

import { MenuItem, Typography } from "@mui/material";

import LocationIcon from "../../assets/icons/location.svg";

import SMenu from "../ui/SMenu";

export default function LocationMenu({ children }) {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [locationValue, setLocationValue] = useState(null);

  const handleClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleChange = (event) => {
    setLocationValue(event.nativeEvent.target.outerText);
    setMenuAnchorEl(null);
  };

  const buttonEl = () => (
    <div
      className="flex min-w-[120px] cursor-pointer items-center justify-between gap-8 rounded-[32px] border border-solid border-gray-100 px-6 py-3 sm:border-none md:ml-8"
      onClick={handleClick}
    >
      <Typography>{locationValue || "Location"}</Typography>
      <LocationIcon className="h-4" alt="Select Location" />
    </div>
  );

  const menuEl = () => (
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
  );

  return (
    <SMenu
      menuAnchorEl={menuAnchorEl}
      setMenuAnchorEl={setMenuAnchorEl}
      buttonEl={buttonEl()}
      menuEl={menuEl()}
    ></SMenu>
  );
}
