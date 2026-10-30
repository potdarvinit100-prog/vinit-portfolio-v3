import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects, latestBuilds } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-panel/40 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Projects
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Industry-grade <span className="grad-text">builds</span>
          </h2>
          <p className="text-muted max-w-2xl mb-12">
            Four production-style systems — real pipelines, real data, real
            verification. No toy demos.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 120}>
              <article className="bg-panel border border-line rounded-2xl p-7 h-full card-hover flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1">{p.name}</h3>
                    <p className="text-accent2 text-sm">{p.tagline}</p>
                  </div>
                  <ArrowUpRight size={20} className="text-muted shrink-0 mt-1" />
                </div>
                <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs font-semibold bg-accent/15 text-accent border border-accent/30 rounded-full px-3 py-1"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-ink border border-line rounded-full px-3 py-1 text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-3 mt-16">
            Latest from GitHub
          </p>
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
            Fresh <span className="grad-text">builds</span>
          </h3>
          <p className="text-muted max-w-2xl mb-12">
            The newest pushed projects — real-time apps on live public data,
            with their source and last-updated time shown, and honest error
            states when a feed fails. Source on GitHub.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {latestBuilds.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 120}>
              <article className="bg-panel border border-line rounded-2xl p-7 h-full card-hover flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1">{p.name}</h3>
                    <p className="text-accent2 text-sm">{p.tagline}</p>
                  </div>
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} source on GitHub`}
                    >
                      <ArrowUpRight size={20} className="text-muted shrink-0 mt-1" />
                    </a>
                  ) : (
                    <ArrowUpRight size={20} className="text-muted shrink-0 mt-1" />
                  )}
                </div>
                <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs font-semibold bg-accent/15 text-accent border border-accent/30 rounded-full px-3 py-1"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-ink border border-line rounded-full px-3 py-1 text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
