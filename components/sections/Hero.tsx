"use client";

import { ArrowDownToLine, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { hero, site, socials } from "@/data/portfolio";
import { Container } from "@/components/shared/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/SocialIcons";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="landing"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen scroll-mt-16 items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 glow-bg" aria-hidden="true" />

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.22em] uppercase text-theme-accent"
          >
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            id="hero-heading"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block text-theme-text-primary">{site.firstName}</span>
            <span className="block text-theme-accent">{site.lastName}</span>
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-7 text-theme-text-secondary sm:text-lg"
          >
            {hero.description}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={site.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-theme-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-theme-accent/90 dark:text-slate-950"
            >
              <ArrowDownToLine size={16} aria-hidden="true" />
              {hero.primaryCta}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-theme-border bg-theme-surface px-5 py-3 text-sm font-medium text-theme-text-primary transition-colors hover:border-theme-accent"
            >
              {hero.secondaryCta}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className="ml-1 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex size-11 items-center justify-center rounded-lg border border-theme-border bg-theme-surface text-theme-text-primary transition-colors hover:border-theme-accent hover:text-theme-accent"
                >
                  {social.label === "GitHub" ? <GitHubIcon size={16} /> : null}
                  {social.label === "LinkedIn" ? <LinkedInIcon size={16} /> : null}
                  {social.label === "Email" ? <Mail size={16} /> : null}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-theme-border pt-6 text-sm text-theme-text-secondary"
          >
            {site.status.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                {item === site.location ? (
                  <MapPin size={14} className="text-theme-accent" aria-hidden="true" />
                ) : (
                  <span className="size-1.5 rounded-full bg-theme-accent" aria-hidden="true" />
                )}
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative lg:pr-40">
          <ul className="mb-4 flex flex-wrap gap-2 lg:absolute lg:right-0 lg:top-6 lg:mb-0 lg:w-36 lg:flex-col">
            {hero.chips.slice(0, 3).map((chip, index) => (
              <motion.li
                key={chip}
                initial={reduce ? false : { opacity: 0, x: 12 }}
                animate={
                  reduce
                    ? { opacity: 1 }
                    : { opacity: 1, x: 0, y: [0, -6, 0] }
                }
                transition={
                  reduce
                    ? { duration: 0.4, delay: 0.2 + index * 0.08 }
                    : {
                        opacity: { duration: 0.4, delay: 0.25 + index * 0.1 },
                        x: { duration: 0.4, delay: 0.25 + index * 0.1 },
                        y: {
                          duration: 4 + index,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
                }
                className="rounded-lg border border-theme-border bg-theme-surface px-3 py-2 text-sm text-theme-text-secondary shadow-sm"
              >
                {chip}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="overflow-hidden rounded-xl border border-theme-border bg-theme-surface shadow-[0_20px_60px_-28px_rgb(15_23_42_/_0.25)]"
          >
            <div className="flex items-center gap-2 border-b border-theme-border px-4 py-3">
              <span className="size-2.5 rounded-full bg-red-400/80" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-amber-400/80" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
              <p className="ml-2 font-mono text-xs text-theme-text-secondary">
                {hero.codeFile}
              </p>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
              <code>
                <span className="text-slate-500">const</span>{" "}
                <span className="text-sky-700">profile</span>{" "}
                <span className="text-slate-500">=</span> {"{"}
                {"\n"}
                {"  "}
                <span className="text-orange-700">name</span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-teal-700">&quot;{hero.code.name}&quot;</span>
                <span className="text-slate-500">,</span>
                {"\n"}
                {"  "}
                <span className="text-orange-700">role</span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-teal-700">&quot;{hero.code.role}&quot;</span>
                <span className="text-slate-500">,</span>
                {"\n"}
                {"  "}
                <span className="text-orange-700">domains</span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-teal-700">
                  [{hero.code.domains.map((item) => `"${item}"`).join(", ")}]
                </span>
                <span className="text-slate-500">,</span>
                {"\n"}
                {"  "}
                <span className="text-orange-700">openToWork</span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-amber-600">true</span>
                {"\n"}
                {"}"}
                <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-theme-accent" />
              </code>
            </pre>
            <div className="flex items-center gap-2 border-t border-theme-border px-4 py-3 font-mono text-xs text-theme-text-secondary">
              <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
              {hero.codeStatus}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
