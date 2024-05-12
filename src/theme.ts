"use client";

import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

import { inter, montserrat } from "@/styles/fonts";

const primary = "#303030";

export const theme = createTheme({
  palette: {
    mode: "light",
    divider: grey[200],
    primary: {
      main: primary,
      light: "#595959",
      dark: "#070707",
    },
  },

  // shadows: [...shadows, "0 3px 10px 3px rgba(0,0,0,0.05)"],

  typography: {
    allVariants: {
      color: primary,
    },
    h1: {
      ...montserrat.style,
    },
    h2: {
      ...montserrat.style,
    },
    h3: {
      ...montserrat.style,
    },
    h4: {
      ...montserrat.style,
    },
    h5: {
      ...montserrat.style,
    },
    h6: {
      ...montserrat.style,
    },
    subtitle1: {
      ...inter.style,
    },
    subtitle2: {
      ...inter.style,
    },
    body1: {
      ...inter.style,
    },
    body2: {
      ...inter.style,
    },
    button: {
      ...inter.style,
    },
    caption: {
      ...inter.style,
    },
    overline: {
      ...inter.style,
    },
    // CMontserrat: {
    //   fontFamily: "Montserrat",
    //   fontSize: 14,
    //   color: primary,
    // },
  },

  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
  },
});

// MUI Default Theme
// https://mui.com/material-ui/customization/default-theme/
