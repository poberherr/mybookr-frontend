import React from "react";
import { DateRangePicker } from "react-date-range";

import {
  Box,
  Typography,
  css,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { SButton } from "../ui/SButton";
import StyledDialog from "../ui/StyledDialog";

// One day in milliseconds
const ONE_DAY = 86400000;

export default function Calendar({
  flagCalender,
  setFlagCalender,
  setSelectedDate,
  setSelectedDate1,
  nights,
  setNights,
  date,
  setDate,
  today,
  tomorrow,
}) {
  const mTheme = useTheme();
  const isMobile = useMediaQuery(mTheme.breakpoints.down("md"));

  const handleDate = (date) => {
    if (date) {
      const startDate = date[0].startDate;
      const endDate = date[0].endDate;

      setSelectedDate(startDate);
      setSelectedDate1(endDate);

      const numberOfNights = parseInt((endDate - startDate) / ONE_DAY);
      setNights(numberOfNights);
    } else {
      setSelectedDate(today);
      setSelectedDate1(tomorrow);
      setNights(1);
    }
  };

  const clearDate = () => {
    setDate([
      {
        startDate: today,
        endDate: tomorrow,
        key: "selection",
      },
    ]);
    setSelectedDate(today);
    setSelectedDate1(tomorrow);
    setNights(1);
  };

  const handleClose = () => {
    setFlagCalender(false);
  };

  return (
    <StyledDialog
      showDialog={flagCalender}
      setShowDialog={setFlagCalender}
      title={"Select reservation dates"}
    >
      <CalendarWrapper>
        {/* Heading */}
        <Typography variant="h5" className="heading">
          <span>{nights} nights</span> {"\u00a0"}in Pantai Lima
        </Typography>

        {/* Body / Calendar */}
        <Box className="body">
          <DateRangePicker
            onChange={(item) => {
              setDate([item.selection]);
              handleDate([item.selection]);
            }}
            minDate={today}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={isMobile ? 1 : 2}
            ranges={date}
            direction="horizontal"
            preventSnapRefocus={true}
            calendarFocus="forwards"
          />
        </Box>

        {/* Buttons */}
        <Box className="buttons">
          <SButton variant="outlined" customWidth="150px" onClick={clearDate}>
            Clear
          </SButton>
          <SButton
            variant="contained"
            customWidth="150px"
            onClick={handleClose}
          >
            Confirm
          </SButton>
        </Box>
      </CalendarWrapper>
    </StyledDialog>
  );
}

const CalendarWrapper = styled(Box)(
  ({ theme }) =>
    css`
      .heading {
        text-align: center;
        font-weight: 800;

        & span {
          color: ${theme.palette.grey[400]};
        }
      }

      .body {
        display: flex;
        justify-content: center;
      }

      .buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 16px;

        /* Media Query for Desktop*/
        ${theme.breakpoints.up("md")} {
          flex-direction: row;
        }
      }
    `,
);
