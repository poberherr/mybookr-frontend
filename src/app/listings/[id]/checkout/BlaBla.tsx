import React from "react";

import { Divider, Typography } from "@mui/material";

import CalendarIcon from "@/assets/icons/calendar.svg";

const BlaBla = () => (
  <>
    <Divider />

    {/* Cancellation policy */}
    <div className="px-4 py-0 md:pl-40 md:pr-16">
      <Typography
        className="!mb-4 p-0 !font-extrabold md:!text-2xl"
        variant="h6"
      >
        Cancellation policy
      </Typography>

      <Typography variant="body1">
        Free cancellation within 48 hours. If you cancel before the 5th Sept.
        you'll receive a prorated refund.
      </Typography>

      <Typography className="!mt-1 cursor-pointer underline" variant="body2">
        Learn more
      </Typography>
    </div>

    <Divider />

    {/* Calendar */}
    <div className="flex items-center gap-8 px-4 py-0 md:pl-40 md:pr-16">
      <CalendarIcon className="h-8 w-8" alt={"calendar icon"} />

      <Typography variant="subtitle1" component="p">
        Your booking is only confirmed when the host accepts your request
        (within 24 hours). You will not be charged until then.
      </Typography>
    </div>

    <Divider />

    {/* Agreement */}
    <div className="px-4 py-0 md:pl-40 md:pr-16">
      <div>
        <Typography className="!text-gray-400" variant="caption" component="p">
          By clicking the button below, I agree to the{" "}
          <Typography className="text-black underline" variant="caption">
            host's house rules, mybookr Changes and Refunds Policies
          </Typography>{" "}
          and confirm that mybookr agrees to my payment method can charge and to
          whom I am responsible for damages. Total amount is to be paid when the
          host/hostess confirms my booking request.
        </Typography>

        <Typography
          className="mt-2 !text-gray-400"
          component="p"
          variant="caption"
        >
          The terms of payment between you and mybookr apply.
        </Typography>

        <Typography
          className="mt-2 !text-gray-400"
          component="p"
          variant="caption"
        >
          I also agree to the updated{" "}
          <Typography className="text-black underline" variant="caption">
            Terms of Service
          </Typography>{" "}
          and{" "}
          <Typography className="text-black underline" variant="caption">
            Terms of Use
          </Typography>{" "}
          for{" "}
          <Typography className="text-black underline" variant="caption">
            payment services
          </Typography>{" "}
          and agree to the{" "}
          <Typography className="text-black underline" variant="caption">
            payment services
          </Typography>{" "}
          privacy policy.
        </Typography>
      </div>
    </div>
  </>
);

export default BlaBla;
