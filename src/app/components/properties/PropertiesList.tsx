import { ExperienceItemFragment } from "@/gql/graphql";
import PropertyItem from "./PropertyItem";
import PropertyItemSkeleton from "./PropertyItemSkeleton";

interface IProps {
  listings: ExperienceItemFragment[];
  loading: boolean;
}

export default function PropertiesList({ listings, loading }: IProps) {
  return (
    <div className="grid grid-flow-row grid-cols-1 grid-rows-[repeat(auto-fill,1fr)] gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {loading ? (
        <>
          {Array(16)
            .fill(1)
            .map((value, index) => (
              <PropertyItemSkeleton key={index} />
            ))}
        </>
      ) : (
        <>
          {listings?.map((listing) => (
            <PropertyItem key={listing.id} property={listing} />
          ))}
        </>
      )}
    </div>
  );
}
