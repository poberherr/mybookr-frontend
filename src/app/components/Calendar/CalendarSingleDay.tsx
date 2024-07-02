import React, { useContext, useMemo } from "react";
import { DateRangePicker, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  Controller,
  ControllerRenderProps,
  useFormContext,
} from "react-hook-form";

import { Box, Theme, css, styled } from "@mui/material";
import format from "date-fns/format";

import { SButton } from "../ui/SButton";
import StyledDialog from "../ui/StyledDialog";
import { CheckoutStartForm } from "@/app/listings/[id]/CheckoutStart";
import {
  addDays,
  addMinutes,
  addMonths,
  endOfMonth,
  startOfMonth,
  startOfToday,
} from "date-fns";
import { useQuery } from "@urql/next";
import { graphql } from "@/gql";

interface CalendarProps {
  startDate: Date;
  experienceId: string;
  flagCalender: boolean;
  setFlagCalender: (flag: boolean) => void;
}

const AvailableActivitiesPerExperienceQuery = graphql(`
  query AvailableActivitiesPerExperienceQuery(
    $id: ID!
    $dateStart: Date!
    $dateEnd: Date!
  ) {
    experienceAvailableActivities(
      id: $id
      dateStart: $dateStart
      dateEnd: $dateEnd
    ) {
      activities {
        id
        blockedDays
      }
    }
  }
`);

export default function CalendarSingleDay({
  startDate,
  experienceId,
  flagCalender,
  setFlagCalender,
}: CalendarProps) {

  const { dateStart, dateEnd } = useMemo(() => {
    return {
      dateStart: format(startOfMonth(startDate || new Date()), "yyyy-MM-dd"),
      dateEnd: format(addDays(startDate || new Date(), 365), "yyyy-MM-dd"),
    };
  }, [startDate]);

  const [availableActivitiesPerExperience] = useQuery({
    query: AvailableActivitiesPerExperienceQuery,
    variables: {
      id: experienceId,
      dateStart,
      dateEnd,
    },
  });

  const disabledDates = useMemo<Date[]>(() => {
    if (!availableActivitiesPerExperience.data) {
      return [];
    }
    const allDisabledDates = new Set<Date>();
    for (const activity of availableActivitiesPerExperience.data
      .experienceAvailableActivities?.activities ?? []) {
      activity.blockedDays.forEach((blockedDay) =>
        allDisabledDates.add(blockedDay),
      );
    }
    // console.dir({
    //   data: availableActivitiesPerExperience.data,
    //   allDisabledDates: [...allDisabledDates.values()],
    // });
    return [...allDisabledDates.values()].map((v) =>
      addMinutes(new Date(v), new Date().getTimezoneOffset()),
    );
  }, [availableActivitiesPerExperience.data]);

  // console.log(disabledDates);

  const { control, resetField, getValues } =
    useFormContext<CheckoutStartForm>();

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
      selected.startDate.getTime() !==
        new Date(field?.value || new Date())?.getTime()
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
                disabledDates={disabledDates}
                // disabledDay={(d) => disabledDates.includes(d) || d < new Date()}
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
