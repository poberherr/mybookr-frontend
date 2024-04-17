import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Divider,
  Menu,
  MenuItem,
  css,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { closeIcon } from "../../assets/icons";

export default function StyledMenu(props) {
  const mTheme = useTheme();
  const isMobile = useMediaQuery(mTheme.breakpoints.down("md"));
  const navigate = useNavigate();

  const menuOpen = Boolean(props.menuAnchorEl);

  const handleMenuClick = (event) => {
    props.setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    props.setMenuAnchorEl(null);
  };

  return (
    <>
      <Box
        id="basic-button"
        aria-controls={menuOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? "true" : undefined}
        onClick={handleMenuClick}
        sx={{ marginLeft: "56px" }}
      >
        {props.children}
      </Box>
      {isMobile ? (
        <Menu
          disableAutoFocusItem
          elevation={0}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          anchorEl={props.menuAnchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
          marginThreshold={0}
          PaperProps={{
            style: {
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              left: 0,
              right: 0,
              display: "grid",
              placeItems: "center",
            },
          }}
          sx={{
            ".MuiMenu-list": { width: "100%" },
          }}
        >
          <SMenuItem onClick={props.handleLoginDialogOpen}>Register</SMenuItem>
          <SMenuItem onClick={props.handleLoginDialogOpen}>Login</SMenuItem>
          <Divider light sx={{ m: "32px 0px" }} />

          <SMenuItem
            onClick={() => {
              navigate("/submit-villa");
              handleMenuClose();
            }}
          >
            Submit villa
          </SMenuItem>
          <SMenuItem onClick={handleMenuClose}>About</SMenuItem>
          <SMenuItem
            onClick={() => {
              props.setMetamaskDialog(true);
              handleMenuClose();
            }}
          >
            {props.connected ? "Disconnect wallet" : "Connect wallet"}
          </SMenuItem>
          <Divider sx={{ m: "32px 0px" }} />

          <SMenuItem onClick={handleMenuClose}>Help</SMenuItem>

          {/* Close button */}
          <Box
            onClick={handleMenuClose}
            style={{
              position: "fixed",
              top: "32px",
              right: "32px",
              padding: "8px",
              cursor: "pointer",
            }}
          >
            <img src={closeIcon} width="14px" height="auto" alt="" />
          </Box>
        </Menu>
      ) : (
        <Menu
          disableAutoFocusItem
          elevation={0}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          anchorEl={props.menuAnchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              width: 196,
            },
          }}
        >
          <SMenuItem onClick={props.handleLoginDialogOpen}>Register</SMenuItem>
          <SMenuItem onClick={props.handleLoginDialogOpen}>Login</SMenuItem>
          <Divider />
          <SMenuItem onClick={handleMenuClose}>Help</SMenuItem>
        </Menu>
      )}
    </>
  );
}

const SMenuItem = styled(MenuItem)(
  ({ theme }) =>
    css`
      font-family: AvenueMono;
      font-size: 14px;
      justify-content: center;
    `,
);
