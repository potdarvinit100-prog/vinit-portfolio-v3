import Reveal from "./Reveal";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-panel/40 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Technical Skills
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            What I <span className="grad-text">work with</span>
          </h2>
          <p className="text-muted max-w-2xl mb-12">
            Every technology below comes from shipped work — full-stack
            platforms, AI systems and production backends.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([group, items], i) => (
            <Reveal key={group} delay={(i % 3) * 100}>
              <div className="bg-panel border border-line rounded-2xl p-6 h-full card-hover">
                <h3 className="font-display font-semibold text-lg mb-4 text-accent2">
                  {group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-ink border border-line rounded-full px-3 py-1.5 text-muted hover:text-fg hover:border-accent/50 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
