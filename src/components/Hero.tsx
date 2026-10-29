import { motion, type Variants } from "motion/react";
import { ArrowDown, Eye, Mail } from "lucide-react";
import { LinkedInIcon } from "./icons";
import BlackHoleHero from "./BlackHoleHero";
import { profile } from "../data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <BlackHoleHero />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-5 text-center pt-24 pb-16"
      >
        <motion.p
          variants={item}
          className="text-accent2 text-sm font-medium tracking-[0.25em] uppercase mb-5"
        >
          {profile.location}
        </motion.p>
        <motion.h1
          variants={item}
          className="font-display font-bold text-5xl md:text-7xl leading-tight tracking-tight mb-5"
        >
          {profile.shortName}
        </motion.h1>
        <motion.p variants={item} className="text-xl md:text-2xl text-muted mb-3">
          <span className="grad-text font-semibold">
            {profile.roles.join("  ·  ")}
          </span>
        </motion.p>
        <motion.p variants={item} className="text-sm text-muted mb-3">
          {profile.startup.line}
        </motion.p>
        <motion.p variants={item} className="text-muted max-w-xl mx-auto mb-9">
          {profile.tagline}
        </motion.p>
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 bg-accent text-ink font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <Eye size={17} /> View CV
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 border border-line px-7 py-3 rounded-full hover:border-accent transition-colors"
          >
            <Mail size={17} /> Get in touch
          </motion.a>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 border border-line px-7 py-3 rounded-full hover:border-accent transition-colors"
          >
            <LinkedInIcon size={17} /> LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-fg transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </header>
  );
}
