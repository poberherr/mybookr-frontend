import React from "react";

import { Menu, useMediaQuery, useTheme } from "@mui/material";

import CloseIcon from "@/assets/icons/close.svg";

interface SMenuProps {
  fullScreenMobile?: boolean;
  menuAnchorEl: HTMLElement | null;
  setMenuAnchorEl: (el: HTMLElement | null) => void;
  buttonEl: JSX.Element;
  menuEl: JSX.Element;
}

const SMenu: React.FC<SMenuProps> = ({
  fullScreenMobile = false,
  menuAnchorEl,
  setMenuAnchorEl,
  buttonEl,
  menuEl,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuOpen = Boolean(menuAnchorEl);

  const handleMenuClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setMenuAnchorEl(event.currentTarget as HTMLElement);
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
      <div onClick={handleMenuClick}>{buttonEl}</div>

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
        {menuEl}
        {fullScreenMobile && isMobile && (
          <div
            className="fixed right-8 top-8 cursor-pointer p-2 md:hidden"
            onClick={handleMenuClose}
          >
            <CloseIcon className="w-4" alt="Close" />
          </div>
        )}
      </Menu>
    </>
  );
};

export default SMenu;
