import { Rocket, Globe2, Users, Code2 } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data";

function StartupCard({
  name,
  line,
  pills,
}: {
  name: string;
  line: string;
  pills: { icon: "users" | "globe" | "code"; text: string }[];
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-panel to-panel p-8 md:p-12">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent2/10 blur-3xl" />
      <div className="relative">
        <p className="flex items-center gap-2 text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-4">
          <Rocket size={16} /> Currently building
        </p>
        <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-4">
          <span className="grad-text">{name}</span>
        </h2>
        <p className="text-lg text-muted max-w-2xl mb-8">{line}</p>
        <div className="flex flex-wrap gap-4">
          {pills.map((pill) => (
            <span
              key={pill.text}
              className="flex items-center gap-2 text-sm border border-line rounded-full px-4 py-2 text-muted"
            >
              {pill.icon === "users" && <Users size={15} className="text-accent" />}
              {pill.icon === "globe" && <Globe2 size={15} className="text-accent2" />}
              {pill.icon === "code" && <Code2 size={15} className="text-accent" />}
              {pill.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Startup() {
  const { startup, startupNow } = profile;
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-5 flex flex-col gap-6">
        <Reveal>
          <StartupCard
            name={startup.name}
            line={startup.line}
            pills={[
              { icon: "users", text: "Global team" },
              { icon: "globe", text: "International ambitions" },
            ]}
          />
        </Reveal>
        <Reveal>
          <StartupCard
            name={startupNow.name}
            line={startupNow.line}
            pills={[
              { icon: "users", text: "Co-founder & CTO" },
              { icon: "code", text: "YC Winter 2027 application in preparation" },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
