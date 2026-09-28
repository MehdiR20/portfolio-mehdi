type TechTagsProps = {
  tags: string[];
};

export function TechTags({ tags }: TechTagsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="border border-theme-border bg-theme-surface px-2.5 py-1 text-xs text-theme-text-secondary rounded-md"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
