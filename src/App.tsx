import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Startup from "./components/Startup";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import TPC from "./components/TPC";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Assistant from "./components/Assistant";
import { profile } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg font-body antialiased">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Startup />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <TPC />
        <Achievements />
        <Education />
        <CodingProfiles />
        <Contact />
      </main>
      <footer className="border-t border-line py-8">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted">
            © 2026 {profile.shortName}
          </p>
          <div className="flex items-center gap-5 text-sm text-muted">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-fg transition-colors">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-fg transition-colors">
              Email
            </a>
          </div>
          <p className="text-sm text-muted">{profile.location}</p>
        </div>
      </footer>
      <Assistant />
    </div>
  );
}
