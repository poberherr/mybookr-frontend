"use client"

import * as React from "react";

export const CategoryContext = React.createContext<string>(process.env.NEXT_PUBLIC_MYBOOKR_CATEGORY_FILTER || "Root.*");