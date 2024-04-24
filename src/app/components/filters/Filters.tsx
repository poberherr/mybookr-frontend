import { useState } from "react";

import { Divider } from "@mui/material";

import { SButton } from "../ui/SButton";
import StyledDialog from "../ui/StyledDialog";
import AccessibilitySection from "./sections/AccessibilitySection";
import AmenitySection from "./sections/AmenitySection";
import BedroomSection from "./sections/BedroomSection";
import GuestSection from "./sections/GuestSection";
import HealthSafetySection from "./sections/HealthSafetySection";
import PreferenceSection from "./sections/PreferenceSection";
import PriceSection from "./sections/PriceSection";
import RatingSection from "./sections/RatingSection";
import PropertySpace from "./sections/SpaceSection";

export default function Filters() {
  const [filterDialog, setFilterDialog] = useState(false);

  return (
    <>
      <div>
        {/* Quick Filters */}

        {/* All Filters */}
        <SButton variant="outlined" onClick={() => setFilterDialog(true)}>
          Filters
        </SButton>
      </div>

      <StyledDialog
        title="Filters"
        showDialog={filterDialog}
        setShowDialog={setFilterDialog}
      >
        <div className="grid gap-4">
          <GuestSection />
          <Divider />

          <BedroomSection />
          <Divider />

          <PriceSection />
          <Divider />

          <RatingSection />
          <Divider />

          <PreferenceSection />
          <Divider />

          <AmenitySection />
          <Divider />

          <HealthSafetySection />
          <Divider />

          <AccessibilitySection />
          <Divider />

          <PropertySpace />
          <Divider />
        </div>
      </StyledDialog>
    </>
  );
}
