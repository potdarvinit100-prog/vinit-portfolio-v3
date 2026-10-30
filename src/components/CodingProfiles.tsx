import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { GitHubIcon } from "./icons";
import { profile } from "../data";

export default function CodingProfiles() {
  return (
    <section id="profiles" className="py-24 bg-panel/40 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Coding Profiles
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Where the <span className="grad-text">code lives</span>
          </h2>
          <p className="text-muted max-w-2xl mb-12">
            Public code and projects, in one place.
          </p>
        </Reveal>
        <Reveal>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-5 bg-panel border border-line rounded-2xl p-7 max-w-2xl card-hover"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
              <GitHubIcon size={22} className="text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-semibold text-lg">GitHub</h3>
              <p className="text-accent2 text-sm mb-1">potdarvinit100-prog</p>
              <p className="text-sm text-muted">
                Public repositories including this portfolio, real-time data
                apps, and hackathon builds.
              </p>
            </div>
            <ArrowUpRight size={20} className="text-muted shrink-0" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
