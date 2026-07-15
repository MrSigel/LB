import { SolarIcon, HeatPumpIcon, EnergyIcon } from "./icons";

const fields = [
  { icon: SolarIcon, label: "Photovoltaik" },
  { icon: HeatPumpIcon, label: "Wärmepumpe" },
  { icon: EnergyIcon, label: "Strom & Gas" },
];

export default function TrustBar() {
  return (
    <section aria-label="Tätigkeitsfelder" className="border-y border-white/10 bg-white/[0.02]">
      <div className="container-lb py-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
            Aktiv im PV-, Wärmepumpen- sowie Strom- und Gas-Vertrieb
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {fields.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-slate-200">
                <Icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
