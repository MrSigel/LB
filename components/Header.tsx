"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kompetenzen", label: "Kompetenzen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

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
        ...Array.from(panel.querySelectorAll<HTMLElement>("a[href]")),
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
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-white/10 bg-base-900/90 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-lb flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="flex items-center" aria-label="Limit Breakers – Startseite">
            <Image
              src="/images/brand/logo-white.png"
              alt="Limit Breakers"
              width={640}
              height={132}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
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

          <Link href="/kontakt" className="btn-primary hidden px-5 py-2.5 text-xs md:inline-flex">
            Erstgespräch
          </Link>

          {/* Mobile-Menü-Button */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-colors hover:border-accent/50 md:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
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

        {/* Auf- und Zuklappen per CSS-Grid: grid-template-rows von 0fr auf 1fr
            animiert eine Hoehe von auto, was mit max-height nicht sauber geht.
            Das Panel bleibt montiert; invisible nimmt die Links im
            geschlossenen Zustand aus Tab-Reihenfolge und Screenreader und
            schaltet dank Transition erst nach dem Zuklappen. */}
        <nav
          ref={panelRef}
          id="mobile-menu"
          aria-label="Hauptnavigation mobil"
          className={`grid overflow-hidden border-white/10 bg-base-900/95 backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
            open
              ? "visible grid-rows-[1fr] border-t opacity-100"
              : "invisible grid-rows-[0fr] border-t-0 opacity-0"
          }`}
        >
          <div className="min-h-0">
            {/* Eigener Scrollbereich: im Querformat passt das Menü sonst
                nicht auf den Schirm und der CTA wäre nicht erreichbar. */}
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
                <Link href="/kontakt" onClick={close} className="btn-primary mt-3">
                  Kostenloses Erstgespräch
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Muss außerhalb des Headers liegen: dessen backdrop-blur erzeugt einen
          Containing Block, in dem sich position:fixed auf den Header statt auf
          das Viewport bezieht – der Backdrop wäre sonst wirkungslos. */}
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
