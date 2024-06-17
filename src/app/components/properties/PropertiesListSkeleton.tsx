import PropertyItemSkeleton from "./PropertyItemSkeleton";

export const PropertiesListSkeleton = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 grid-rows-[repeat(auto-fill,1fr)] gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(8)
        .fill(1)
        .map((value, index) => (
          <PropertyItemSkeleton key={index} />
        ))}
    </div>
  );
};
