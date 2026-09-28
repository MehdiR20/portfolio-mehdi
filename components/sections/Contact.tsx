"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, site } from "@/data/portfolio";
import { Container } from "@/components/shared/Container";
import { FadeUp } from "@/components/shared/Motion";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "");
    const message = String(form.get("message") ?? "");
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus("opened");
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 py-[var(--section-padding)]"
    >
      <Container>
        <FadeUp>
          <SectionHeader
            id="contact-heading"
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
          />
        </FadeUp>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeUp className="space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-4 rounded-xl border border-theme-border bg-theme-surface p-5 transition-colors hover:border-theme-accent"
            >
              <Mail className="mt-0.5 text-theme-accent" size={18} aria-hidden="true" />
              <span>
                <span className="block text-xs tracking-wide text-theme-text-secondary uppercase">
                  Email
                </span>
                <span className="mt-1 block text-theme-text-primary">{site.email}</span>
              </span>
            </a>
            <a
              href={site.phoneHref}
              className="flex items-start gap-4 rounded-xl border border-theme-border bg-theme-surface p-5 transition-colors hover:border-theme-accent"
            >
              <Phone className="mt-0.5 text-theme-accent" size={18} aria-hidden="true" />
              <span>
                <span className="block text-xs tracking-wide text-theme-text-secondary uppercase">
                  Phone
                </span>
                <span className="mt-1 block text-theme-text-primary">
                  {site.phoneDisplay}
                </span>
              </span>
            </a>
            <p className="flex items-start gap-4 rounded-xl border border-theme-border bg-theme-surface p-5">
              <MapPin className="mt-0.5 text-theme-accent" size={18} aria-hidden="true" />
              <span>
                <span className="block text-xs tracking-wide text-theme-text-secondary uppercase">
                  Location
                </span>
                <span className="mt-1 block text-theme-text-primary">
                  {site.location}
                </span>
              </span>
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-xl border border-theme-border bg-theme-surface p-5 sm:p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  id="name"
                  label={contact.form.name}
                  placeholder={contact.form.namePlaceholder}
                  required
                />
                <Field
                  id="email"
                  label={contact.form.email}
                  type="email"
                  placeholder={contact.form.emailPlaceholder}
                  required
                />
              </div>
              <Field
                id="subject"
                label={contact.form.subject}
                placeholder={contact.form.subjectPlaceholder}
                required
              />
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  {contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={contact.form.messagePlaceholder}
                  className="w-full resize-none rounded-lg border border-theme-border bg-theme-bg-primary px-4 py-3 text-theme-text-primary outline-none transition-colors placeholder:text-slate-400 focus:border-theme-accent"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-lg bg-theme-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-theme-accent/90 dark:text-slate-950"
              >
                {contact.form.submit}
              </button>
              {status === "opened" ? (
                <p role="status" className="text-sm text-theme-text-secondary">
                  Your email client should open with this message.
                </p>
              ) : null}
            </form>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-theme-border bg-theme-bg-primary px-4 py-3 text-theme-text-primary outline-none transition-colors placeholder:text-slate-400 focus:border-theme-accent"
      />
    </div>
  );
}
