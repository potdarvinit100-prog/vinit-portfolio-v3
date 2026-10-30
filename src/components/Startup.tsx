import { Rocket } from "lucide-react";
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
              <img
                src="/legacyshift-banner.jpg"
                alt="LegacyShift AI — Legacy code, modernized safely."
                className="w-full max-w-xl h-auto rounded-lg mb-8"
              />
              <p className="text-lg text-muted max-w-2xl">{startup.line}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
