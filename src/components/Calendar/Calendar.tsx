import React, { useMemo } from "react";
import { DateRangePicker, Range } from "react-date-range";
import { Controller, useFormContext } from "react-hook-form";

import {
  Box,
  Theme,
  Typography,
  css,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { FormData } from "../search-bar/SearchBar";
import { SButton } from "../ui/SButton";
import StyledDialog from "../ui/StyledDialog";

interface CalendarProps {
  flagCalender: boolean;
  setFlagCalender: (flag: boolean) => void;
}

export default function Calendar({
  flagCalender,
  setFlagCalender,
}: CalendarProps) {
  const { control, resetField, getValues } = useFormContext<FormData>();
  const mTheme = useTheme();
  const isMobile = useMediaQuery(mTheme.breakpoints.down("md"));

  const handleClose = () => {
    setFlagCalender(false);
  };

  const values = getValues();

  const nights = useMemo(() => {
    const { startDate, endDate } = values.dateRange;
    if (!startDate || !endDate) {
      return 0;
    }

    const millisecondsPerDay = 24 * 60 * 60 * 1000; // number of milliseconds in a day
    const diffInMilliseconds = endDate.getTime() - startDate.getTime();
    const diffInDays = Math.floor(diffInMilliseconds / millisecondsPerDay);

    return diffInDays;
  }, [values]);

  return (
    <StyledDialog
      showDialog={flagCalender}
      setShowDialog={setFlagCalender}
      title={"Select reservation dates"}
    >
      <CalendarWrapper>
        <Typography variant="h5" className="heading">
          <span>{nights} nights</span> {"\u00a0"}in Pantai Lima
        </Typography>

        <Box className="body">
          <Controller
            control={control}
            name="dateRange"
            render={({ field }) => (
              <DateRangePicker
                onChange={(rangeDict) => field.onChange(rangeDict["selection"])}
                ranges={[field.value]}
                minDate={new Date()}
                showPreview={true}
                moveRangeOnFirstSelection={false}
                months={isMobile ? 1 : 2}
                direction="horizontal"
                preventSnapRefocus={true}
                calendarFocus="forwards"
              />
            )}
          />
        </Box>

        <Box className="buttons">
          <SButton
            variant="outlined"
            customWidth="150px"
            onClick={() => resetField("dateRange")}
          >
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
  ({ theme }: { theme: Theme }) => css`
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

      ${theme.breakpoints.up("md")} {
        flex-direction: row;
      }
    }
  `,
);
