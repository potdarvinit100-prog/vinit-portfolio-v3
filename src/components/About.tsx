import Reveal from "./Reveal";
import { stats, aboutParagraphs } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-3">
            About
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            Builder first, <span className="grad-text">always shipping</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal delay={100}>
            <div className="space-y-4">
              {aboutParagraphs.map((p, i) => (
                <p key={i} className="text-muted leading-relaxed">
                  {p}
                </p>
              ))}
              <p className="text-muted leading-relaxed">
                Currently open to{" "}
                <span className="text-fg font-medium">
                  remote engineering roles worldwide
                </span>
                .
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="bg-panel border border-line rounded-2xl p-6 card-hover h-full">
                  <p className="font-display font-bold text-3xl grad-text mb-1">
                    {s.value}
                  </p>
                  <p className="text-sm text-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
