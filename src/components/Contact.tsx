import { useState, type FormEvent } from "react";
import { Mail, Phone, Send, Eye } from "lucide-react";
import { LinkedInIcon, InstagramIcon, GitHubIcon } from "./icons";
import Reveal from "./Reveal";
import { profile } from "../data";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: LinkedInIcon, label: "LinkedIn", value: "in/vinit-potdar-1314a9332", href: profile.linkedin },
  { icon: Send, label: "Telegram", value: "hello_vinitt", href: profile.telegram },
  { icon: InstagramIcon, label: "Instagram", value: "_yrrr_vinit", href: profile.instagram },
  { icon: GitHubIcon, label: "GitHub", value: "potdarvinit100-prog", href: profile.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl mx-auto text-center">
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
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={(i % 3) * 80}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 bg-panel border border-line rounded-2xl p-5 card-hover text-left h-full"
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
          <Reveal delay={240}>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl p-5 text-left bg-accent text-ink card-hover h-full"
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
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="max-w-2xl mx-auto bg-panel border border-line rounded-3xl p-7 md:p-8"
          >
            <h3 className="font-display font-semibold text-xl mb-1">Send a message</h3>
            <p className="text-sm text-muted mb-6">
              This opens your email app with the message addressed to me — no
              data is stored on this site.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium block mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium block mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="field"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="contact-subject" className="text-sm font-medium block mb-1.5">
                Subject
              </label>
              <input
                id="contact-subject"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What is this about?"
                className="field"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="contact-message" className="text-sm font-medium block mb-1.5">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write your message..."
                className="field"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-accent text-ink font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <Send size={17} /> Send message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
