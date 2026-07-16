"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon } from "./icons";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Client-Insel: nur das Formular selbst braucht Interaktivitaet.
 *
 * Die API liefert nur Fehlercodes, keine fertigen Saetze – uebersetzt wird
 * hier. Sonst bekaeme ein bulgarischer Besucher deutsche Fehlermeldungen.
 */
export default function ContactForm({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary["contact"]["form"];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const messageFor = (code: unknown) => {
    switch (code) {
      case "fields":
        return t.errorFields;
      case "toolong":
        return t.errorTooLong;
      case "email":
        return t.errorEmail;
      case "privacy":
        return t.errorPrivacy;
      case "notconfigured":
        return t.errorNotConfigured;
      case "send":
        return t.errorSend;
      default:
        return t.errorGeneric;
    }
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vorname: fd.get("vorname"),
          nachname: fd.get("nachname"),
          email: fd.get("email"),
          nachricht: fd.get("nachricht"),
          datenschutz: fd.get("datenschutz") === "on",
          website: fd.get("website"),
          locale,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(messageFor(data.error));
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setError(t.errorOffline);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="vorname" label={t.firstName} autoComplete="given-name" />
        <Field id="nachname" label={t.lastName} autoComplete="family-name" />
      </div>
      <Field id="email" label={t.email} type="email" autoComplete="email" />
      <div>
        <label htmlFor="nachricht" className="mb-2 block text-sm font-medium text-slate-200">
          {t.message}
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={4}
          required
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-100 placeholder-slate-500 outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
          placeholder={t.messagePlaceholder}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-400">
        <input
          type="checkbox"
          name="datenschutz"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-accent"
        />
        <span>
          {t.privacyBefore}{" "}
          <a
            href={`/${locale}/datenschutz`}
            className="text-accent-light underline hover:text-accent"
          >
            {t.privacyLink}
          </a>{" "}
          {t.privacyAfter}
        </span>
      </label>

      {/* Honeypot: für Menschen unsichtbar, Bots tragen hier ein. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
        <label htmlFor="website">{t.honeypot}</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "sending" ? t.sending : t.submit}
        {status !== "sending" && <ArrowRightIcon className="h-4 w-4" />}
      </button>

      {status === "success" && (
        <p
          role="status"
          className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent-light"
        >
          {t.success}
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
        >
          {error}
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-100 placeholder-slate-500 outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}
