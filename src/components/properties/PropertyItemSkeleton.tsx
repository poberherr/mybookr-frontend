import React from "react";

import { Skeleton } from "@mui/material";

export default function PropertyItemSkeleton() {
  return (
    <div className="rounded-lg bg-white shadow-csm">
      <Skeleton
        className="!h-52 w-full rounded-tl-lg rounded-tr-lg"
        variant="rectangular"
      />
      <div className="flex flex-col p-4 text-xs">
        <div className="mb-6 flex flex-row justify-between">
          <Skeleton className="w-3/5 text-base" variant="text" />
          <div className="flex w-full flex-row items-center justify-end font-medium">
            <Skeleton className="w-1/5 text-base" variant="text" />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-full font-semibold">
            <div className="flex w-full flex-row items-center justify-start font-medium">
              <Skeleton className="w-1/3 text-base" variant="text" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Skeleton className="h-5 w-5 first:mr-4" variant="circular" />
            <Skeleton className="h-5 w-5 first:mr-4" variant="circular" />
          </div>
        </div>
      </div>
    </div>
  );
}
