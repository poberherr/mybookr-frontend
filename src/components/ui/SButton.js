import { Button, css, styled } from "@mui/material";

// Add 'fullWidth' if you want the button to take the hole width of its parent even when if it's not on mobile version
export const SButton = styled(Button)(
  ({ theme, customWidth, secondaryFont, uppercase, fullWidth }) =>
    css`
      font-family: ${secondaryFont ? "AvenueMono" : "Montserrat"}, sans-serif;
      font-weight: ${secondaryFont ? 500 : 600};
      text-transform: ${uppercase ? "uppercase" : "capitalize"};

      width: 100%;
      border-radius: 2em;
      box-shadow: none;

      transition: all 0.5s ease-in-out;

      &.MuiButton-outlined {
        border: 1px solid ${theme.palette.grey[200]};
      }

      &.MuiButton-sizeSmall {
        height: 44px;

        font-size: 14px;
        line-height: 14px;
        letter-spacing: 1px;

        padding: 14px 28px;
      }

      &.MuiButton-sizeMedium {
        height: 50px;

        font-size: 16px;
        line-height: 16px;
        letter-spacing: 2px;

        padding: 16px 32px;
      }

      &.MuiButton-sizeLarge {
        height: 56px;

        font-size: 18px;
        line-height: 18px;
        letter-spacing: 4px;

        padding: 18px 36px;
      }

      & .MuiButton-endIcon {
        margin-right: 0px;
        margin-left: 12px;
      }

      & .MuiButton-startIcon {
        margin-left: 0px;
        margin-right: 12px;
      }

      /* Media Query for Tablet and Desktop */
      ${theme.breakpoints.up("sm")} {
        width: ${fullWidth ? "100%" : customWidth || "fit-content"};
      }
    `,
);
