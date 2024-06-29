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
        variant="h6"
      >
        Cancellation policy
      </Typography>

      <Typography variant="body1">
        Currently, we do not offer online cancellations. Please ensure you are
        certain about your booking. If you need to cancel for any reason, please
        contact us, and we will connect you directly with the Operator/Host.
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
