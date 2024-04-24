import React from "react";
import ShowMoreText from "react-show-more-text";

import { Typography, useMediaQuery, useTheme } from "@mui/material";

interface IProps {
  id: number;
  name: string;
  date: string;
  message: string;
}

export default function ReviewCard({ id, name, date, message }: IProps) {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"));

  return (
    // Review card
    <div id={`review_${id}`}>
      {/* Header */}
      <div className="flex items-center gap-6 py-2">
        {/* Picture: Author profile picture */}
        {/* min-width is needed, otherwise width will be varied based on zoom level or viewport width */}
        <div className="h-12 min-w-[48px] rounded-full bg-gray-100" />

        {/* Title: Review author and publish date */}
        <div className="grid h-12">
          {/* Author */}
          <Typography variant="subtitle1">{name}</Typography>

          {/* Publish date */}
          <Typography variant="caption">
            {new Date(date).toLocaleDateString(undefined ,{
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </Typography>
        </div>
      </div>

      {/* Body */}
      <div className="py-2 font-[Inter] [&_.anchor]:block [&_.anchor]:text-sm">
        <ShowMoreText
          lines={isMobile ? 5 : 3}
          more="Show more"
          less="Show less"
          anchorClass="anchor"
        >
          {message}
        </ShowMoreText>
      </div>
    </div>
  );
}
