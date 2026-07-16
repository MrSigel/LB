import { NextResponse, type NextRequest } from "next/server";
import { locales, matchLocale, isLocale, type Locale } from "@/lib/i18n/config";

const COOKIE = "locale";

/**
 * Leitet Aufrufe ohne Sprachpraefix auf die passende Sprache um.
 *
 * Reihenfolge:
 *   1. Zuvor selbst gewaehlte Sprache (Cookie) – eine bewusste Wahl
 *      schlaegt die Browsereinstellung.
 *   2. Accept-Language: Deutsch -> de, Bulgarisch -> bg.
 *   3. Alles andere -> en.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Steckt bereits ein Sprachpraefix im Pfad, nur die Wahl festhalten.
  const current = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (current) {
    const response = NextResponse.next();
    if (request.cookies.get(COOKIE)?.value !== current) {
      response.cookies.set(COOKIE, current, {
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
        path: "/",
      });
    }
    return response;
  }

  const saved = request.cookies.get(COOKIE)?.value;
  const locale: Locale =
    saved && isLocale(saved)
      ? saved
      : matchLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Alles ausser Next-Interna, API, Sitemap/robots und Dateien mit Endung.
  matcher: ["/((?!_next|api|images|robots.txt|sitemap.xml|.*\\..*).*)"],
};
