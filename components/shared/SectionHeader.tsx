type SectionHeaderProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.22em] uppercase text-theme-accent">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 font-display text-4xl font-bold tracking-tight text-theme-text-primary sm:text-5xl"
      >
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-theme-text-secondary sm:text-lg">
        {description}
      </p>
    </header>
  );
}
