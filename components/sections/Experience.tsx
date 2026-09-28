import { CalendarDays, GraduationCap, MapPin } from "lucide-react";
import {
  education,
  experience,
  experienceCopy,
} from "@/data/portfolio";
import { Container } from "@/components/shared/Container";
import { FadeUp } from "@/components/shared/Motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TechTags } from "@/components/shared/TechTags";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 py-[var(--section-padding)]"
    >
      <Container>
        <FadeUp>
          <SectionHeader
            id="experience-heading"
            eyebrow={experienceCopy.eyebrow}
            title={experienceCopy.title}
            description={experienceCopy.description}
          />
        </FadeUp>

        <ol className="relative mt-14 space-y-8 border-l border-theme-border pl-8 sm:pl-10">
          {experience.map((item, index) => (
            <li key={item.id} className="relative">
              <span
                className="absolute top-1.5 -left-[37px] size-3 rounded-full bg-theme-accent sm:-left-[45px]"
                aria-hidden="true"
              />
              <FadeUp delay={index * 0.06}>
                <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-theme-accent">
                  <CalendarDays size={14} aria-hidden="true" />
                  <time>{item.period}</time>
                </p>
                <article className="rounded-xl border border-theme-border bg-theme-surface p-5 shadow-sm sm:p-6">
                  <h3 className="font-display text-xl font-bold text-theme-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-2 text-sm text-theme-text-secondary">
                    <MapPin size={14} aria-hidden="true" />
                    {item.location ? `${item.location} — ${item.organization}` : item.organization}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-theme-text-secondary sm:text-base">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <TechTags tags={item.tags} />
                  </div>
                </article>
              </FadeUp>
            </li>
          ))}
        </ol>

        <FadeUp className="mt-20">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-theme-accent">
            {experienceCopy.educationEyebrow}
          </p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight">
            {experienceCopy.educationTitle}
          </h3>
        </FadeUp>

        <ol className="relative mt-10 space-y-8 border-l border-theme-border pl-8 sm:pl-10">
          {education.map((item, index) => (
            <li key={item.id} className="relative">
              <span
                className="absolute top-1.5 -left-[37px] size-3 rounded-full bg-theme-accent sm:-left-[45px]"
                aria-hidden="true"
              />
              <FadeUp delay={index * 0.06}>
                <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-theme-accent">
                  <GraduationCap size={14} aria-hidden="true" />
                  <time>{item.period}</time>
                </p>
                <article className="rounded-xl border border-theme-border bg-theme-surface p-5 shadow-sm sm:p-6">
                  <h4 className="font-display text-xl font-bold">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-theme-text-secondary">
                    {item.organization}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-theme-text-secondary sm:text-base">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <TechTags tags={item.tags} />
                  </div>
                </article>
              </FadeUp>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
