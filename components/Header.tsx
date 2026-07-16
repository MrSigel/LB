"use client";

import Image from "next/image";
import Link from "./AppLink";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function Header({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary["nav"];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  const navLinks = [
    { href: `/${locale}`, label: t.home },
    { href: `/${locale}/ueber-uns`, label: t.about },
    { href: `/${locale}/kompetenzen`, label: t.competencies },
    { href: `/${locale}/kontakt`, label: t.contact },
  ];

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Seitenwechsel schließt das Menü. Greift nicht, wenn der Link auf die
  // aktuelle Route zeigt – dafür schließen die Links zusätzlich per onClick.
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Wechsel auf Desktop-Breite: Panel ist dort ausgeblendet, also Zustand
  // zurücksetzen, damit die Scroll-Sperre nicht hängen bleibt.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && close();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [close]);

  // Hintergrund bei offenem Menü nicht mitscrollen lassen.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape schließt und gibt den Fokus an den Button zurück.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Fokus im Menü halten, solange es offen ist.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      const toggle = toggleRef.current;
      if (!panel || !toggle) return;

      const items = [
        toggle,
        ...Array.from(panel.querySelectorAll<HTMLElement>("a[href], button")),
      ];
      const index = items.indexOf(document.activeElement as HTMLElement);

      if (index === -1) {
        e.preventDefault();
        items[0].focus();
        return;
      }
      const next = e.shiftKey ? index - 1 : index + 1;
      if (next < 0 || next >= items.length) {
        e.preventDefault();
        items[next < 0 ? items.length - 1 : 0].focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      {/* Kein backdrop-blur: der Header ist fixed ueber scrollendem Inhalt,
          der Filter muesste also bei jedem Scroll-Frame neu berechnet werden.
          Auf Handy-GPUs (besonders Safari) ist das dauerhaft teuer. */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-white/10 bg-base-900/95"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-lb flex h-16 items-center justify-between sm:h-20">
          <Link href={`/${locale}`} className="flex items-center" aria-label={t.home_aria}>
            <Image
              src="/images/brand/logo-white.png"
              alt="Limit Breakers"
              width={640}
              height={132}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label={t.mainNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "text-white" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher locale={locale} label={t.languageChange} />
            <Link href={`/${locale}/kontakt`} className="btn-primary px-5 py-2.5 text-xs">
              {t.cta}
            </Link>
          </div>

          {/* Mobil: Sprache bleibt neben dem Menü-Button sichtbar, damit sie
              nicht erst hinter dem Menü gefunden werden muss. */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher locale={locale} label={t.languageChange} />
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-colors hover:border-accent/50"
              aria-label={open ? t.menuClose : t.menuOpen}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-white transition-all duration-300 ${
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-white transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-white transition-all duration-300 ${
                    open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Auf- und Zuklappen per CSS-Grid: grid-template-rows von 0fr auf 1fr
            animiert eine Hoehe von auto, was mit max-height nicht sauber geht. */}
        <nav
          ref={panelRef}
          id="mobile-menu"
          aria-label={t.mobileNav}
          className={`grid overflow-hidden border-white/10 bg-base-900 transition-all duration-300 ease-out md:hidden ${
            open
              ? "visible grid-rows-[1fr] border-t opacity-100"
              : "invisible grid-rows-[0fr] border-t-0 opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain sm:max-h-[calc(100dvh-5rem)]">
              <div className="container-lb flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className={`rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-white/5 ${
                      pathname === link.href ? "text-accent-light" : "text-slate-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href={`/${locale}/kontakt`} onClick={close} className="btn-primary mt-3">
                  {t.cta}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Muss außerhalb des Headers liegen: dessen Containing Block wuerde
          position:fixed sonst auf den Header statt aufs Viewport beziehen. */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-200 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
