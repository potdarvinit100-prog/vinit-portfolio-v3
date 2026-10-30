import { Rocket, Globe2, Users } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data";

export default function Startup() {
  const { startup } = profile;
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-panel to-panel p-8 md:p-12">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent2/10 blur-3xl" />
            <div className="relative">
              <p className="flex items-center gap-2 text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-4">
                <Rocket size={16} /> Currently building
              </p>
              <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-4">
                <span className="grad-text">{startup.name}</span>
              </h2>
              <p className="text-lg text-muted max-w-2xl mb-8">{startup.line}</p>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-2 text-sm border border-line rounded-full px-4 py-2 text-muted">
                  <Users size={15} className="text-accent" /> Co-founder & CTO
                </span>
                <span className="flex items-center gap-2 text-sm border border-line rounded-full px-4 py-2 text-muted">
                  <Globe2 size={15} className="text-accent2" /> YC Winter 2027 application in preparation
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
