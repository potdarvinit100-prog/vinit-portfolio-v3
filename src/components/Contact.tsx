import { Mail, Phone, Send, Eye } from "lucide-react";
import { LinkedInIcon, InstagramIcon } from "./icons";
import Reveal from "./Reveal";
import { profile } from "../data";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: LinkedInIcon, label: "LinkedIn", value: "in/vinit-potdar-1314a9332", href: profile.linkedin },
  { icon: Send, label: "Telegram", value: "hello_vinitt", href: profile.telegram },
  { icon: InstagramIcon, label: "Instagram", value: "_yrrr_vinit", href: profile.instagram },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <Reveal>
          <p className="text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Contact
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-5">
            Let's build something <span className="grad-text">great</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-10">
            Open to remote engineering roles worldwide and collaborations.
            My inbox is always open.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 bg-panel border border-line rounded-2xl p-5 card-hover text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                  <c.icon size={18} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted">{c.label}</p>
                  <p className="text-sm font-medium truncate">{c.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
          <Reveal delay={400}>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl p-5 text-left bg-accent text-ink card-hover"
            >
              <div className="w-10 h-10 rounded-xl bg-ink/15 flex items-center justify-center shrink-0">
                <Eye size={18} />
              </div>
              <div>
                <p className="text-xs opacity-70">Resume</p>
                <p className="text-sm font-semibold">View CV</p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
