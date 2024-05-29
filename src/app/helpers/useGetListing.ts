import { useMemo } from "react";
import { Listing } from '../api-helpers';

import data from '../data.json' assert { type: 'json' }

const listings = data as Listing[];

export const useGetListing = (id: number) => {
  return useMemo(() => listings.find((listing => listing.id === id)), [id])
};
