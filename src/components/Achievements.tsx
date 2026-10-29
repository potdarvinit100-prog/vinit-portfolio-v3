import { Trophy, Award, Medal, Zap } from "lucide-react";
import Reveal from "./Reveal";
import { achievements } from "../data";

const icons = [Award, Medal, Trophy, Zap];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-panel/40 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Recognition
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-12">
            Achievements
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={a.title} delay={i * 100}>
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
