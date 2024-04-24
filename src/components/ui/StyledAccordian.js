import React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";

import { minusIcon, plusIcon } from "../../assets/icons";

// Props: id, summary, detail
export default function StyledAccordion(props) {
  const handleChange = (panel) => (event, isExpanded) => {
    props.setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        elevation={0}
        disableGutters={true}
        expanded={props.expanded === `panel${props.id}`}
        onChange={handleChange(`panel${props.id}`)}
        sx={{
          padding: "16px 0px",
          "&:before": {
            backgroundColor: "transparent",
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            props.expanded === `panel${props.id}` ? (
              <img src={minusIcon} width="16px" height="auto" alt="" />
            ) : (
              <img src={plusIcon} width="auto" height="" alt="" />
            )
          }
          id={`panel${props.id}bh-content`}
          sx={{
            padding: "0px",
            ".MuiAccordionSummary-content": { paddingRight: "16px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              color: "#303030",
            }}
          >
            {props.summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "Inter", color: "#303030" }}>
            {props.detail || "Sorry! no description provided."}
          </Typography>
        </AccordionDetails>
      </Accordion>
      {!props.lastPanel && <Divider />}
    </>
  );
}
