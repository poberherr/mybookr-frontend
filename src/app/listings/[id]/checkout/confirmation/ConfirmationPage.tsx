"use client";

import React, { useContext, useEffect, useState } from "react";

import { useStripe } from "@stripe/react-stripe-js";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  CircularProgress,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import BackButton from "@/app/components/others/BackButton";

import { BookingContext } from "@/app/contexts/booking";
import {formatDateSpan} from "@/app/helpers/date-format";
import { useIsClient } from "@/app/helpers/useIsClient";
import { ExperienceItemFragment } from "@/gql/graphql";

export default function ConfirmationPage({
  listing,
}: {
  listing: ExperienceItemFragment;
}) {
  const router = useRouter();
  const stripe = useStripe();
  const [paymentSuccess, setPaymentSuccess] = useState<Boolean>();

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret",
    );

    if (!clientSecret) {
      alert("Payment could not be identified. Please try to book again.");
      router.push(`${window.location.origin}/listings/${listing?.id}/checkout`);
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) {
        alert("Payment could not be identified. Please try to book again.");
        router.push(
          `${window.location.origin}/listings/${listing?.id}/checkout`,
        );
        return;
      }
      switch (paymentIntent.status) {
        case "succeeded":
          setPaymentSuccess(true);
          break;
        case "processing":
          setPaymentSuccess(true);
          break;
        case "requires_payment_method":
          setPaymentSuccess(false);
          break;
        default:
          setPaymentSuccess(false);
          break;
      }
    });
  }, [stripe]);

  const isClient = useIsClient();

  const { dateFrom, dateTo, guests, email } =
    useContext(BookingContext);
  const mTheme = useTheme();
  const isMobile = useMediaQuery(mTheme.breakpoints.down("md"));

  const [message, setMessage] = useState<string>();
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (paymentSuccess === true || paymentSuccess === undefined) {
      return;
    }
    alert("There was an issue with the payment. Please try to book again.");
    router.push(`${window.location.origin}/listings/${listing?.id}/checkout`);
  }, [paymentSuccess]);

  useEffect(() => {
    async function sendEmail() {
      if (
        !listing ||
        !dateFrom ||
        !dateTo ||
        !email ||
        emailSent ||
        !isClient ||
        !paymentSuccess
      ) {
        return;
      }

      setEmailSent(true);

      try {
        const formData = new FormData();

        formData.append("dateFrom", dateFrom.toISOString());
        formData.append("dateTo", dateTo.toISOString());
        formData.append("guests", String(guests));
        formData.append("email", email);
        formData.append("listingId", listing.id);

        const response = await fetch("/api/confirmation-email", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          setMessage(
            `We have emailed details to ${email}. You will get another email as soon the host confirms your reservation.`,
          );
        } else {
          setMessage(
            "Emailing failed. Sorry. Try reloading the page to send them again. If this message appears again, contact our support and complain! info@mybookr.com",
          );
        }
      } catch (error) {
        console.error("Failed to submit form", error);
        setMessage(
          "Emailing failed. Sorry. Try reloading the page to send them again. If this message appears again, contact our support and complain! info@mybookr.com",
        );
      }
    }

    sendEmail();
  }, [isClient, paymentSuccess]);

  if (!listing || !isClient || !paymentSuccess) {
    return null;
  }

  return (
    <>
      <BackButton pageName="villas" />

      <Divider className="!mt-16 hidden md:block" />

      <div
        className="grid grid-cols-1 grid-rows-[repeat(3,min-content)] gap-x-[10vw] md:grid-cols-2 md:grid-rows-[min-content_1fr]"
        style={{
          gridTemplateAreas: isMobile
            ? '"heading" "detail" "form"'
            : '"heading detail" "form detail"',
        }}
      >
        {/* Heading section */}
        <div
          className="h-min px-4 pb-0 pt-16 md:pl-40 md:pr-0"
          style={{ gridArea: "heading" }}
        >
          <Typography className="!mb-6 !text-2xl !font-extrabold" variant="h2">
            Start preparing for your journey, your reservation is ready! 🏝️
          </Typography>

          <Typography variant="body1">
            {message ? (
              message
            ) : (
              <>
                <CircularProgress size={16} /> Sending confirmation emails...
                This should only take a few seconds!
              </>
            )}
          </Typography>
        </div>

        {/* Detail section */}
        <div
          className="border-0 border-l border-solid border-gray-100 px-4 pb-0 pt-16 md:pb-16 md:pl-8 md:pr-40"
          style={{ gridArea: "detail" }}
        >
          {listing.medias && listing.medias[0].url && (
            <div className="relative aspect-video w-full p-0 md:px-8 md:py-0">
              <Image
                fill={true}
                className="rounded object-cover"
                src={listing.medias[0].url}
                alt="Home for digital remote workers"
              />
            </div>
          )}

          <Typography className="!mb-1 !mt-8 !text-2xl !font-bold" variant="h3">
            {listing.title}
          </Typography>

          <Typography className="!mb-5 !text-gray-500" variant="body2">
            {[
              dateFrom &&
                dateTo &&
                `${formatDateSpan(dateFrom, dateTo)}`,
              `${guests} guests`,
            ]
              .filter(Boolean)
              .map((item, i) => (
                <span
                  className="[&:not(:last-child)]:after:whitespace-pre [&:not(:last-child)]:after:content-['__•__']"
                  key={i}
                >
                  {item}
                </span>
              ))}
          </Typography>

          <Typography className="!mb-10" variant="body2">
            <u>
              {listing.location.addressLineOne}
              {listing.location.addressLineTwo && (
                <>
                  <br />
                  {listing.location.addressLineTwo}
                </>
              )}
              <br />
              {listing.location.postalCode}, {listing.location.city}
              <br />
              {listing.location.country}
            </u>
          </Typography>

          <Typography variant="body2">Reservation Code: @todo</Typography>
        </div>
      </div>
    </>
  );
}
