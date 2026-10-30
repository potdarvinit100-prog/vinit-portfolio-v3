import { Briefcase, Check } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-panel/40 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Professional Experience
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Experience
          </h2>
          <p className="text-muted max-w-2xl mb-12">
            Internship and contract work — production systems, real teams,
            shipped features.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((e, i) => (
            <Reveal key={e.title} delay={i * 100}>
              <div className="bg-panel border border-line rounded-2xl p-6 md:p-7 h-full card-hover">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display font-semibold text-lg flex items-center gap-2">
                    <Briefcase size={18} className="text-accent shrink-0" />
                    {e.title}
                  </h3>
                  <span className="text-xs text-muted whitespace-nowrap ml-3">
                    {e.period}
                  </span>
                </div>
                <p className="text-accent2 text-sm mb-4">{e.org}</p>
                <ul className="space-y-2">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm text-muted leading-relaxed">
                      <Check size={15} className="text-accent2 shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
