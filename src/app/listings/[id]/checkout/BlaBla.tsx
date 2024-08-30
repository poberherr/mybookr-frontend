import React from "react";
import Link from "next/link";

import { Divider, Typography } from "@mui/material";

import CalendarIcon from "@/assets/icons/calendar.svg";

const BlaBla = () => (
  <>
    <Divider />

    {/* Cancellation policy */}
    <div className="px-4 py-0 md:pl-40 md:pr-16">
      <Typography
        className="!mb-4 p-0 !font-extrabold md:!text-2xl"
        variant="h2"
      >
        Cancellation policy
      </Typography>

      <Typography
        className="!mb-2 !mt-8 !font-extrabold md:!text-lg"
        variant="h3"
      >
        Cancellation by the Client:
      </Typography>

      <Typography variant="body1">
        <strong>More than 48 hours before the scheduled dive:</strong> Full
        refund, minus any processing fees.
      </Typography>
      <Typography variant="body1">
        <strong>Less than 48 hours before the scheduled dive:</strong> No
        refund.
      </Typography>

      <Typography
        className="!mb-2 !mt-8 !font-extrabold md:!text-lg"
        variant="h3"
      >
        Cancellation Due to Weather or Safety Concerns (Force Majeure):
      </Typography>

      <Typography variant="body1">
        If the dive is canceled by the school due to unsafe weather conditions
        or other safety concerns, the client will be offered a full refund or
        the option to reschedule without any penalty.
      </Typography>

      <Typography
        className="!mb-2 !mt-8 !font-extrabold md:!text-lg"
        variant="h3"
      >
        No-Show Policy:
      </Typography>

      <Typography variant="body1">
        If the client fails to appear on the scheduled date without prior
        notice, no refund will be given.
      </Typography>

      <Typography
        className="!mb-2 !mt-8 !font-extrabold md:!text-lg"
        variant="h3"
      >
        Changes to Booking:
      </Typography>

      <Typography variant="body1">
        Changes to the booking (such as rescheduling) can be made up to 48 hours
        before the scheduled dive without penalty. After this period, additional
        fees may apply.
      </Typography>

      <Typography
        className="!mb-2 !mt-8 !font-extrabold md:!text-lg"
        variant="h3"
      >
        Medical Cancellations:
      </Typography>

      <Typography variant="body1">
        If a client cannot participate due to a medical condition, a full refund
        may be provided upon submission of a valid medical certificate. Requests
        must be made at least 48 hours before the scheduled dive.
      </Typography>

      <Typography
        className="!mb-2 !mt-8 !font-extrabold md:!text-lg"
        variant="h3"
      >
        Group Bookings:
      </Typography>

      <Typography variant="body1">
        For group bookings, different terms may apply. Please consult with the
        dive school directly for specific policies regarding group
        cancellations.
      </Typography>
    </div>

    <Divider />

    {/* Calendar */}
    {/* <div className="flex items-center gap-8 px-4 py-0 md:pl-40 md:pr-16">
      <CalendarIcon className="h-8 w-8" alt={"calendar icon"} />

      <Typography variant="subtitle1" component="p">
        Your booking is only confirmed when the host accepts your request
        (within 24 hours). You will not be charged until then.
      </Typography>
    </div>

    <Divider /> */}

    {/* Agreement */}
    <div className="px-4 py-0 md:pl-40 md:pr-16">
      <div>
        <Typography className="!text-gray-400" variant="caption" component="p">
          By clicking the button below, I agree to the{" "}
          <span className="text-black">operators house rules</span>,{" "}
          <Link
            className="text-black underline"
            href="/terms-of-service#refund-and-dispute-policy"
            target="_blank"
          >
            mybookr.io's Refunds and Dispute Policy
          </Link>
          , and confirm that mybookr can charge my payment method and that I am
          responsible for any damages.
        </Typography>

        <Typography
          className="!mt-4 !text-gray-400"
          component="p"
          variant="caption"
        >
          I also agree to the updated{" "}
          <Link
            className="text-black underline"
            href="/terms-of-service"
            target="_blank"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            className="text-black underline"
            href="/terms-of-service#terms-of-use"
            target="_blank"
          >
            Terms of Use
          </Link>{" "}
          for{" "}
          <Link
            className="text-black underline"
            href="/terms-of-service#security-capabilities-and-policy-for-transmission-of-payment-card-details"
            target="_blank"
          >
            Payment Services
          </Link>{" "}
          and agree to the payment services{" "}
          <Link
            className="text-black underline"
            href="/privacy-policy#payment-services"
            target="_blank"
          >
            Privacy Policy.
          </Link>
        </Typography>
      </div>
    </div>
  </>
);

export default BlaBla;
