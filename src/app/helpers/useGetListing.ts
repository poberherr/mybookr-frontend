import { useMemo } from "react";
import { Listing } from '../api-helpers';

import data from '../data.json' assert { type: 'json' }

const listings = data as Listing[];

export const getListing = (id: number) => listings.find((listing => listing.id === id))

export const useGetListing = (id: number) => {
  return useMemo(() => getListing(id), [id])
};
