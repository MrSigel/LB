import { SolarIcon, HeatPumpIcon, EnergyIcon } from "./icons";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function TrustBar({ t }: { t: Dictionary["trustBar"] }) {
  const fields = [
    { icon: SolarIcon, label: t.fields.solar },
    { icon: HeatPumpIcon, label: t.fields.heatPump },
    { icon: EnergyIcon, label: t.fields.energy },
  ];

  return (
    <section aria-label={t.aria} className="border-y border-white/10 bg-white/[0.02]">
      <div className="container-lb py-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
            {t.claim}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {fields.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="group flex cursor-default items-center gap-2.5 text-slate-200 transition-colors hover:text-white"
              >
                <Icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-semibold">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
