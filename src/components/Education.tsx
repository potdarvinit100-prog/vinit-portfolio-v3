import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Education
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-12">
            Education
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 100}>
              <div className="bg-panel border border-line rounded-2xl p-6 h-full card-hover">
                <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center mb-4">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-display font-semibold">{e.degree}</h3>
                  {e.period && (
                    <span className="text-xs text-muted whitespace-nowrap">
                      {e.period}
                    </span>
                  )}
                </div>
                <p className="text-accent2 text-sm mb-2">{e.school}</p>
                <p className="text-sm text-muted">{e.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
