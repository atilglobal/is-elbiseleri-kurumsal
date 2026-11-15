import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALE_PREFIXES = new Set([
  "en",
  "fr",
  "de",
  "es",
  "it",
  "nl",
  "pt",
  "ru",
  "ar",
  "zh",
  "ja",
  "ko",
]);

export function middleware(request: NextRequest) {
  const segments = request.nextUrl.pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first && LOCALE_PREFIXES.has(first.toLowerCase())) {
    const url = request.nextUrl.clone();
    url.pathname = `/${segments.slice(1).join("/")}` || "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|products|favicon.ico|.*\\..*).*)"],
};
