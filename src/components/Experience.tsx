import { Briefcase, GraduationCap, Check } from "lucide-react";
import Reveal from "./Reveal";
import { experience, education } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Journey
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-12">
            Experience & <span className="grad-text">education</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <Reveal>
              <h3 className="flex items-center gap-2 font-display font-semibold text-lg mb-6">
                <Briefcase size={19} className="text-accent" /> Experience
              </h3>
            </Reveal>
            {experience.map((e, i) => (
              <Reveal key={e.title} delay={i * 100}>
                <div className="bg-panel border border-line rounded-2xl p-6 mb-5 card-hover">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{e.title}</h4>
                    <span className="text-xs text-muted whitespace-nowrap ml-3">
                      {e.period}
                    </span>
                  </div>
                  <p className="text-accent2 text-sm mb-4">{e.org}</p>
                  <ul className="space-y-2">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm text-muted">
                        <Check size={15} className="text-accent2 shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <div>
            <Reveal>
              <h3 className="flex items-center gap-2 font-display font-semibold text-lg mb-6">
                <GraduationCap size={19} className="text-accent" /> Education
              </h3>
            </Reveal>
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 100}>
                <div className="bg-panel border border-line rounded-2xl p-6 mb-5 card-hover">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-semibold">{e.degree}</h4>
                    <span className="text-xs text-muted whitespace-nowrap ml-3">
                      {e.period}
                    </span>
                  </div>
                  {e.school && <p className="text-accent2 text-sm mb-1">{e.school}</p>}
                  <p className="text-sm text-muted">{e.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
