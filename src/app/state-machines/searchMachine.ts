"use client";

import { setup, assign, SnapshotFrom, Actor } from "xstate";
import { startOfToday, startOfTomorrow } from "date-fns";
import { createContext, useContext } from "react";

export const SearchStateMachineContext = createContext<{
  searchMachineState: SearchMachineSnapshot;
  sendSearchMachineAction: Actor<typeof searchMachine>["send"];
}>({
  searchMachineState: {} as SearchMachineSnapshot,
  sendSearchMachineAction: () => {},
});

export const useSearchStateMachine = () => {
  return useContext(SearchStateMachineContext);
};

interface ExperienceActivity {
  [key: string]: string;
}

interface ISearchData {
  dateFrom: Date; // minimum date for booking
  dateTo: Date; // maximum date for booking
}

interface IBookingData {
  activities: ExperienceActivity; // selected activities for each experience
  bookingDate: Date; // actual desired date user wants to book
  name: string;
  email: string;
}

interface ISearchContext extends ISearchData, Partial<IBookingData> {}

interface IUpdateSearch extends ISearchData {}

interface IUpdateBooking extends Partial<Omit<IBookingData, "activities">> {
  activityId?: string;
  experienceId?: string;
}

export type SearchMachineSnapshot = SnapshotFrom<typeof searchMachine>;

export const searchMachine = setup({
  types: {
    context: {} as ISearchContext,
    events: {} as
      | { type: "updateSearch"; data: IUpdateSearch }
      | { type: "updateBooking"; data: IUpdateBooking },
  },
}).createMachine({
  id: "search",
  initial: "Init",
  context: {
    dateFrom: startOfToday(),
    dateTo: startOfTomorrow(),
  },
  states: {
    Init: {
      on: {
        updateSearch: [
          {
            guard: ({ event: { data } }) => !!data.dateFrom && !!data.dateTo,
            target: "Init",
            actions: [
              assign(({ event: { data } }) => {
                console.log("===> updateSearch", { data });
                return {
                  ...data,
                };
              }),
            ],
          },
        ],
        updateBooking: [
          {
            target: "Init",
            actions: [
              assign(({ context, event: { data } }) => {
                console.log("===> updateBooking", { data });
                if (data.activityId !== undefined) {
                  if (!data.experienceId) {
                    throw new Error(
                      "we need an experience to set the activity",
                    );
                  }
                  if (
                    context.activities &&
                    data.activityId === null &&
                    context.activities[data.experienceId]
                  ) {
                    delete context.activities[data.experienceId];
                  }

                  if (data.activityId && data.experienceId) {
                    if (!context.activities) {
                      context.activities = {};
                    }
                    context.activities = {
                      ...context.activities,
                      [data.experienceId]: data.activityId,
                    };
                  }
                }

                if (data.bookingDate) {
                  context.bookingDate = data.bookingDate;
                }

                if (data.email) {
                  context.email = data.email;
                }

                if (data.name) {
                  context.name = data.name;
                }
                return context;
              }),
            ],
          },
        ],
      },
    },
  },
  // Ensure dates stay dates, even when we restore them from local storage
  // @todo check which save guard for restoration we actually need (there was another one)
  // always: {
  //   guard: ({ context }) =>
  //     (!!context.dateFrom && !(context.dateFrom instanceof Date)) ||
  //     (!!context.dateTo && !(context.dateTo instanceof Date)) ||
  //     (!!context.bookingDate && !(context.bookingDate instanceof Date)),
  //   actions: [
  //     assign(({ context, self }) => ({
  //       dateFrom: new Date(context.dateFrom),
  //       dateTo: new Date(context.dateTo),
  //       bookingDate: new Date(context.bookingDate || startOfToday()),
  //     })),
  //   ],
  //   target: ".Init",
  // },
});
