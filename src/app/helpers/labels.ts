import { useContext, useMemo } from "react";
import { CategoryContext } from "./categoryContext";

type labelIds =
  | "listingTitle"
  | "teaserPhysicalItemsAvailable"
  | "detailTitle"
  | "detailChooseActivity"
  | "detailSelectActivity"
  | "detailPriceUnit"
  | "bookingFormDate"
  | "bookingFormDateDeselected"
  | "bookingFormActivity"
  | "bookingFormActivityPlaceholder"
  | "bookingFormActivityErrorMessage"
  | "bookingFormTitle"
  | "confirmationTitle";

type dynamicLabelFormatter = (val: string) => string;
const labels: Map<
  string,
  Map<labelIds, string | dynamicLabelFormatter>
> = new Map([
  [
    "Root",
    new Map<labelIds, string | dynamicLabelFormatter>([
      ["listingTitle", "Book your Tourist Activity:"],
      ["teaserPhysicalItemsAvailable", "available"],
      ["detailTitle", "About the experience"],
      ["detailChooseActivity", "Choose your activity"],
      ["detailSelectActivity", (value: string) => `Select ${value}`],
      ["detailPriceUnit", "per trip"],
      ["bookingFormTitle", "Your Tourist Activity booking:"],
      ["bookingFormDate", "Date"],
      ["bookingFormDateDeselected", "Select your booking date..."],
      ["bookingFormActivity", "Activity"],
      ["bookingFormActivityPlaceholder", "Please select your activity..."],
      [
        "bookingFormActivityErrorMessage",
        "Please select your activity so we can determine your price.",
      ],
      ["confirmationTitle", "Tourist Activity Booking Confirmed"],
    ]),
  ],
  [
    "Root.Diving",
    new Map<labelIds, string | dynamicLabelFormatter>([
      ["listingTitle", "Book your dive:"],
      ["detailTitle", "About the dive"],
      ["detailChooseActivity", "Choose your dive location"],
      ["detailSelectActivity", (value: string) => `Dive at ${value}`],
      ["detailPriceUnit", "per dive trip"],
      ["bookingFormTitle", "Your Dive booking:"],
      ["bookingFormDate", "Dive Date"],
      ["bookingFormDateDeselected", "Select your dive date..."],
      ["bookingFormActivity", "Dive Location"],
      ["bookingFormActivityPlaceholder", "Please select your dive location..."],
      [
        "bookingFormActivityErrorMessage",
        "Please select your dive location so we can determine your price.",
      ],
      ["confirmationTitle", "Dive Booking Confirmed"],
    ]),
  ],
  [
    "Root.Diving.Courses",
    new Map<labelIds, string | dynamicLabelFormatter>([
      ["listingTitle", "Book your dive course:"],
      ["detailTitle", "About the dive course"],
      ["detailPriceUnit", "per dive course"],
      ["bookingFormTitle", "Your Dive Course booking:"],
      ["bookingFormDate", "Dive Course Date"],
      ["bookingFormDateDeselected", "Select your dive course date..."],
      ["bookingFormActivity", "Dive Course Location"],
      ["bookingFormActivityPlaceholder", "Please select your dive course location..."],
      [
        "bookingFormActivityErrorMessage",
        "Please select your dive course location so we can determine your price.",
      ],
      ["confirmationTitle", "Dive Course Booking Confirmed"],
    ]),
  ],
  [
    "Root.Yachts",
    new Map<labelIds, string | dynamicLabelFormatter>([
      ["listingTitle", "Book your Yacht Cruise:"],
      ["teaserPhysicalItemsAvailable", "yachts available"],
      ["detailTitle", "About the cruise"],
      ["detailChooseActivity", "Choose your yacht"],
      ["detailSelectActivity", (value: string) => `Cruise with the ${value}`],
      ["detailPriceUnit", "per cruise"],
      ["bookingFormTitle", "Your Yacht Cruise booking:"],
      ["bookingFormDate", "Cruise Date"],
      ["bookingFormDateDeselected", "Select your cruise date..."],
      ["bookingFormActivity", "Yacht"],
      ["bookingFormActivityPlaceholder", "Please select your yacht..."],
      [
        "bookingFormActivityErrorMessage",
        "Please select your yacht so we can determine your price.",
      ],
      ["confirmationTitle", "Yacht Cruise Booking Confirmed"],
    ]),
  ],
]);

function locateLabel(labelId: labelIds, path: string) {
  const pathSegments = path.split(".");

  if (pathSegments.length === 1 && labels.get(path)?.has(labelId)) {
    return labels.get(path)?.get(labelId);
  }

  for (let i = 0; i <= pathSegments.length; i++) {
    if (i > 0) {
      pathSegments.splice(-1);
    }
    const shorterId = pathSegments.join(".");
    if (labels.get(shorterId)?.has(labelId)) {
      return labels.get(shorterId)?.get(labelId);
    }
  }
  throw new Error(`Unable to render label: ${labelId} for path ${path}`);
}

// Render navtive (without react)
export function renderLabel(labelId: labelIds, path: string, value?: string) {
  const label = locateLabel(labelId, path);

  if (typeof label === "function") {
    return label(value || "");
  }
  return label || "";
}

// Render as hook
export function useRenderLabel(
  labelId: labelIds,
  path?: string,
  value?: string,
) {
  const categoryPath = useContext(CategoryContext);
  return useMemo(
    () => renderLabel(labelId, path || categoryPath, value),
    [labelId, path, value],
  );
}

// Render as component
export function RenderLabel({
  labelId,
  path,
  value,
}: {
  labelId: labelIds;
  path?: string;
  value?: string;
}) {
  const renderedLabel = useRenderLabel(labelId, path, value);
  return renderedLabel;
}
