import { useEffect, useRef } from "react";

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import CloseIcon from "@/assets/icons/close.svg";
import LeftArrowIcon from "@/assets/icons/leftArrow.svg";

interface IProps {
  showDialog: boolean;
  setShowDialog: any;
  title: string;
  backButton?: boolean;
  children: any;
}
export default function StyledDialog({
  showDialog,
  setShowDialog,
  title,
  backButton,
  children,
}: IProps) {
  const mTheme = useTheme();
  const isMobile = useMediaQuery(mTheme.breakpoints.down("sm"));

  const handleClose = () => {
    setShowDialog(false);
  };
  const descriptionElementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (showDialog) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [showDialog]);

  return (
    <Dialog
      fullScreen={isMobile}
      open={showDialog}
      onClose={handleClose}
      scroll={"paper"}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      sx={{
        ".MuiDialog-paper": {
          borderRadius: isMobile ? "0px" : "8px",
          width: "100%",
          maxWidth: "680px",
        },
      }}
    >
      <DialogTitle
        id="dialog-title"
        sx={{
          position: "relative",
          fontSize: "16px",
          fontWeight: "600",
          textAlign: "center",

          padding: "16px calc(16px + 30px)",

          color: "#303030",
        }}
      >
        {/* Back button */}
        {/* By defautl, do not show the back button */}
        {backButton && (
          <TitleButton left={"16px"}>
            <LeftArrowIcon width={"11px"} height={"14px"} alt={"back button"} />
          </TitleButton>
        )}

        {/* Title text */}
        {title}

        {/* Close button */}
        <TitleButton onClick={handleClose} right={"16px"}>
          <CloseIcon width={"14px"} height={"14px"} alt={"close"} />
        </TitleButton>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

const TitleButton = styled(Box)`
  display: grid;
  place-items: center;

  position: absolute;
  top: 50%;
  translate: 0 -50%;

  padding: 8px;

  cursor: pointer;
`;
