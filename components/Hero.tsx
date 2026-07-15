"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "./icons";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24"
    >
      {/* Dezente animierte Hintergrund-Grafik: abstrakte Gradient-Shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-accent/25 blur-[120px] animate-gradient-float" />
        <div className="absolute -right-20 bottom-0 h-[460px] w-[460px] rounded-full bg-accent/15 blur-[130px] animate-gradient-float-slow" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at 50% 0%, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-lb">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            }}
          >
            {["Planbare", "Neukundengewinnung", "für"].map((word, i) => (
              <motion.span
                key={i}
                className="mr-[0.25em] inline-block"
                variants={{
                  hidden: reduceMotion ? {} : { opacity: 0, y: 24, rotateX: -40 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="inline-block bg-gradient-to-r from-accent via-accent-light to-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shimmer"
              variants={{
                hidden: reduceMotion ? {} : { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Energievertriebe
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            Wir ticken anders – und das macht sich am Erfolg unserer Kunden
            bemerkbar. Als aktiver Player im PV- und Wärmepumpen-Leadgeschäft
            sowie im Strom- und Gas-Vertrieb bringen wir Struktur, Effizienz und
            messbares Wachstum in deinen Vertrieb.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/kontakt" className="btn-primary">
              Kostenloses Erstgespräch
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/ueber-uns" className="btn-ghost">
              Mehr über uns
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
