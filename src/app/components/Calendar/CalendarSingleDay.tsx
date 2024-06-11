import React, { useContext, useMemo, useState } from "react";
import { DateRangePicker, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  Controller,
  ControllerRenderProps,
  useFormContext,
} from "react-hook-form";

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
import { CheckoutStartForm } from "@/app/listings/[id]/CheckoutStart";
import { BookingContext } from "@/app/contexts/booking";
import { startOfToday } from "date-fns";

interface CalendarProps {
  flagCalender: boolean;
  setFlagCalender: (flag: boolean) => void;
}

export default function CalendarSingleDay({
  flagCalender,
  setFlagCalender,
}: CalendarProps) {
  const { dateFrom } = useContext(BookingContext);
  const { control, resetField, getValues } =
    useFormContext<CheckoutStartForm>();
  const mTheme = useTheme();
  const isMobile = useMediaQuery(mTheme.breakpoints.down("md"));

  const handleClose = () => {
    setFlagCalender(false);
  };

  const bookingDate = getValues("bookingDate");
  const selectionRange: Range = {
    startDate: new Date(bookingDate || new Date()),
    endDate: new Date(bookingDate || new Date()),
  };
  const handleOnChange = (
    keyDict: RangeKeyDict,
    field: ControllerRenderProps<CheckoutStartForm, "bookingDate">,
  ) => {
    const selected = keyDict.range1;

    if (
      selected.startDate &&
      selected.startDate.getTime() !== new Date(field?.value || new Date())?.getTime()
    ) {
      field.onChange(selected.startDate);
      return;
    }

    if (
      selected.endDate &&
      selected.endDate.getTime() !== selected.startDate?.getTime()
    ) {
      field.onChange(selected.endDate);
      return;
    }
  };

  return (
    <StyledDialog
      showDialog={flagCalender}
      setShowDialog={setFlagCalender}
      title={"What day do you want to book the tour?"}
    >
      <CalendarWrapper>
        <Box className="body">
          <Controller
            control={control}
            name="bookingDate"
            render={({ field }) => (
              <DateRangePicker
                ranges={[selectionRange]}
                showPreview={true}
                moveRangeOnFirstSelection={false}
                months={1}
                direction="horizontal"
                preventSnapRefocus={true}
                calendarFocus="forwards"
                onChange={(keyDict) => handleOnChange(keyDict, field)}
                minDate={startOfToday()}
              />
            )}
          />
        </Box>

        <Box className="buttons">
          <SButton
            variant="outlined"
            customWidth="150px"
            onClick={() => resetField("bookingDate")}
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
