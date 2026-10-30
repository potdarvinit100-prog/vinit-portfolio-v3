import { useEffect, useState } from "react";
import { Menu, X, Eye } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "TPC", href: "#tpc" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-700 text-lg tracking-tight">
          <span className="grad-text font-bold">VP</span>
          <span className="text-muted font-normal">.dev</span>
        </a>
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-fg transition-colors"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium bg-accent text-ink px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            <Eye size={15} /> View CV
          </a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="text-muted"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-line px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-fg py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium bg-accent text-ink px-4 py-2 rounded-full w-fit"
          >
            <Eye size={15} /> View CV
          </a>
        </div>
      )}
    </nav>
  );
}
