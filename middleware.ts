// import { NextRequest, NextResponse } from "next/server";
// import {
//   DEFAULT_REDIRECT,
//   PUBLIC_ROUTES,
//   RESTRICTED_PUBLIC_ROUTES,
//   ROOT,
// } from "./lib/routes";
// import { auth } from "./auth";

// export default async function middleware(req: NextRequest) {
//   const session = await auth();
//   const path = req.nextUrl.pathname;
//   const isRestrictedPublicRoute = RESTRICTED_PUBLIC_ROUTES.some((route) =>
//     path.startsWith(route),
//   );
//   const isPublicRoute = PUBLIC_ROUTES.some((route) => path.startsWith(route));

//   // Redirect logged-in users from restricted public routes (e.g., /sign-in, /sign-up)
//   if (session && isRestrictedPublicRoute && path !== DEFAULT_REDIRECT) {
//     return NextResponse.redirect(new URL(DEFAULT_REDIRECT, req.url));
//   }

//   // Redirect non-logged-in users from non-public routes to root
//   if (!session && !isRestrictedPublicRoute && !isPublicRoute && path !== ROOT) {
//     return NextResponse.redirect(new URL(ROOT, req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
// };

export { auth as middleware } from "@/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
