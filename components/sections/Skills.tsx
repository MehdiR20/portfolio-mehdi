import { languages, marquee, skillGroups, skillsCopy } from "@/data/portfolio";
import { Container } from "@/components/shared/Container";
import { FadeUp } from "@/components/shared/Motion";
import { SectionHeader } from "@/components/shared/SectionHeader";

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

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <FadeUp key={group.title} delay={index * 0.05}>
              <h4 className="font-display text-lg font-bold">{group.title}</h4>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-theme-text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-14">
          <h4 className="font-display text-lg font-bold">
            {skillsCopy.languagesTitle}
          </h4>
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
              className="font-display text-sm font-semibold tracking-wide text-theme-text-secondary uppercase"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="sr-only">{marquee.join(", ")}</p>
      </div>
    </section>
  );
}
