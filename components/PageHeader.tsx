import Reveal from "./Reveal";

/** Einheitlicher Seitenkopf (H1) für die Unterseiten. */
export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="absolute -left-24 top-0 h-[380px] w-[380px] rounded-full bg-accent/20 blur-[120px] animate-gradient-float" />
        <div className="absolute -right-16 top-10 h-[320px] w-[320px] rounded-full bg-accent/10 blur-[120px] animate-gradient-float-slow" />
      </div>

      <div className="container-lb">
        <Reveal>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
