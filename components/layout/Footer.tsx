import { GitHubIcon, LinkedInIcon } from "@/components/shared/SocialIcons";
import { site, socials } from "@/data/portfolio";
import { Container } from "@/components/shared/Container";

export function Footer() {
  const year = new Date().getFullYear();
  const github = socials.find((item) => item.label === "GitHub");
  const linkedin = socials.find((item) => item.label === "LinkedIn");

  return (
    <footer
      id="footer"
      className="border-t border-theme-border py-10"
    >
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-bold">
            {site.fullName}
          </p>
          <p className="mt-1 text-sm text-theme-text-secondary">
            © {year} — {site.role}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {github ? (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-theme-border bg-theme-surface text-theme-text-primary transition-colors hover:border-theme-accent hover:text-theme-accent"
            >
              <GitHubIcon size={18} />
            </a>
          ) : null}
          {linkedin ? (
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-theme-border bg-theme-surface text-theme-text-primary transition-colors hover:border-theme-accent hover:text-theme-accent"
            >
              <LinkedInIcon size={18} />
            </a>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
