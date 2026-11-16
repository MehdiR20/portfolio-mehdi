"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { type Project, type ProjectCategory, projects, projectsCopy } from "@/data/portfolio";
import { Container } from "@/components/shared/Container";
import { FadeUp } from "@/components/shared/Motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GitHubIcon } from "@/components/shared/SocialIcons";
import { TechTags } from "@/components/shared/TechTags";
import { cn } from "@/lib/utils";

export function Projects() {
  const [category, setCategory] = useState<ProjectCategory>("professional");
  const filtered = projects.filter((project) => project.category === category);
  const categories = (["professional", "personal"] as const).filter((value) =>
    projects.some((project) => project.category === value)
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 py-[var(--section-padding)]"
    >
      <Container>
        <FadeUp>
          <SectionHeader
            id="projects-heading"
            eyebrow={projectsCopy.eyebrow}
            title={projectsCopy.title}
            description={projectsCopy.description}
          />
        </FadeUp>

        {categories.length > 1 && (
        <div
          role="tablist"
          aria-label="Project categories"
          className="mt-10 inline-flex rounded-lg border border-theme-border bg-theme-muted p-1"
        >
          {categories.map((value) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={category === value}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors",
                category === value
                  ? "rounded-md bg-theme-accent text-white dark:text-slate-950"
                  : "rounded-md text-theme-text-secondary hover:text-theme-text-primary"
              )}
              onClick={() => setCategory(value)}
            >
              {value === "professional"
                ? projectsCopy.professional
                : projectsCopy.personal}
            </button>
          ))}
        </div>
        )}

        <div
          role={categories.length > 1 ? "tabpanel" : undefined}
          className="mt-8 grid gap-6 sm:grid-cols-2"
        >
          <AnimatePresence mode="wait">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="flex flex-col overflow-hidden rounded-xl border border-theme-border bg-theme-surface shadow-sm"
    >
      <div
        className={cn(
          "relative h-44 overflow-hidden bg-gradient-to-br",
          project.accent
        )}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : (
          <>
            <div className="absolute inset-6 border border-white/70" aria-hidden="true" />
            <p className="absolute right-6 bottom-6 font-mono text-xs text-theme-text-secondary">
              {project.category}
            </p>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold">{project.title}</h3>
          {project.live || project.github ? (
            <a
              href={project.live ?? project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="text-theme-text-secondary transition-colors hover:text-theme-accent"
            >
              <ArrowUpRight size={18} />
            </a>
          ) : null}
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-theme-text-secondary">
          {project.description}
        </p>
        <div className="mt-4">
          <TechTags tags={project.tags} />
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex items-center gap-1 text-sm font-medium text-theme-accent"
          >
            {projectsCopy.details}
            <ChevronDown
              size={16}
              className={cn("transition-transform", open && "rotate-180")}
            />
          </button>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-theme-text-secondary hover:text-theme-accent"
            >
              {projectsCopy.visitSite}
              <ArrowUpRight size={14} />
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-theme-text-secondary hover:text-theme-accent"
            >
              <GitHubIcon size={14} />
              {projectsCopy.viewCode}
            </a>
          ) : null}
        </div>
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-3 border-t border-theme-border pt-4 text-sm text-theme-text-secondary">
                <div>
                  <p className="font-medium text-theme-text-primary">
                    Key features
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-4">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-theme-text-primary">
                    Engineering challenges
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-4">
                    {project.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
