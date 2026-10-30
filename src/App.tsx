import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Startup from "./components/Startup";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import TPC from "./components/TPC";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Assistant from "./components/Assistant";
import { profile } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg font-body antialiased">
      <Navbar />
      <main>
        <Hero />
        <Startup />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <TPC />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <footer className="border-t border-line py-8">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted">
            © 2026 {profile.shortName}
          </p>
          <p className="text-sm text-muted">{profile.location}</p>
        </div>
      </footer>
      <Assistant />
    </div>
  );
}
