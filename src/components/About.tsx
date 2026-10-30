import Reveal from "./Reveal";
import { profile, stats, skills } from "../data";

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
        <div className="grid md:grid-cols-2 gap-10">
          <Reveal delay={100}>
            <p className="text-muted leading-relaxed mb-4">
              I'm {profile.shortName}, a final-year Computer Engineering student
              from Pune, India. I work across the full stack —
              Java/Spring Boot, React, TypeScript, Python — and deep into AI:
              RAG pipelines, vector embeddings, ML/NLP, and voice agents.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Since 2023 I've built and shipped{" "}
              <span className="text-fg font-medium">20+ applications</span>{" "}
              end to end — scoping, building, deploying, and iterating directly
              with clients. I don't do tutorials; I ship production-style
              systems with real users and real data.
            </p>
            <p className="text-muted leading-relaxed">
              Currently open to remote engineering roles worldwide.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="bg-panel border border-line rounded-2xl p-6 card-hover">
                  <p className="font-display font-bold text-3xl grad-text mb-1">
                    {s.value}
                  </p>
                  <p className="text-sm text-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={120}>
          <div className="mt-12 bg-panel border border-line rounded-2xl p-6 md:p-8">
            <h3 className="font-display font-semibold text-lg mb-5">Technical arsenal</h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="text-sm font-semibold text-accent2 w-32 shrink-0">
                    {group}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-ink border border-line rounded-full px-3 py-1 text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
