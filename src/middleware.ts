import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Route matchers
const isBookingRoute = createRouteMatcher(["/bookings(.*)"]);
const isInvestorRoute = createRouteMatcher([
  "/api/transak(.*)",
  "/investors(.*)",
]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware((auth, req) => {
  // Restrict admin route to users with specific role
  if (isAdminRoute(req)) auth().protect({ role: "org:admin" });

  // Restrict dashboard routes to signed in users
  if (isBookingRoute(req)) auth().protect();

  if (isInvestorRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
