import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  if (userAgent.includes("Go-http-client")) {
    return new NextResponse("Access Denied: Go-http-client blocked", { status: 403 });
  }

  return NextResponse.next();
}

// Limit which paths this middleware applies to
export const config = {
  matcher: ["/api/resume"], // only run on the resume API route
};
