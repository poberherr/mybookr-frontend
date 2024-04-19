import React from "react";

import { Menu, useMediaQuery, useTheme } from "@mui/material";

import CloseIcon from "@/assets/icons/close.svg";

// You need to provide buttonEl and menuEl as props for this component to work properly
// Please create buttonEl and menuEl as anonymous functions
export default function SMenu({
  fullScreenMobile,
  menuAnchorEl,
  setMenuAnchorEl,
  buttonEl,
  menuEl,
}) {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"));

  const menuOpen = Boolean(menuAnchorEl);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const paperStyle =
    isMobile && fullScreenMobile
      ? {
          style: {
            display: "grid",
            placeItems: "center",
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
            top: 0,
            right: 0,
            left: 0,
          },
        }
      : {
          style: {
            marginTop: "8px",
            minWidth: "196px",
            boxShadow: "0 3px 10px 3px rgba(0,0,0,0.05)",
          },
        };

  return (
    <>
      {/* Button: Menu toggle */}
      <div onClick={handleMenuClick}>{buttonEl}</div>

      {/* Menu */}
      <Menu
        disableAutoFocusItem
        elevation={0}
        anchorEl={menuAnchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        marginThreshold={0}
        PaperProps={paperStyle}
        sx={{
          ul: { padding: isMobile ? "16px 32px" : "8px 0px" },
          li: { fontSize: "14px", justifyContent: "center" },
          ".MuiMenu-list": { width: "100%" },
        }}
      >
        [menuEl, fullScreenMobile && ({/* Close button */}
        {/* Only for mobile when menu is fullscreen */}
        <div
          className="fixed top-8 right-8 cursor-pointer p-2 md:hidden"
          onClick={handleMenuClose}
        >
          <CloseIcon className="w-4" alt="Close" />
        </div>
        )]
      </Menu>
    </>
  );
}
