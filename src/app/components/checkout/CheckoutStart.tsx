import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";

import format from "date-fns/format";
import { useRouter } from "next/navigation";

import { Divider, Typography } from "@mui/material";

import GuestNumberForm from "@/app/components/others/GuestNumberForm";
import PriceDetail from "@/app/components/others/PriceDetail";
import { SButton } from "@/app/components/ui/SButton";

import { Listing } from "@/app/api-helpers";
import { BookingContext } from "@/app/contexts/booking";

interface IProps {
  setFlagCalender: any;
  listing: Listing;
}

export default function CheckoutStart({ setFlagCalender, listing }: IProps) {
  const router = useRouter();
  const { selectedDate, selectedDate1, guest, setGuest, nights } =
    useContext(BookingContext);

  // Initialize the form with react-hook-form
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      guest,
    },
  });

  // Use form data and perform validation
  const onSubmit = methods.handleSubmit((data) => {
    if (data.guest !== 0) {
      router.push("/checkout");
      window.scrollTo(0, 0);
    } else {
      methods.trigger("guest");
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <div className="sticky top-5 flex flex-col gap-8 bg-white px-0 pb-16 pt-0 md:py-16">
          {/* Price Per Night - Dates - Guests */}
          <div className="grid gap-8 md:px-8 md:py-0">
            <Typography component="p" variant="h6">
              <b>{listing.price_per_night} $</b> / Night
            </Typography>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <Typography
                    className="!mb-1 flex flex-1 uppercase"
                    component="div"
                    variant="caption"
                  >
                    Check-in
                  </Typography>
                  <Typography
                    className="cursor-pointer rounded-lg bg-white px-5 py-3 shadow-csm"
                    variant="body1"
                    onClick={() => setFlagCalender(true)}
                  >
                    {format(selectedDate, "MMM d")}
                  </Typography>
                </div>

                <div className="flex flex-col gap-1">
                  <Typography
                    className="!mb-1 flex flex-1 uppercase"
                    component="div"
                    variant="caption"
                  >
                    Check-out
                  </Typography>
                  <Typography
                    className="cursor-pointer rounded-lg bg-white px-5 py-3 shadow-csm"
                    variant="body1"
                    onClick={() => setFlagCalender(true)}
                  >
                    {format(selectedDate1, "MMM d")}
                  </Typography>
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <GuestNumberForm />
              </div>
            </div>
          </div>

          <Divider />

          {/* Price detail part */}
          <div className="md:px-8 md:py-0">
            <PriceDetail listing={listing} />
          </div>

          <Divider />

          {/* Total part */}
          <div className="grid gap-4 md:px-8 md:py-0">
            <div className="grid grid-cols-[1fr_max-content] items-center gap-2">
              <Typography className="!font-black uppercase !text-slate-800">
                Total
              </Typography>

              <Typography className="text-right !font-bold uppercase !text-slate-800">
                {(parseFloat(listing.price_per_night) * nights).toFixed(2)} $
              </Typography>
            </div>

            <SButton fullWidth variant="contained">
              Reserve
            </SButton>

            <Typography
              className="text-center !text-neutral-500"
              variant="caption"
            >
              You won't be charged yet <br />
              The price per night includes VAT and all fees.
            </Typography>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
