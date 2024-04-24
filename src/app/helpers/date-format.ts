export default function formatDateSpan(dt: Date, dt1: Date): string {
  const formatterSameMonthYear = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  });
  const formatterDifferentMonth = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Check if both dates are in the same year and month
  if (
    dt.getFullYear() === dt1.getFullYear() &&
    dt.getMonth() === dt1.getMonth()
  ) {
    // Format: Sep 28-30, 2022
    return `${formatterSameMonthYear.format(dt)}-${dt1.getDate()}, ${dt1.getFullYear()}`;
  }

  // Check if both dates are in the same year but different months
  else if (
    dt.getFullYear() === dt1.getFullYear() &&
    dt.getMonth() !== dt1.getMonth()
  ) {
    // Format: Sep 28 - Oct 5, 2022
    return `${formatterSameMonthYear.format(dt)} - ${formatterDifferentMonth.format(dt1)}`;
  }

  // If all above checks fail, dates are from different years
  else {
    // Format: Sep 28, 2022 - Oct 5, 2023
    return `${formatterDifferentMonth.format(dt)} - ${formatterDifferentMonth.format(dt1)}`;
  }
}
