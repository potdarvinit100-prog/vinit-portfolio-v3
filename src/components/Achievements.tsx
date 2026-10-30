import { Trophy, Award, Medal, Zap, Star } from "lucide-react";
import Reveal from "./Reveal";
import { achievements } from "../data";

const icons = [Award, Medal, Trophy, Zap, Star];

export default function Achievements() {
  const spotlight = achievements.find((a) => a.spotlight);
  const rest = achievements.filter((a) => !a.spotlight);
  return (
    <section id="achievements" className="py-24 bg-panel/40 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Recognition
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Achievements & <span className="grad-text">Recognition</span>
          </h2>
          <p className="text-muted max-w-2xl mb-12">
            Competition results, selections and certifications earned along
            the way.
          </p>
        </Reveal>
        {spotlight && (
          <Reveal>
            <div className="spotlight-card rounded-3xl p-8 md:p-10 mb-6 card-hover">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
                  <Trophy size={30} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-2">
                    Runner-Up · Spotlight
                  </p>
                  <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
                    {spotlight.title}
                  </h3>
                  <p className="text-muted leading-relaxed max-w-2xl">
                    {spotlight.detail}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={a.title} delay={(i % 3) * 100}>
                <div className="bg-panel border border-line rounded-2xl p-6 h-full card-hover">
                  <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{a.title}</h3>
                  <p className="text-sm text-muted">{a.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
