const CheckoutPage = () => null

export default CheckoutPage

// import { useForm } from "react-hook-form";

// import { Divider, Typography } from "@mui/material";

// import Bonus from "../../components/Others/Bonus";
// import GuestNumberForm from "../../components/Others/GuestNumberForm";
// import PriceDetail from "../../components/Others/PriceDetail";
// import { SButton } from "../../components/UI/SButton";

// import { starIcon } from "../../assets/icons";

// import { Listing } from "../../interfaces";

// interface IProps {
//   price: any;
//   eth_price: any;
//   setFlagCalender: any;
//   selectedDate: any;
//   selectedDate1: any;
//   guest: any;
//   setGuest: any;
//   connected: any;
//   booknfts: any;
//   setMetamaskDialog: any;
//   nights: any;
//   navigate: any;
//   vouchersCounter: any;
//   setVouchersCounter: any;
//   pricesFormData: any;
//   setPricesFormData: any;
//   listing: Listing;
//   listingRelated?: {
//     rating: number;
//     reviewCount: number;
//   };
// }

// export default function CheckoutAndPay({
//   price,
//   eth_price,
//   setFlagCalender,
//   selectedDate,
//   selectedDate1,
//   guest,
//   setGuest,
//   connected,
//   booknfts,
//   setMetamaskDialog,
//   nights,
//   navigate,
//   vouchersCounter,
//   setVouchersCounter,
//   pricesFormData,
//   setPricesFormData,
//   listing,
//   listingRelated,
// }: IProps) {
//   const {
//     control,
//     watch,
//     trigger,
//     formState: { errors },
//   } = useForm({
//     mode: "onChange",
//     defaultValues: {
//       guest: "",
//     },
//   });

//   return (
//     <div className="sticky top-5 flex flex-col gap-8 bg-white px-0 pb-16 pt-0 md:py-16">
//       <div className="grid grid-cols-[1fr_2fr] gap-4 md:hidden">
//         <img
//           className="h-full w-full rounded-lg"
//           src={listing.images[0]}
//           alt=""
//         />
//         <div className="flex flex-col gap-2">
//           <Typography
//             className="!font-medium !text-neutral-500"
//             variant="body2"
//           >
//             {listing.meta.location.city}, {listing.meta.location.country}
//           </Typography>

//           <Typography className="truncate-2-lines !font-medium">
//             {listing.meta.title}
//           </Typography>

//           <div className="mt-auto flex items-center gap-2">
//             <img className="w-3" src={starIcon} alt={""} />

//             <Typography variant="body2">{listingRelated?.rating}</Typography>

//             <Typography className="!text-neutral-500" variant="body2">
//               ({listingRelated?.reviewCount})
//             </Typography>
//           </div>
//         </div>
//       </div>

//       <Divider className="md:hidden" />

//       {/* Price Per Night - Dates - Guests */}
//       <div className="grid gap-8 md:px-8 md:py-0">
//         <Typography component="p" variant="h6">
//           <b>{listing.price_per_night} $</b> / Night
//         </Typography>

//         <div className="flex flex-col gap-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div className="flex flex-col gap-1">
//               <Typography
//                 className="!mb-1 flex flex-1 uppercase"
//                 component="div"
//                 variant="caption"
//               >
//                 Check-in
//               </Typography>

//               <Typography
//                 className="cursor-pointer rounded-lg bg-white px-5 py-3 shadow-csm"
//                 variant="body1"
//                 onClick={() => setFlagCalender(true)}
//               >
//                 {selectedDate.toLocaleDateString("en-US")}
//               </Typography>
//             </div>

//             <div className="flex flex-col gap-1">
//               <Typography
//                 className="!mb-1 flex flex-1 uppercase"
//                 component="div"
//                 variant="caption"
//               >
//                 Check-out
//               </Typography>

//               <Typography
//                 className="cursor-pointer rounded-lg bg-white px-5 py-3 shadow-csm"
//                 variant="body1"
//                 onClick={() => setFlagCalender(true)}
//               >
//                 {selectedDate1.toLocaleDateString("en-US")}
//               </Typography>
//             </div>
//           </div>

//           <div className="flex flex-1 flex-col">
//             <GuestNumberForm
//               control={control}
//               watch={watch}
//               errors={errors}
//               setGuest={setGuest}
//             />
//           </div>
//         </div>
//       </div>

//       <Divider />

//       {/* Bonus section */}
//       <div className="md:px-8 md:py-0">
//         <Bonus
//           connected={connected}
//           booknfts={booknfts}
//           pricesFormData={pricesFormData}
//           setPricesFormData={setPricesFormData}
//           setMetamaskDialog={setMetamaskDialog}
//           vouchersCounter={vouchersCounter}
//           setVouchersCounter={setVouchersCounter}
//         />
//       </div>

//       <Divider />

//       {/* Price detail part */}
//       <div className="md:px-8 md:py-0">
//         <PriceDetail
//           price={listing.price_per_night}
//           nights={nights}
//           eth_price={eth_price}
//           vouchersCounter={vouchersCounter}
//           pricesFormData={pricesFormData}
//         />
//       </div>

//       <Divider />

//       {/* Total part */}
//       <div className="grid gap-4 md:px-8 md:py-0">
//         <div className="grid grid-cols-[1fr_max-content] items-center gap-2">
//           <Typography className="!font-black uppercase !text-slate-800">
//             Total
//           </Typography>

//           <Typography className="text-right !font-bold uppercase !text-slate-800">
//             {(price * nights * eth_price).toFixed(2)} $
//           </Typography>
//         </div>

//         <SButton
//           fullWidth
//           variant="contained"
//           onClick={() => {
//             if (guest !== "") {
//               navigate("/shoppingcart");
//               window.scrollTo(0, 0);
//             } else {
//               trigger("guest");
//             }
//           }}
//         >
//           Reserve
//         </SButton>

//         <Typography className="text-center !text-neutral-500" variant="caption">
//           You won't be charged yet <br />
//           The price per night includes VAT and all fees.
//         </Typography>
//       </div>
//     </div>
//   );
// }
