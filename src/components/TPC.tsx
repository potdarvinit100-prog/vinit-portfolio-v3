import { GraduationCap, Check } from "lucide-react";
import Reveal from "./Reveal";
import { tpc } from "../data";

export default function TPC() {
  return (
    <section id="tpc" className="py-24 bg-panel/40 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Training & Placement Cell
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Placement-cell <span className="grad-text">engagement</span>
          </h2>
          <p className="text-accent2 text-sm mb-8">{tpc.org}</p>
        </Reveal>
        <Reveal>
          <div className="bg-panel border border-line rounded-2xl p-7 md:p-8 max-w-3xl card-hover">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg">
                Placement preparation & job applications
              </h3>
            </div>
            <ul className="space-y-3">
              {tpc.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm text-muted leading-relaxed">
                  <Check size={15} className="text-accent2 shrink-0 mt-0.5" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
