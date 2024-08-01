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
  | "bookingFormActivity"
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
      ["bookingFormDate", "Date"],
      ["bookingFormActivity", "Activity"],
      ["bookingFormTitle", "Your Tourist Activity booking:"],
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
      ["bookingFormDate", "Dive Date"],
      ["bookingFormActivity", "Dive Location"],
      ["bookingFormTitle", "Your Dive booking:"],
      ["confirmationTitle", "Dive Booking Confirmed"],
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
      ["bookingFormDate", "Cruise Date"],
      ["bookingFormActivity", "Yacht"],
      ["bookingFormTitle", "Your Yacht Cruise booking:"],
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
