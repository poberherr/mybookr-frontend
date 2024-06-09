import { useState } from "react";

import { Divider } from "@mui/material";

import { SButton } from "../ui/SButton";
import StyledDialog from "../ui/StyledDialog";
import GuestSection from "./sections/GuestSection";
import PriceSection from "./sections/PriceSection";

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

          <PriceSection />
          <Divider />
        </div>
      </StyledDialog>
    </>
  );
}
