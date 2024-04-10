import React from "react";
import { useCoreListingsList } from "../api/hooks/useCoreListingsList"; // Adjust the import path
import { Listing } from "../api/types/Listing"; // Ensure this path is correct

export function ListingsComponent() {
  const { data, error, isLoading } = useCoreListingsList<Listing[]>();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Listings</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {data?.map((listing) => (
          <div
            key={listing.id}
            style={{
              flex: "0 1 300px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              padding: "20px",
            }}
          >
            <h2>Host ID: {listing.host}</h2>
            <h3>${listing.price_per_night} per night</h3>
            {listing.images && listing.images[0] && (
              <img
                src={listing.images[0]}
                alt="Listing"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
            )}
            <p>
              {listing.free_cancellation
                ? "Free cancellation"
                : "No free cancellation"}
            </p>
            <h4>Amenities:</h4>
            <ul>
              {Object.entries(listing.amenities).map(([key, value]) => (
                <li key={key}>{`${key}: ${value}`}</li>
              ))}
            </ul>
            <h4>House Rules:</h4>
            <ul>
              {Object.entries(listing.house_rules).map(([key, value]) => (
                <li key={key}>{`${key}: ${value}`}</li>
              ))}
            </ul>
            <h4>Health and Safety:</h4>
            <ul>
              {Object.entries(listing.health_safety).map(([key, value]) => (
                <li key={key}>{`${key}: ${value}`}</li>
              ))}
            </ul>
            <h4>Accessibility:</h4>
            <ul>
              {Object.entries(listing.accessibility).map(([key, value]) => (
                <li key={key}>{`${key}: ${value}`}</li>
              ))}
            </ul>
            <h4>Space:</h4>
            <p>{listing.space.description}</p>
            <h4>More Info:</h4>
            <p>Last updated: {listing.meta.last_updated}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
