import {
  Brain,
  Database,
  LayoutTemplate,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { languages, marquee, skillGroups, skillsCopy } from "@/data/portfolio";
import { Container } from "@/components/shared/Container";
import { FadeUp } from "@/components/shared/Motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TechIcon } from "@/components/shared/TechIcon";
import { cn } from "@/lib/utils";

const groupIcons: Record<string, LucideIcon> = {
  Frontend: LayoutTemplate,
  "Backend & CMS": Server,
  Databases: Database,
  "Data & AI": Brain,
  "Tools & Platforms": Wrench,
};

// Bento layout on large screens (6-column grid).
const groupSpans: Record<string, string> = {
  Frontend: "lg:col-span-3",
  "Backend & CMS": "lg:col-span-3",
  Databases: "lg:col-span-2",
  "Data & AI": "lg:col-span-4",
  "Tools & Platforms": "md:col-span-2 lg:col-span-6",
};

export function Skills() {
  const loop = [...marquee, ...marquee];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 py-[var(--section-padding)]"
    >
      <Container>
        <FadeUp>
          <SectionHeader
            id="skills-heading"
            eyebrow={skillsCopy.eyebrow}
            title={skillsCopy.title}
            description={skillsCopy.description}
          />
        </FadeUp>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, index) => {
            const GroupIcon = groupIcons[group.title] ?? Wrench;
            return (
              <FadeUp
                key={group.title}
                delay={index * 0.05}
                className={cn("h-full", groupSpans[group.title])}
              >
                <article className="h-full rounded-xl border border-theme-border bg-theme-surface p-5 shadow-sm sm:p-6">
                  <header className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-lg bg-theme-accent/10 text-theme-accent">
                      <GroupIcon size={18} aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-theme-text-primary">
                      {group.title}
                    </h3>
                    <span className="ml-auto rounded-full border border-theme-border px-2 py-0.5 text-xs text-theme-text-secondary">
                      {group.items.length}
                    </span>
                  </header>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 rounded-lg border border-theme-border bg-theme-muted/60 px-3 py-2 text-sm text-theme-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-theme-accent/50 hover:text-theme-text-primary hover:shadow-sm"
                      >
                        <TechIcon name={item} size={16} className="shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp className="mt-14">
          <h3 className="font-display text-lg font-bold">
            {skillsCopy.languagesTitle}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {languages.map((language) => (
              <li
                key={language.name}
                className="rounded-lg border border-theme-border bg-theme-surface px-3 py-2 text-sm text-theme-text-secondary"
              >
                {language.name}
                <span className="text-theme-text-primary"> — {language.level}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </Container>

      <div className="mt-16 overflow-hidden border-y border-theme-border py-5">
        <div
          className="flex w-max animate-marquee gap-10 pr-10 hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex items-center gap-2.5 font-display text-sm font-semibold tracking-wide text-theme-text-secondary uppercase"
            >
              <TechIcon name={item} size={20} />
              {item}
            </span>
          ))}
        </div>
        <p className="sr-only">{marquee.join(", ")}</p>
      </div>
    </section>
  );
}
