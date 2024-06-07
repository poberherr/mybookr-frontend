import React, { useMemo } from "react";
import { DateRangePicker, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Controller, useFormContext } from "react-hook-form";

import differenceInDays from "date-fns/differenceInDays";

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

  const dateRange = getValues("dateRange");

  const nights = useMemo(() => {
    const { startDate, endDate } = dateRange;
    if (!startDate || !endDate) {
      return 0;
    }
    return differenceInDays(endDate, startDate);
  }, [dateRange]);

  return (
    <StyledDialog
      showDialog={flagCalender}
      setShowDialog={setFlagCalender}
      title={"Select dates on which you want to book one tour"}
    >
      <CalendarWrapper>
        <Typography variant="h5" className="heading !text-sm md:!text-xl">
          <span>{nights + 1} days</span>
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
