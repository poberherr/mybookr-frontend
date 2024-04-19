"use client";

import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import shadows from "@mui/material/styles/shadows";

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
      fontFamily: "Montserrat",
    },
    h2: {
      fontFamily: "Montserrat",
    },
    h3: {
      fontFamily: "Montserrat",
    },
    h4: {
      fontFamily: "Montserrat",
    },
    h5: {
      fontFamily: "Montserrat",
    },
    h6: {
      fontFamily: "Montserrat",
    },
    subtitle1: {
      fontFamily: "AvenueMono",
    },
    subtitle2: {
      fontFamily: "AvenueMono",
    },
    body1: {
      fontFamily: "AvenueMono",
    },
    body2: {
      fontFamily: "AvenueMono",
    },
    button: {
      fontFamily: "AvenueMono",
    },
    caption: {
      fontFamily: "AvenueMono",
    },
    overline: {
      fontFamily: "AvenueMono",
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
